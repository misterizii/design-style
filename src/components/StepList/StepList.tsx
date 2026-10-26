import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';

export interface StepItem {
  title: ReactNode;
  /** Optional explanation under the title. */
  description?: ReactNode;
}

export interface StepListProps extends HTMLAttributes<HTMLOListElement> {
  items: StepItem[];
  size?: 'md' | 'lg';
}

/** Numbered steps with mango number dots: processes, tips, "3 cara ...". */
export function StepList({ items, size = 'md', className, ...rest }: StepListProps) {
  return (
    <ol className={cx('mz-steps', `mz-steps--${size}`, className)} {...rest}>
      {items.map((item, i) => (
        <li key={i} className="mz-steps__item">
          <span className="mz-steps__num" aria-hidden>{i + 1}</span>
          <div className="mz-steps__content">
            <div className="mz-steps__title">{item.title}</div>
            {item.description && <div className="mz-steps__desc">{item.description}</div>}
          </div>
        </li>
      ))}
    </ol>
  );
}
