import type { HTMLAttributes, ReactNode } from 'react';
import { cx, themeClass, type Theme } from '../../utils';

export interface ReelsFrameProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** `light` mist ground (default) or `dark` navy ground. */
  theme?: Theme;
  /** Short hook in a mango pill at the top, e.g. "Tahukah kamu?". */
  hook?: ReactNode;
  /** The big on-screen line. Wrap the key word in <Highlight>. */
  title?: ReactNode;
  /** Subtitle box (spoken line / caption). */
  caption?: ReactNode;
  handle?: ReactNode;
  /** Draw the platform UI safe zones (for layout checks, not for export). */
  showSafeArea?: boolean;
  /** Visual slot between title and caption: photo, video, diagram. */
  children?: ReactNode;
}

/**
 * Vertical video frame for Reels, TikTok and Shorts, 9:16 (1080×1920).
 * Content stays inside the safe zone: clear of the bottom ~20% and the right-side buttons.
 */
export function ReelsFrame({ theme = 'light', hook, title, caption, handle = '@misterizii', showSafeArea = false, className, children, ...rest }: ReelsFrameProps) {
  return (
    <div className={cx('mz-root', 'mz-canvas', 'mz-reels', themeClass(theme), className)} {...rest}>
      <div className="mz-reels__safe">
        {hook && <span className="mz-reels__hook">{hook}</span>}
        {title && <h2 className="mz-reels__title">{title}</h2>}
        <div className="mz-reels__visual">{children}</div>
        {caption && <div className="mz-reels__caption">{caption}</div>}
        <span className="mz-reels__handle">{handle}</span>
      </div>
      {showSafeArea && <div className="mz-reels__guide" aria-hidden />}
    </div>
  );
}
