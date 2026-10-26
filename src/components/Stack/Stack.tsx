import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';

type Space = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'vertical' | 'horizontal';
  /** Gap on the 4px scale; maps to `--mz-space-N`. */
  gap?: Space;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between';
  wrap?: boolean;
  children?: ReactNode;
}

/** Flex layout helper for spacing components. */
export function Stack({
  direction = 'vertical',
  gap = 4,
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className,
  style,
  children,
  ...rest
}: StackProps) {
  const css: CSSProperties = { gap: gap === 0 ? 0 : `var(--mz-space-${gap})`, ...style };
  return (
    <div
      className={cx(
        'mz-stack',
        `mz-stack--${direction}`,
        `mz-stack--align-${align}`,
        `mz-stack--justify-${justify}`,
        wrap && 'mz-stack--wrap',
        className,
      )}
      style={css}
      {...rest}
    >
      {children}
    </div>
  );
}
