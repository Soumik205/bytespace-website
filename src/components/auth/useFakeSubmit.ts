import { useState } from "react";

// Stands in for a real request: waits briefly, then reports success.
export function useFakeSubmit(delay = 900) {
  const [succeeded, setSucceeded] = useState(false);

  const submit = async () => {
    setSucceeded(false);
    await new Promise((resolve) => setTimeout(resolve, delay));
    setSucceeded(true);
  };

  const clear = () => setSucceeded(false);

  return { submit, clear, succeeded };
}
