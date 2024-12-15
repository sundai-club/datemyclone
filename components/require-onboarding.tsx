'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface RequireOnboardingProps {
  children: React.ReactNode;
  onboardingCompleted: boolean;
}

export function RequireOnboarding({ children, onboardingCompleted }: RequireOnboardingProps) {
  const router = useRouter();

  useEffect(() => {
    if (!onboardingCompleted) {
      router.push('/onboarding');
    }
  }, [onboardingCompleted, router]);

  if (!onboardingCompleted) {
    return null;
  }

  return <>{children}</>;
}
