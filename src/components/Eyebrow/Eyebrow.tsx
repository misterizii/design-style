import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';

export interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  /** `accent` draws a short mango dash before the label. */
  tone?: 'default' | 'accent';
  children?: ReactNode;
}

/** Small uppercase label above a heading: chapter, subject, series name. */
export function Eyebrow({ tone = 'default', className, children, ...rest }: EyebrowProps) {
  return (
    <span className={cx('mz-eyebrow', `mz-eyebrow--${tone}`, className)} {...rest}>
      {children}
    </span>
  );
}
