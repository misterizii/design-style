import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';

export interface HighlightProps extends HTMLAttributes<HTMLElement> {
  /**
   * `auto` (default): mango marker stroke on light grounds, mango text on dark grounds.
   * `marker` / `text` force one treatment.
   */
  variant?: 'auto' | 'marker' | 'text';
  children?: ReactNode;
}

/**
 * The signature "stabilo": marks the one key word in a heading in mango.
 * Use once per heading, on the word the story hinges on.
 */
export function Highlight({ variant = 'auto', className, children, ...rest }: HighlightProps) {
  return (
    <mark className={cx('mz-hl', `mz-hl--${variant}`, className)} {...rest}>
      {children}
    </mark>
  );
}
