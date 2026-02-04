import * as React from 'react';

export interface DeployedCodeProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const DeployedCode = React.forwardRef<SVGSVGElement, DeployedCodeProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M10.444 19.425v-6.85L4.111 9.1v6.85l6.333 3.475Zm2.112 0 6.333-3.475V9.1l-6.333 3.475v6.85ZM11.5 10.85l6.254-3.425L11.5 4 5.246 7.425 11.5 10.85ZM3.056 17.7a2.048 2.048 0 0 1-.779-.725 1.87 1.87 0 0 1-.277-1v-7.95c0-.367.092-.7.277-1 .185-.3.444-.542.779-.725l7.388-4.025a2.164 2.164 0 0 1 2.112 0L19.944 6.3c.335.183.594.425.779.725.185.3.277.633.277 1v7.95c0 .367-.092.7-.277 1-.185.3-.444.542-.779.725l-7.388 4.025a2.165 2.165 0 0 1-2.112 0L3.056 17.7Z" /></svg>
  )
);

DeployedCode.displayName = 'DeployedCode';

export default DeployedCode;
