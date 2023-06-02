"use client";

import { useEffect } from "react";

import { reportError } from "services/client/error-report.service";

export default function Error({ error, reset, }: { error: Error; reset: () => void; }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    reportError({
      stack: error.stack,
      message: error.message
    });
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
