import type { HTMLAttributes, ReactNode } from 'react';
import { cx, motionClass, themeClass, type Motion, type Theme } from '../../utils';

export interface CarouselSlideProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** `cover` = first slide (hook), `content` = one point per slide, `closing` = last slide with a call to action. */
  variant?: 'cover' | 'content' | 'closing';
  /** Defaults to `dark` for cover/closing and `light` for content. */
  theme?: Theme;
  /** Set `static` when a frame-by-frame renderer draws this canvas (Remotion). */
  motion?: Motion;
  /** Series or subject label at the top. */
  eyebrow?: ReactNode;
  /** Main line. Wrap the key word in <Highlight>. */
  title: ReactNode;
  body?: ReactNode;
  /** Big number on content slides, e.g. "01". */
  number?: ReactNode;
  /** Illustration / photo / diagram slot (content slides). */
  visual?: ReactNode;
  /** Closing-slide action line, e.g. "Simpan & bagikan ke temanmu". */
  cta?: ReactNode;
  /** Current slide (1-based) and total; drives the page dots. */
  page?: number;
  total?: number;
  handle?: ReactNode;
}

/** Instagram carousel slide, 4:5 (1080×1350). Fills its container's width. */
export function CarouselSlide({
  variant = 'cover',
  theme,
  motion,
  eyebrow,
  title,
  body,
  number,
  visual,
  cta,
  page,
  total,
  handle = '@misterizii',
  className,
  ...rest
}: CarouselSlideProps) {
  const t = theme ?? (variant === 'content' ? 'light' : 'dark');
  return (
    <div className={cx('mz-root', 'mz-canvas', 'mz-carousel', `mz-carousel--${variant}`, themeClass(t), motionClass(motion), className)} {...rest}>
      <div className="mz-carousel__inner">
        <div className="mz-carousel__top">
          {eyebrow ? <span className="mz-carousel__eyebrow">{eyebrow}</span> : <span />}
          {page && total && <span className="mz-carousel__count">{page} / {total}</span>}
        </div>

        <div className="mz-carousel__main">
          {number && <div className="mz-carousel__number">{number}</div>}
          {visual && <div className="mz-carousel__visual">{visual}</div>}
          <h2 className="mz-carousel__title">{title}</h2>
          {body && <p className="mz-carousel__body">{body}</p>}
          {cta && <span className="mz-carousel__cta">{cta}</span>}
        </div>

        <div className="mz-carousel__foot">
          <span className="mz-carousel__handle">{handle}</span>
          {page && total && (
            <span className="mz-carousel__dots" aria-hidden>
              {Array.from({ length: total }, (_, i) => (
                <i key={i} className={i + 1 === page ? 'is-active' : undefined} />
              ))}
            </span>
          )}
          {variant === 'cover' && !page && <span className="mz-carousel__swipe">Geser →</span>}
        </div>
      </div>
    </div>
  );
}
