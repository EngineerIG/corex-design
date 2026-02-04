import * as React from 'react';

export interface UnfoldLessProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const UnfoldLess = React.forwardRef<SVGSVGElement, UnfoldLessProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m12 16.9-2.4 2.4a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275.948.948 0 0 1-.275-.7c0-.284.091-.517.275-.7l3.1-3.1a.88.88 0 0 1 .325-.213c.117-.041.242-.062.375-.062s.258.02.375.062a.877.877 0 0 1 .325.213l3.1 3.1a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275L12 16.9Zm0-9.8 2.4-2.4a.948.948 0 0 1 .7-.275c.283 0 .517.091.7.275a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7l-3.1 3.1c-.1.1-.208.17-.325.212a1.107 1.107 0 0 1-.375.063c-.133 0-.258-.021-.375-.063A.877.877 0 0 1 11.3 9.2L8.2 6.1a.948.948 0 0 1-.275-.7c0-.284.091-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .516.091.7.275L12 7.1Z" /></svg>
  )
);

UnfoldLess.displayName = 'UnfoldLess';

export default UnfoldLess;
