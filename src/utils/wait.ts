export const waitRandomSeconds = (): Promise<void> =>
  new Promise<void>((resolve) => setTimeout(resolve, Math.random() * 1500));
