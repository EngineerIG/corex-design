import * as React from 'react';

export interface Down2Props extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Down2 = React.forwardRef<SVGSVGElement, Down2Props>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M12.707 17.293a1 1 0 0 1-1.414 0L2.707 8.707C2.077 8.077 2.523 7 3.414 7h17.172c.89 0 1.337 1.077.707 1.707l-8.586 8.586Z" /></svg>
  )
);

Down2.displayName = 'Down2';

export default Down2;
