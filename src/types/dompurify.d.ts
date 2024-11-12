declare module 'dompurify' {
  export function sanitize(input: string, options?: Record<string, unknown>): string;
}
