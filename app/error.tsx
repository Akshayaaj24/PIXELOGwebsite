"use client";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return <section className="px-5 py-32 md:px-10"><h1 className="h2">Something went wrong.</h1><button onClick={reset} className="btn btn-primary mt-8">TRY AGAIN</button></section>;
}
