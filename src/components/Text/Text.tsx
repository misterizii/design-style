import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  weight?: 'regular' | 'medium' | 'bold';
  /** `muted` for supporting copy. */
  tone?: 'default' | 'muted';
  align?: 'left' | 'center' | 'right';
  /** Render a `span` instead of a `p`. */
  inline?: boolean;
  children?: ReactNode;
}

/** Body copy. */
export function Text({
  size = 'md',
  weight = 'regular',
  tone = 'default',
  align,
  inline = false,
  className,
  style,
  children,
  ...rest
}: TextProps) {
  const Tag = inline ? 'span' : 'p';
  return (
    <Tag
      className={cx('mz-text', `mz-text--${size}`, `mz-text--${weight}`, `mz-text--${tone}`, className)}
      style={align ? { textAlign: align, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
