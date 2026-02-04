import * as React from 'react';

export interface TokenFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const TokenFilled = React.forwardRef<SVGSVGElement, TokenFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M9.1 9.455 4.05 6.55 12 2l7.95 4.55-5.05 2.905a4.05 4.05 0 0 0-1.325-.951A3.827 3.827 0 0 0 12 8.17c-.55 0-1.075.111-1.575.334-.5.223-.942.54-1.325.951ZM11 22l-8-4.576V8.298l5.125 2.957a2.82 2.82 0 0 0-.1.5 5.19 5.19 0 0 0-.025.528c0 .942.275 1.782.825 2.52A3.887 3.887 0 0 0 11 16.266V22Zm1-7.66a1.9 1.9 0 0 1-1.412-.605A2.009 2.009 0 0 1 10 12.283c0-.566.196-1.05.588-1.453A1.9 1.9 0 0 1 12 10.226a1.9 1.9 0 0 1 1.412.604c.392.403.588.887.588 1.453 0 .565-.196 1.05-.588 1.452A1.9 1.9 0 0 1 12 14.34ZM13 22v-5.733c.9-.24 1.625-.728 2.175-1.465.55-.737.825-1.577.825-2.52a5.18 5.18 0 0 0-.025-.526 2.816 2.816 0 0 0-.1-.502L21 8.299v9.126L13 22Z" /></svg>
  )
);

TokenFilled.displayName = 'TokenFilled';

export default TokenFilled;
