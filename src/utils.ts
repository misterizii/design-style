export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

export type Theme = 'light' | 'dark';

/**
 * `auto` keeps CSS transitions (web). `static` disables every transition and
 * animation inside the scope, for frame-by-frame renderers such as Remotion.
 */
export type Motion = 'auto' | 'static';

export function motionClass(motion: Motion | undefined): string | undefined {
  return motion === 'static' ? 'mz-static' : undefined;
}

/** Wraps `node` in a theme scope when `theme` is set; `dark` applies `.mz-dark`. */
export function themeClass(theme: Theme | undefined): string | undefined {
  return theme === 'dark' ? 'mz-dark' : theme === 'light' ? 'mz-light' : undefined;
}
