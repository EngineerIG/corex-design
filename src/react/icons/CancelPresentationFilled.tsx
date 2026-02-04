import * as React from 'react';

export interface CancelPresentationFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const CancelPresentationFilled = React.forwardRef<SVGSVGElement, CancelPresentationFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m9.4 16 2.6-2.6 2.6 2.6 1.4-1.4-2.6-2.6L16 9.4 14.6 8 12 10.6 9.4 8 8 9.4l2.6 2.6L8 14.6 9.4 16ZM4 20c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 18V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 4h16c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 20H4Z" /></svg>
  )
);

CancelPresentationFilled.displayName = 'CancelPresentationFilled';

export default CancelPresentationFilled;
