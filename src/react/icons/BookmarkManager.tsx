import * as React from 'react';

export interface BookmarkManagerProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const BookmarkManager = React.forwardRef<SVGSVGElement, BookmarkManagerProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M4 20c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 18V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 4h6l2 2h8c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v3.3a3.74 3.74 0 0 0-2-.25V8h-8.825l-2-2H4v12h8.1l-.1.1V20H4Zm10 2v-3.075l5.525-5.5c.15-.15.317-.258.5-.325a1.6 1.6 0 0 1 .55-.1 1.504 1.504 0 0 1 1.075.45l.925.925c.133.15.238.317.313.5.074.183.112.367.112.55 0 .183-.033.37-.1.563a1.342 1.342 0 0 1-.325.512l-5.5 5.5H14Zm1.5-1.5h.95l3.025-3.05-.45-.475-.475-.45-3.05 3.025v.95Zm3.525-3.525-.475-.45.925.925-.45-.475Z" /></svg>
  )
);

BookmarkManager.displayName = 'BookmarkManager';

export default BookmarkManager;
