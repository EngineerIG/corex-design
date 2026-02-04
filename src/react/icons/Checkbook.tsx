import * as React from 'react';

export interface CheckbookProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Checkbook = React.forwardRef<SVGSVGElement, CheckbookProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M6 15h7l2-2H6v2Zm0-4h6V9H6v2ZM4 7v10h7l-2 2H2V5h20v3h-2V7H4Zm18.9 5.3a.382.382 0 0 1 .125.275c0 .1-.042.192-.125.275l-.9.9L20.25 12l.9-.9a.382.382 0 0 1 .275-.125c.1 0 .192.042.275.125l1.2 1.2ZM13 21v-1.75l6.65-6.65 1.75 1.75L14.75 21H13Z" /></svg>
  )
);

Checkbook.displayName = 'Checkbook';

export default Checkbook;
