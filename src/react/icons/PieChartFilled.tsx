import * as React from 'react';

export interface PieChartFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const PieChartFilled = React.forwardRef<SVGSVGElement, PieChartFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M13 11V2.1c2.383.25 4.395 1.2 6.037 2.85C20.68 6.6 21.633 8.616 21.9 11H13Zm-1.975 10.875c-2.534-.25-4.655-1.317-6.363-3.2C2.954 16.79 2.1 14.566 2.1 12c0-2.584.854-4.817 2.562-6.7 1.708-1.884 3.83-2.95 6.363-3.2v19.775Zm1.975 0v-8.9h8.9c-.234 2.383-1.18 4.404-2.838 6.062-1.658 1.658-3.68 2.604-6.062 2.838Z" /></svg>
  )
);

PieChartFilled.displayName = 'PieChartFilled';

export default PieChartFilled;
