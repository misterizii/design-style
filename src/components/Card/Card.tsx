import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Small label above the title (subject, chapter). */
  eyebrow?: ReactNode;
  title?: ReactNode;
  /** Top-right slot, typically a <Tag>. */
  badge?: ReactNode;
  /** `default` bordered white, `soft` mist fill, `dark` navy panel (flips to dark tokens). */
  tone?: 'default' | 'soft' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
  /** Lift on hover for clickable cards. */
  interactive?: boolean;
  footer?: ReactNode;
  children?: ReactNode;
}

/** Content card for lessons, articles, stories and summaries. */
export function Card({
  eyebrow,
  title,
  badge,
  tone = 'default',
  padding = 'md',
  interactive = false,
  footer,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cx(
        'mz-card',
        `mz-card--${tone}`,
        `mz-card--pad-${padding}`,
        tone === 'dark' && 'mz-dark',
        interactive && 'mz-card--interactive',
        className,
      )}
      {...rest}
    >
      {(eyebrow || title || badge) && (
        <div className="mz-card__header">
          <div className="mz-card__titles">
            {eyebrow && <span className="mz-card__eyebrow">{eyebrow}</span>}
            {title && <div className="mz-card__title">{title}</div>}
          </div>
          {badge}
        </div>
      )}
      {children && <div className="mz-card__body">{children}</div>}
      {footer && <div className="mz-card__footer">{footer}</div>}
    </div>
  );
}
