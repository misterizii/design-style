import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';

export interface QuoteProps extends HTMLAttributes<HTMLElement> {
  /** Who said it. */
  author?: ReactNode;
  /** Role or context under the author. */
  context?: ReactNode;
  size?: 'md' | 'lg';
  children?: ReactNode;
}

/** Story quote with a mango rule: a line a student said, a lesson's moral. */
export function Quote({ author, context, size = 'md', className, children, ...rest }: QuoteProps) {
  return (
    <figure className={cx('mz-quote', `mz-quote--${size}`, className)} {...rest}>
      <blockquote className="mz-quote__text">{children}</blockquote>
      {(author || context) && (
        <figcaption className="mz-quote__by">
          {author && <span className="mz-quote__author">{author}</span>}
          {context && <span className="mz-quote__role">{context}</span>}
        </figcaption>
      )}
    </figure>
  );
}
