import type { HTMLAttributes, ReactNode } from 'react';
import { cx, motionClass, themeClass, type Motion, type Theme } from '../../utils';

export interface MzProviderProps extends HTMLAttributes<HTMLDivElement> {
  /** `light` = white ground (default), `dark` = navy ground. */
  theme?: Theme;
  /**
   * `auto` (default) keeps CSS transitions. Use `static` when a renderer draws
   * one frame at a time (Remotion, Puppeteer): it disables every transition and
   * animation inside, so each frame is deterministic.
   */
  motion?: Motion;
  children?: ReactNode;
}

/**
 * Root wrapper. Sets the font, text color, background and box-sizing reset,
 * and scopes the theme. Wrap every page or canvas in one MzProvider.
 */
export function MzProvider({ theme = 'light', motion, className, children, ...rest }: MzProviderProps) {
  return (
    <div className={cx('mz-root', themeClass(theme), motionClass(motion), className)} {...rest}>
      {children}
    </div>
  );
}
