import { generatePersona } from '@/lib/generate-persona';

export async function GET() {
  try {
    // Test data
    const testAnswers = {
      name: "Alex",
      gender: "Non-binary",
      age: 28,
      relationshipGoals: "Long-term relationship",
      genderPreference: "All genders",
      career: "Software Engineer",
      heightWeight: "5'8\", athletic",
      interests: ["coding", "hiking", "photography"],
      education: "Bachelor's in Computer Science"
    };

    const persona = await generatePersona(testAnswers, {
      apiKey: process.env.OPENAI_API_KEY!,
      model: 'gpt-4',
      temperature: 0.7,
    });

    return new Response(JSON.stringify({ 
      success: true, 
      persona,
      envCheck: {
        hasOpenAI: !!process.env.OPENAI_API_KEY,
        hasDB: !!process.env.DATABASE_URL,
        hasBlob: !!process.env.BLOB_READ_WRITE_TOKEN,
        hasAuth: !!process.env.AUTH_SECRET,
      }
    }, null, 2), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Test route error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      envCheck: {
        hasOpenAI: !!process.env.OPENAI_API_KEY,
        hasDB: !!process.env.DATABASE_URL,
        hasBlob: !!process.env.BLOB_READ_WRITE_TOKEN,
        hasAuth: !!process.env.AUTH_SECRET,
      }
    }, null, 2), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
