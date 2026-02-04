import * as React from 'react';

export interface UnfoldMoreProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const UnfoldMore = React.forwardRef<SVGSVGElement, UnfoldMoreProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m12 18.1 2.325-2.325c.2-.2.442-.3.725-.3s.525.1.725.3c.2.2.3.442.3.725 0 .284-.1.525-.3.725L12.7 20.3a.88.88 0 0 1-.325.213 1.106 1.106 0 0 1-.375.062c-.133 0-.258-.02-.375-.062a.877.877 0 0 1-.325-.213l-3.075-3.075c-.2-.2-.3-.441-.3-.725 0-.283.1-.525.3-.725.2-.2.441-.3.725-.3.283 0 .525.1.725.3L12 18.1ZM12 6 9.675 8.325c-.2.2-.442.3-.725.3a.988.988 0 0 1-.725-.3c-.2-.2-.3-.441-.3-.725 0-.283.1-.525.3-.725L11.3 3.8c.1-.1.208-.17.325-.212.117-.042.242-.063.375-.063s.258.021.375.063a.877.877 0 0 1 .325.212l3.075 3.075c.2.2.3.442.3.725 0 .284-.1.525-.3.725-.2.2-.442.3-.725.3a.988.988 0 0 1-.725-.3L12 6Z" /></svg>
  )
);

UnfoldMore.displayName = 'UnfoldMore';

export default UnfoldMore;
