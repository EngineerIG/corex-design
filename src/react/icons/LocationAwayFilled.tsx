import * as React from 'react';

export interface LocationAwayFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const LocationAwayFilled = React.forwardRef<SVGSVGElement, LocationAwayFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M10 21v-1.9c0-.35.088-.68.262-.988.175-.308.413-.554.713-.737.767-.45 1.57-.792 2.412-1.025A9.735 9.735 0 0 1 16 16c.9 0 1.77.117 2.613.35.841.233 1.645.575 2.412 1.025.3.183.538.43.713.738.175.308.262.637.262.987V21H10Zm-8 0V9l8-6 5.375 4.05a4.805 4.805 0 0 0-3.125 1.638C11.417 9.629 11 10.732 11 12a4.888 4.888 0 0 0 .825 2.75c-.333.133-.654.27-.962.412a8.794 8.794 0 0 0-.913.488c-.6.35-1.075.838-1.425 1.463A4.006 4.006 0 0 0 8 19.1V21H2Zm14-6a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 13 12c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 16 9c.833 0 1.542.292 2.125.875S19 11.167 19 12s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 16 15Z" /></svg>
  )
);

LocationAwayFilled.displayName = 'LocationAwayFilled';

export default LocationAwayFilled;
