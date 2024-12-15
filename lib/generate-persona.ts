import { AIService, type AIServiceConfig } from './ai-service';

interface UserAnswers {
  name: string;
  gender: string;
  age: number;
  relationshipGoals: string;
  genderPreference: string;
  career: string;
  heightWeight: string;
  interests: string[];
  education: string;
}

export interface PersonaProfile {
  summary: string;
  matchingPreferences: {
    lookingFor: string;
    dealBreakers: string[];
    idealMatch: string;
  };
  conversationStyle: {
    tone: string;
    topics: string[];
    communicationPreferences: string;
  };
  personalityTraits: string[];
  dateIdeas: string[];
}

export function generatePersonaPrompt(answers: UserAnswers): string {
  return `Create a dating profile persona for someone with the following characteristics. Format the response in JSON.

Profile Information:
- Name: ${answers.name}
- Gender: ${answers.gender}
- Age: ${answers.age}
- Looking for: ${answers.relationshipGoals}
- Interested in: ${answers.genderPreference}
- Career: ${answers.career}
- Physical attributes: ${answers.heightWeight}
- Interests: ${answers.interests.join(', ')}
- Education: ${answers.education}

Please provide a JSON response with the following structure:
{
  "summary": "A natural, engaging paragraph that captures their personality and dating goals",
  "matchingPreferences": {
    "lookingFor": "Clear description of what they seek in a partner",
    "dealBreakers": ["List of 3-5 deal breakers"],
    "idealMatch": "Description of their ideal match"
  },
  "conversationStyle": {
    "tone": "Overall communication style",
    "topics": ["3-5 conversation topics they enjoy"],
    "communicationPreferences": "How they prefer to communicate"
  },
  "personalityTraits": ["5 key personality traits"],
  "dateIdeas": ["3-5 date ideas that match their interests"]
}`;
}

export async function generatePersona(
  answers: UserAnswers,
  aiConfig: AIServiceConfig
): Promise<PersonaProfile> {
  const aiService = new AIService(aiConfig);
  const prompt = generatePersonaPrompt(answers);
  
  try {
    const response = await aiService.generateResponse(prompt);
    return JSON.parse(response.content) as PersonaProfile;
  } catch (error) {
    console.error('Error generating persona:', error);
    // Fallback to a basic persona if AI service fails
    return {
      summary: `${answers.name} is a ${answers.age}-year-old ${answers.gender} working in ${answers.career}. They're passionate about ${answers.interests.join(', ')} and are looking for ${answers.relationshipGoals}.`,
      matchingPreferences: {
        lookingFor: `Seeking ${answers.genderPreference} for ${answers.relationshipGoals}`,
        dealBreakers: ['Dishonesty', 'Lack of ambition', 'Poor communication'],
        idealMatch: `Someone who shares their interests and values`,
      },
      conversationStyle: {
        tone: 'Friendly and authentic',
        topics: answers.interests.slice(0, 3),
        communicationPreferences: 'Open and honest communication',
      },
      personalityTraits: ['Authentic', 'Ambitious', 'Caring', 'Passionate', 'Open-minded'],
      dateIdeas: ['Coffee and conversation', 'Outdoor adventure', 'Cultural experience'],
    };
  }
}
