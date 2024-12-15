import { auth } from '@/app/(auth)/auth';
import { db } from '@/lib/db';
import { userProfile } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return new Response('Unauthorized', { status: 401 });
    }

    const { answers } = await request.json();

    // Validate required fields
    if (!answers[1] || !answers[2] || !answers[3] || !answers[4] || !answers[5] || 
        !answers[6] || !answers[7] || !answers[8] || !answers[9]) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    // Check if profile already exists
    const existingProfile = await db
      .select()
      .from(userProfile)
      .where(eq(userProfile.userId, session.user.id))
      .limit(1);

    const profileData = {
      userId: session.user.id,
      name: answers[1],
      gender: answers[2],
      age: parseInt(answers[3]),
      relationshipGoals: answers[4],
      genderPreference: answers[5],
      career: answers[6],
      heightWeight: answers[7],
      interests: answers[8],
      education: answers[9],
      onboardingCompleted: true,
      updatedAt: new Date(),
    };

    if (existingProfile.length > 0) {
      // Update existing profile
      await db
        .update(userProfile)
        .set(profileData)
        .where(eq(userProfile.userId, session.user.id));
    } else {
      // Create new profile
      await db.insert(userProfile).values({
        ...profileData,
        createdAt: new Date(),
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error saving onboarding answers:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to save answers',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
