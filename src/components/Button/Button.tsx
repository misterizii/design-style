import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * `primary` navy (white on dark themes), `accent` mango — the one call to action,
   * `secondary` outlined, `ghost` text-only.
   */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  /** Element after the label, e.g. "→". */
  iconRight?: ReactNode;
  /** Element before the label. */
  iconLeft?: ReactNode;
  children?: ReactNode;
}

/** Button. Use one `accent` button per screen for the main action. */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconLeft,
  iconRight,
  type = 'button',
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx('mz-btn', `mz-btn--${variant}`, `mz-btn--${size}`, fullWidth && 'mz-btn--full', className)}
      {...rest}
    >
      {iconLeft && <span className="mz-btn__icon">{iconLeft}</span>}
      {children}
      {iconRight && <span className="mz-btn__icon">{iconRight}</span>}
    </button>
  );
}
