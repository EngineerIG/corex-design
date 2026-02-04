import * as React from 'react';

export interface BackupFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const BackupFilled = React.forwardRef<SVGSVGElement, BackupFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M11 20H6.5c-1.517 0-2.813-.525-3.888-1.575C1.537 17.375 1 16.092 1 14.575c0-1.3.392-2.458 1.175-3.475S3.983 9.433 5.25 9.15c.417-1.533 1.25-2.775 2.5-3.725C9 4.475 10.417 4 12 4c1.95 0 3.604.68 4.962 2.037C18.322 7.396 19 9.05 19 11c1.15.133 2.104.63 2.863 1.488A4.407 4.407 0 0 1 23 15.5c0 1.25-.438 2.313-1.313 3.188S19.75 20 18.5 20H13v-7.15l1.6 1.55L16 13l-4-4-4 4 1.4 1.4 1.6-1.55V20Z" /></svg>
  )
);

BackupFilled.displayName = 'BackupFilled';

export default BackupFilled;
