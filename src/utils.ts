export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

export type Theme = 'light' | 'dark';

/** Wraps `node` in a theme scope when `theme` is set; `dark` applies `.mz-dark`. */
export function themeClass(theme: Theme | undefined): string | undefined {
  return theme === 'dark' ? 'mz-dark' : theme === 'light' ? 'mz-light' : undefined;
}
