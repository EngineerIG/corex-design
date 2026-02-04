import * as React from 'react';

export interface CancelScheduleSendProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const CancelScheduleSend = React.forwardRef<SVGSVGElement, CancelScheduleSendProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m14.225 18.475 1.75-1.75 1.75 1.75.75-.75L16.75 16l1.75-1.75-.75-.75L16 15.25l-1.75-1.75-.75.75L15.25 16l-1.75 1.75.725.725ZM2 19V3l14.3 6H16c-.583 0-1.133.067-1.65.2a8.093 8.093 0 0 0-1.5.55L4 6v3.5l6 1.5-6 1.5V16l5.4-2.3a7.41 7.41 0 0 0-.3 1.138A6.63 6.63 0 0 0 9 16v.05L2 19Zm14 2c-1.383 0-2.563-.488-3.537-1.462C11.488 18.562 11 17.383 11 16s.488-2.563 1.463-3.537C13.438 11.488 14.617 11 16 11s2.563.488 3.538 1.463C20.512 13.438 21 14.617 21 16s-.488 2.563-1.462 3.538C18.562 20.512 17.383 21 16 21Z" /></svg>
  )
);

CancelScheduleSend.displayName = 'CancelScheduleSend';

export default CancelScheduleSend;
