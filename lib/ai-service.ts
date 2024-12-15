export interface AIServiceConfig {
  apiKey: string;
  model?: string;
  temperature?: number;
}

export interface AIResponse {
  content: string;
  role: 'assistant';
}

export class AIService {
  private apiKey: string;
  private model: string;
  private temperature: number;

  constructor(config: AIServiceConfig) {
    this.apiKey = config.apiKey;
    this.model = config.model || 'gpt-4';
    this.temperature = config.temperature || 0.7;
  }

  async generateResponse(prompt: string): Promise<AIResponse> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages: [
          {
            role: 'system',
            content: 'You are a dating profile expert who creates engaging and authentic personas based on user information. Your responses should be natural, positive, and reflect the unique characteristics of each individual.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: this.temperature,
      }),
    });

    if (!response.ok) {
      throw new Error(`AI service error: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      content: data.choices[0].message.content,
      role: 'assistant',
    };
  }
}
