export function CancelPage() {
  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-red-100">
            <svg
              className="h-12 w-12 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Payment Cancelled
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your payment was cancelled. No charges were made to your account.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Want to try again?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            If you experienced any issues, please don't hesitate to contact our support team.
          </p>
          <button
            onClick={() => {
              window.history.pushState(null, '', '/');
              window.location.reload();
            }}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mb-2"
          >
            Try Again
          </button>
        </div>

        <button
          onClick={() => {
            window.history.pushState(null, '', '/');
            window.location.reload();
          }}
          className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}