import * as React from 'react';

export interface HourglassEmptyProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const HourglassEmpty = React.forwardRef<SVGSVGElement, HourglassEmptyProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M8 20h8v-3c0-1.1-.392-2.042-1.175-2.825C14.042 13.392 13.1 13 12 13s-2.042.392-2.825 1.175C8.392 14.958 8 15.9 8 17v3Zm4-9c1.1 0 2.042-.392 2.825-1.175C15.608 9.042 16 8.1 16 7V4H8v3c0 1.1.392 2.042 1.175 2.825C9.958 10.608 10.9 11 12 11ZM4 22v-2h2v-3c0-1.017.237-1.97.713-2.863A5.572 5.572 0 0 1 8.7 12a5.572 5.572 0 0 1-1.987-2.137A5.998 5.998 0 0 1 6 7V4H4V2h16v2h-2v3c0 1.017-.238 1.97-.712 2.863A5.572 5.572 0 0 1 15.3 12a5.572 5.572 0 0 1 1.988 2.137A6.01 6.01 0 0 1 18 17v3h2v2H4Z" /></svg>
  )
);

HourglassEmpty.displayName = 'HourglassEmpty';

export default HourglassEmpty;
