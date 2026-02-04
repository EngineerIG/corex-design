import * as React from 'react';

export interface BuildFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const BuildFilled = React.forwardRef<SVGSVGElement, BuildFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M9 15c-1.667 0-3.083-.583-4.25-1.75C3.583 12.083 3 10.667 3 9c0-.333.025-.667.075-1 .05-.333.142-.65.275-.95a.943.943 0 0 1 .313-.375 1.21 1.21 0 0 1 .412-.175.965.965 0 0 1 .9.275L7.6 9.4l1.8-1.8-2.625-2.625a.965.965 0 0 1-.275-.9 1.21 1.21 0 0 1 .175-.413.943.943 0 0 1 .375-.312c.3-.133.617-.225.95-.275.333-.05.667-.075 1-.075 1.667 0 3.083.583 4.25 1.75C14.417 5.917 15 7.333 15 9c0 .383-.033.746-.1 1.088a5.677 5.677 0 0 1-.3 1.012l5.05 5c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775c-.483.483-1.075.725-1.775.725s-1.292-.25-1.775-.75l-5-5.025c-.333.133-.67.233-1.012.3A5.67 5.67 0 0 1 9 15Z" /></svg>
  )
);

BuildFilled.displayName = 'BuildFilled';

export default BuildFilled;
