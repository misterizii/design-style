import type { HTMLAttributes, ReactNode } from 'react';
import { cx, motionClass, themeClass, type Motion, type Theme } from '../../utils';

export interface PresentationSlideProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * `title` — opening slide on navy.
   * `split` — navy left with the title, white right with points.
   * `statement` — one big sentence (a question, a moral of the story).
   * `content` — title + free content area (charts, images, tables).
   */
  layout?: 'title' | 'split' | 'statement' | 'content';
  /** Override the layout's default theme (title/split = dark-left, statement/content = light). */
  theme?: Theme;
  /** Set `static` when a frame-by-frame renderer draws this canvas (Remotion). */
  motion?: Motion;
  eyebrow?: ReactNode;
  /** Wrap the key word in <Highlight>. */
  title: ReactNode;
  subtitle?: ReactNode;
  /** Numbered points (split layout). */
  points?: ReactNode[];
  /** Footer left text, e.g. the speaker or series name. */
  footer?: ReactNode;
  /** Slide number shown bottom-right. */
  page?: number;
  /** Free content area (content layout) or extra content under the points (split). */
  children?: ReactNode;
}

/** Presentation slide, 16:9 (1920×1080). Fills its container's width. */
export function PresentationSlide({
  layout = 'title',
  theme,
  motion,
  eyebrow,
  title,
  subtitle,
  points,
  footer = 'iziilearning',
  page,
  className,
  children,
  ...rest
}: PresentationSlideProps) {
  const t = theme ?? (layout === 'title' ? 'dark' : 'light');
  const foot = (
    <div className="mz-slide__foot">
      <span>{footer}</span>
      {page !== undefined && <span className="mz-slide__page">{String(page).padStart(2, '0')}</span>}
    </div>
  );

  if (layout === 'split') {
    return (
      <div className={cx('mz-root', 'mz-canvas', 'mz-slide', 'mz-slide--split', themeClass(t), motionClass(motion), className)} {...rest}>
        <div className="mz-slide__left mz-dark">
          {eyebrow && <span className="mz-slide__eyebrow">{eyebrow}</span>}
          <div className="mz-slide__titles">
            <h2 className="mz-slide__title">{title}</h2>
            {subtitle && <p className="mz-slide__subtitle">{subtitle}</p>}
          </div>
          <span className="mz-slide__footer-text">{footer}</span>
        </div>
        <div className="mz-slide__right">
          {points && (
            <ol className="mz-slide__points">
              {points.map((p, i) => (
                <li key={i}><b>{i + 1}</b><span>{p}</span></li>
              ))}
            </ol>
          )}
          {children}
          {page !== undefined && <span className="mz-slide__page mz-slide__page--corner">{String(page).padStart(2, '0')}</span>}
        </div>
      </div>
    );
  }

  return (
    <div className={cx('mz-root', 'mz-canvas', 'mz-slide', `mz-slide--${layout}`, themeClass(t), motionClass(motion), className)} {...rest}>
      <div className="mz-slide__body">
        {eyebrow && <span className="mz-slide__eyebrow">{eyebrow}</span>}
        <div className="mz-slide__titles">
          <h2 className="mz-slide__title">{title}</h2>
          {subtitle && <p className="mz-slide__subtitle">{subtitle}</p>}
        </div>
        {children && <div className="mz-slide__content">{children}</div>}
      </div>
      {foot}
    </div>
  );
}
