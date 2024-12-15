import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find Your Perfect Match with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Experience dating reimagined. Our AI-powered platform helps you find meaningful connections 
                  based on genuine compatibility.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/auth/login">
                  <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
                </Link>
                <Link href="/auth/signup">
                  <Button variant="outline">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <svg
                    className=" h-6 w-6 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">AI-Powered Matching</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Our sophisticated AI algorithm ensures you meet people who truly match your interests and values.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <svg
                    className=" h-6 w-6 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M12 22c6-6 9-10 9-13a6 6 0 0 0-9-5.2A6 6 0 0 0 3 9c0 3 3 7 9 13" />
                    <path d="M12 22V12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Genuine Connections</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Build meaningful relationships based on shared interests, values, and life goals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <svg
                    className=" h-6 w-6 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                    <path d="M12 2v8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Safe and Secure</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Your privacy and security are our top priorities. Feel safe while finding your perfect match.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="w-full border-t border-gray-200 bg-white py-6 dark:border-gray-800 dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              © 2024 DateMyClone. All rights reserved.
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
