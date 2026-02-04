import * as React from 'react';

export interface LocationAwayProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const LocationAway = React.forwardRef<SVGSVGElement, LocationAwayProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M2 21V9l8-6 5.375 4.05a4.85 4.85 0 0 0-1.175.288 4.884 4.884 0 0 0-1.05.562L10 5.5 4 10v9h4v2H2Zm8 0v-1.9c0-.35.088-.68.262-.988.175-.308.413-.554.713-.737.767-.45 1.57-.792 2.412-1.025A9.735 9.735 0 0 1 16 16c.9 0 1.77.117 2.613.35.841.233 1.645.575 2.412 1.025.3.183.538.43.713.738.175.308.262.637.262.987V21H10Zm2.15-2h7.7a7.436 7.436 0 0 0-1.85-.75 8.019 8.019 0 0 0-2-.25c-.683 0-1.35.083-2 .25a7.436 7.436 0 0 0-1.85.75ZM16 15a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 13 12c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 16 9c.833 0 1.542.292 2.125.875S19 11.167 19 12s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 16 15Zm0-2a.97.97 0 0 0 .712-.287A.968.968 0 0 0 17 12a.968.968 0 0 0-.288-.713A.968.968 0 0 0 16 11a.968.968 0 0 0-.713.287A.968.968 0 0 0 15 12c0 .283.096.52.287.713.192.191.43.287.713.287Z" /></svg>
  )
);

LocationAway.displayName = 'LocationAway';

export default LocationAway;
