// AI Service for handling Gemini API integration and text summarization

class AIService {
  constructor() {
    // In a real application, you would store the API key securely
    this.geminiApiKey = process.env.REACT_APP_GEMINI_API_KEY || 'demo-key';
    this.geminiApiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
  }

  // Generate discussion summary text file content
  generateDiscussionText(messages) {
    let discussionText = "=== SAHA GRAM DISCUSSION SUMMARY ===\n";
    discussionText += `Generated on: ${new Date().toLocaleString()}\n`;
    discussionText += `Total Messages: ${messages.length}\n\n`;
    discussionText += "=== CONVERSATION LOG ===\n\n";

    messages.forEach((message, index) => {
      discussionText += `${index + 1}. SENDER: ${message.sender}\n`;
      discussionText += `   TIME: ${message.time}\n`;
      discussionText += `   MESSAGE: ${message.text}\n`;
      discussionText += `   TYPE: ${message.isAdmin ? 'ADMIN' : 'CITIZEN'}\n\n`;
    });

    return discussionText;
  }

  // Create and download text file
  downloadDiscussionFile(messages) {
    const content = this.generateDiscussionText(messages);
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `saha-gram-discussion-${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    return content;
  }

  // Call Gemini API for summarization
  async callGeminiAPI(discussionText) {
    const prompt = `Please provide a concise summary of this group discussion from Saha Gram (Digital Village Platform). 

Key points to include:
1. Main topics discussed
2. Key concerns raised by citizens
3. Administrative responses and actions
4. Important decisions or announcements
5. Overall sentiment of the discussion

Discussion content:
${discussionText}

Please provide a professional summary suitable for administrative review:`;

    try {
      const response = await fetch(`${this.geminiApiUrl}?key=${this.geminiApiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return data.candidates[0]?.content?.parts[0]?.text || 'Summary generation failed.';
    } catch (error) {
      console.error('Gemini API Error:', error);
      return this.generateFallbackSummary(discussionText);
    }
  }

  // Fallback summary when API is not available
  generateFallbackSummary(discussionText) {
    const lines = discussionText.split('\n');
    const messageCount = lines.filter(line => line.includes('SENDER:')).length;
    const adminMessages = lines.filter(line => line.includes('TYPE: ADMIN')).length;
    const citizenMessages = messageCount - adminMessages;

    return `
📊 DISCUSSION SUMMARY (Generated Offline)

📈 STATISTICS:
• Total Messages: ${messageCount}
• Citizen Messages: ${citizenMessages}
• Admin Responses: ${adminMessages}

🏛️ ADMINISTRATIVE OVERVIEW:
This discussion involved active participation from both citizens and administrative officials on the Saha Gram digital platform.

⚠️ NOTE: This is a basic summary. For detailed AI analysis, please ensure internet connectivity and valid API configuration.

💡 RECOMMENDATION: Review the full discussion log for complete context and specific action items.
    `.trim();
  }

  // Main function to generate AI summary
  async generateAISummary(messages) {
    try {
      // Generate and download the discussion text file
      const discussionText = this.downloadDiscussionFile(messages);
      
      // Get AI summary from Gemini
      const summary = await this.callGeminiAPI(discussionText);
      
      return {
        success: true,
        summary: summary,
        textFileGenerated: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('AI Summary Error:', error);
      return {
        success: false,
        error: error.message,
        summary: this.generateFallbackSummary(''),
        textFileGenerated: false
      };
    }
  }
}

// Export singleton instance
export default new AIService();