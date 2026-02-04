import * as React from 'react';

export interface DeleteHistoryProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const DeleteHistory = React.forwardRef<SVGSVGElement, DeleteHistoryProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M16.4 21 15 19.6l2.1-2.1-2.1-2.1 1.4-1.4 2.1 2.1 2.1-2.1 1.4 1.4-2.075 2.1L22 19.6 20.6 21l-2.1-2.075L16.4 21ZM12 21c-2.3 0-4.304-.762-6.013-2.288C4.28 17.188 3.3 15.283 3.05 13H5.1c.233 1.733 1.004 3.167 2.313 4.3C8.72 18.433 10.25 19 12 19c.183 0 .354-.004.512-.012.159-.009.321-.03.488-.063v2.025a10.307 10.307 0 0 1-1 .05ZM3 10V4h2v2.35a8.732 8.732 0 0 1 3.113-2.475A8.93 8.93 0 0 1 12 3c2.5 0 4.625.875 6.375 2.625S21 9.5 21 12h-2c0-1.95-.68-3.604-2.038-4.963C15.604 5.68 13.95 5 12 5a6.75 6.75 0 0 0-3.225.8A7.431 7.431 0 0 0 6.25 8H9v2H3Zm10.35 4.75L11 12.4V7h2v4.6l1.4 1.4-1.05 1.75Z" /></svg>
  )
);

DeleteHistory.displayName = 'DeleteHistory';

export default DeleteHistory;
