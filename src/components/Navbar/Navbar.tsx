import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils';

export interface NavLink {
  label: ReactNode;
  href: string;
  active?: boolean;
}

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /** Brand text shown on the left. Defaults to "misterizii". */
  brand?: ReactNode;
  links?: NavLink[];
  /** Right-side slot, typically a <Button>. */
  action?: ReactNode;
}

/** Website top bar: wordmark text, links, one action. */
export function Navbar({ brand = 'misterizii', links = [], action, className, ...rest }: NavbarProps) {
  return (
    <nav className={cx('mz-nav', className)} {...rest}>
      <span className="mz-nav__brand">{brand}</span>
      {links.length > 0 && (
        <div className="mz-nav__links">
          {links.map((l, i) => (
            <a key={i} href={l.href} className={cx('mz-nav__link', l.active && 'mz-nav__link--active')}>{l.label}</a>
          ))}
        </div>
      )}
      {action && <div className="mz-nav__action">{action}</div>}
    </nav>
  );
}
