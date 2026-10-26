import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** `accent` mango (featured), `info` sky (subject/level), `neutral` quiet. */
  tone?: 'accent' | 'info' | 'neutral';
  /** `soft` tinted, `solid` filled. */
  variant?: 'soft' | 'solid';
  children?: ReactNode;
}

/** Small pill label: subject, grade, "Baru", "Cerita minggu ini". */
export function Tag({ tone = 'accent', variant = 'soft', className, children, ...rest }: TagProps) {
  return (
    <span className={cx('mz-tag', `mz-tag--${tone}`, `mz-tag--${variant}`, className)} {...rest}>
      {children}
    </span>
  );
}
