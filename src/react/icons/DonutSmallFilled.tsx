import * as React from 'react';

export interface DonutSmallFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const DonutSmallFilled = React.forwardRef<SVGSVGElement, DonutSmallFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M14.825 11a3.11 3.11 0 0 0-.687-1.138 2.749 2.749 0 0 0-1.113-.712v-7.1c2.384.233 4.413 1.187 6.088 2.862 1.675 1.675 2.63 3.704 2.862 6.088h-7.15Zm-3.8 10.95C8.46 21.7 6.317 20.625 4.6 18.725c-1.716-1.9-2.575-4.142-2.575-6.725 0-2.584.859-4.825 2.575-6.725 1.717-1.9 3.86-2.975 6.425-3.225v7.1c-.6.216-1.083.587-1.45 1.112A2.968 2.968 0 0 0 9.025 12c0 .633.184 1.204.55 1.712.367.509.85.871 1.45 1.088v7.15Zm2 0V14.8c.434-.15.805-.38 1.113-.688.308-.308.537-.679.687-1.112h7.15c-.233 2.383-1.187 4.412-2.862 6.087-1.675 1.675-3.704 2.63-6.088 2.863Z" /></svg>
  )
);

DonutSmallFilled.displayName = 'DonutSmallFilled';

export default DonutSmallFilled;
