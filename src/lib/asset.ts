export function withBaseUrl(input: string) {
  if (!input) return input;

  // Allow absolute/external URLs and data URIs unchanged.
  if (/^(https?:)?\/\//.test(input) || input.startsWith("data:")) return input;

  const cleaned = input.startsWith("/") ? input.slice(1) : input;

  // `import.meta.env.BASE_URL` always ends with a trailing slash in Vite.
  return new URL(cleaned, import.meta.env.BASE_URL).toString();
}

