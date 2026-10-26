import type { HTMLAttributes, ReactNode } from 'react';
import { cx, themeClass, type Theme } from '../../utils';

export interface MzProviderProps extends HTMLAttributes<HTMLDivElement> {
  /** `light` = white ground (default), `dark` = navy ground. */
  theme?: Theme;
  children?: ReactNode;
}

/**
 * Root wrapper. Sets the font, text color, background and box-sizing reset,
 * and scopes the theme. Wrap every page or canvas in one MzProvider.
 */
export function MzProvider({ theme = 'light', className, children, ...rest }: MzProviderProps) {
  return (
    <div className={cx('mz-root', themeClass(theme), className)} {...rest}>
      {children}
    </div>
  );
}
