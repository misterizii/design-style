import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Semantic level; also picks the default size. */
  level?: 1 | 2 | 3 | 4;
  /** Visual size, independent of level. `display` is for hero lines. */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'display';
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
}

const levelSize = { 1: 'xl', 2: 'lg', 3: 'md', 4: 'sm' } as const;

/** Extra-bold, tightly tracked heading. Put the key word in <Highlight>. */
export function Heading({ level = 2, size, align, className, style, children, ...rest }: HeadingProps) {
  const Tag = `h${level}` as const;
  return (
    <Tag
      className={cx('mz-heading', `mz-heading--${size ?? levelSize[level]}`, className)}
      style={align ? { textAlign: align, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
