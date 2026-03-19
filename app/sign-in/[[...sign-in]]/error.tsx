"use client";

export default function SignInError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center max-w-md w-full text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <span className="text-2xl">⚠️</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          {error.message || "An error occurred while loading the sign in page."}
        </p>
        <button
          onClick={() => reset()}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
