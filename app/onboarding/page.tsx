'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Question {
  id: number;
  question: string;
  type: 'open' | 'multiple_choice' | 'multiple_select';
  options?: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your name?",
    type: 'open',
  },
  {
    id: 2,
    question: "What is your gender?",
    type: 'multiple_choice',
    options: ['Male', 'Female', 'Other'],
  },
  {
    id: 3,
    question: "How old are you?",
    type: 'open',
  },
  {
    id: 4,
    question: "What are your relationship goals?",
    type: 'multiple_choice',
    options: ['Long-term relationship', 'Short-term connection', 'Not decided yet'],
  },
  {
    id: 5,
    question: "What gender are you looking to match with?",
    type: 'multiple_choice',
    options: ['Male', 'Female', 'Both'],
  },
  {
    id: 6,
    question: "What's your current career?",
    type: 'multiple_choice',
    options: ['Student', 'Job (employed)', 'Business owner', 'Self-employed'],
  },
  {
    id: 7,
    question: "What is your height and weight?",
    type: 'open',
  },
  {
    id: 8,
    question: "What are some of your interests?",
    type: 'multiple_select',
    options: [
      'Sports and fitness',
      'Movies and TV shows',
      'Reading and writing',
      'Music and concerts',
      'Traveling and adventure',
      'Gaming',
      'Cooking and food',
      'Art and design',
      'Technology and gadgets',
      'Socializing and making friends',
    ],
  },
  {
    id: 9,
    question: "What is your highest level of education?",
    type: 'multiple_choice',
    options: ['High school', 'Undergraduate degree', 'Graduate degree', 'Doctorate', 'Other'],
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const question = questions[currentQuestion];
    const answer = answers[question.id];

    if (!answer || (Array.isArray(answer) && answer.length === 0)) {
      setError('Please provide an answer');
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      try {
        const response = await fetch('/api/onboarding', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ answers }),
        });

        if (response.ok) {
          router.push('/');
        } else {
          setError('Failed to save answers. Please try again.');
        }
      } catch (err) {
        setError('An error occurred. Please try again.');
      }
    }
  };

  const handleAnswerChange = (value: string | string[]) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: value,
    });
  };

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl w-full p-8 bg-card rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Create Your Profile</h1>
        
        <div className="mb-8">
          <div className="w-full bg-muted rounded-full h-2 mb-4">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">{question.question}</h2>

            {question.type === 'open' && (
              <input
                type="text"
                className="w-full p-3 border rounded-md bg-background"
                value={answers[question.id] as string || ''}
                onChange={(e) => handleAnswerChange(e.target.value)}
                placeholder="Type your answer here..."
              />
            )}

            {question.type === 'multiple_choice' && question.options && (
              <div className="space-y-3">
                {question.options.map((option) => (
                  <label key={option} className="flex items-center space-x-3 p-3 border rounded-md hover:bg-accent cursor-pointer">
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={answers[question.id] === option}
                      onChange={(e) => handleAnswerChange(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}

            {question.type === 'multiple_select' && question.options && (
              <div className="space-y-3">
                {question.options.map((option) => (
                  <label key={option} className="flex items-center space-x-3 p-3 border rounded-md hover:bg-accent cursor-pointer">
                    <input
                      type="checkbox"
                      value={option}
                      checked={Array.isArray(answers[question.id]) && (answers[question.id] as string[]).includes(option)}
                      onChange={(e) => {
                        const currentAnswers = (answers[question.id] as string[]) || [];
                        const newAnswers = e.target.checked
                          ? [...currentAnswers, option]
                          : currentAnswers.filter((a) => a !== option);
                        handleAnswerChange(newAnswers);
                      }}
                      className="w-4 h-4"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              className="px-6 py-2 rounded-md bg-secondary text-secondary-foreground"
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-primary text-primary-foreground"
            >
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
