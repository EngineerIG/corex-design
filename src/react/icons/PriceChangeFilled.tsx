import * as React from 'react';

export interface PriceChangeFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const PriceChangeFilled = React.forwardRef<SVGSVGElement, PriceChangeFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M2 20V4h20v16H2Zm6-3h2v-1h1c.283 0 .52-.096.713-.287A.968.968 0 0 0 12 15v-3a.968.968 0 0 0-.287-.713A.968.968 0 0 0 11 11H8v-1h4V8h-2V7H8v1H7a.968.968 0 0 0-.713.287A.968.968 0 0 0 6 9v3c0 .283.096.52.287.713.192.191.43.287.713.287h3v1H6v2h2v1Zm8-.75 2-2h-4l2 2ZM14 10h4l-2-2-2 2Z" /></svg>
  )
);

PriceChangeFilled.displayName = 'PriceChangeFilled';

export default PriceChangeFilled;
