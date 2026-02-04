import * as React from 'react';

export interface ArrowRangeProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const ArrowRange = React.forwardRef<SVGSVGElement, ArrowRangeProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M11 5.825 9.125 7.7a1.07 1.07 0 0 1-.713.287A.93.93 0 0 1 7.7 7.7a.96.96 0 0 1-.3-.7c0-.267.1-.5.3-.7l3.6-3.6a.88.88 0 0 1 .325-.213c.116-.041.241-.062.375-.062.133 0 .258.02.375.062a.877.877 0 0 1 .325.213l3.6 3.6c.2.2.3.433.3.7 0 .266-.1.5-.3.7-.2.2-.438.3-.713.3a.973.973 0 0 1-.712-.3L13 5.825v12.35l1.875-1.875c.2-.184.437-.28.712-.288a.93.93 0 0 1 .713.288c.2.2.3.433.3.7 0 .267-.1.5-.3.7l-3.6 3.6c-.1.1-.209.17-.325.212a1.106 1.106 0 0 1-.375.063c-.134 0-.259-.021-.375-.063a.877.877 0 0 1-.325-.212l-3.6-3.6a.96.96 0 0 1-.3-.7c0-.267.1-.5.3-.7.2-.2.437-.3.712-.3.275 0 .513.1.713.3L11 18.175V5.825Z" /></svg>
  )
);

ArrowRange.displayName = 'ArrowRange';

export default ArrowRange;
