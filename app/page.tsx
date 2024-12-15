import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { CloneExamples } from '@/components/landing/CloneExamples';
import { PostDateReport } from '@/components/landing/PostDateReport';
import { CallToAction } from '@/components/landing/CallToAction';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <CloneExamples />
        <PostDateReport />
        <CallToAction />
      </main>
      <footer className="w-full border-t border-gray-200 bg-white py-6 dark:border-gray-800 dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              2024 DateMyClone. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                Terms
              </Link>
              <Link className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
