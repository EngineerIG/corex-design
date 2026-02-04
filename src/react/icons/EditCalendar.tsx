import * as React from 'react';

export interface EditCalendarProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const EditCalendar = React.forwardRef<SVGSVGElement, EditCalendarProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M5 22c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 20V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 5 4h1V2h2v2h8V2h2v2h1c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v5h-2v-1H5v10h7v2H5ZM5 8h14V6H5v2Zm9 14v-3.075l5.525-5.5c.15-.15.317-.258.5-.325a1.6 1.6 0 0 1 .55-.1 1.504 1.504 0 0 1 1.075.45l.925.925c.133.15.238.317.313.5.074.183.112.367.112.55 0 .183-.033.37-.1.563a1.342 1.342 0 0 1-.325.512l-5.5 5.5H14Zm1.5-1.5h.95l3.025-3.05-.45-.475-.475-.45-3.05 3.025v.95Zm3.525-3.525-.475-.45.925.925-.45-.475Z" /></svg>
  )
);

EditCalendar.displayName = 'EditCalendar';

export default EditCalendar;
