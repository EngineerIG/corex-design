import * as React from 'react';

export interface DeployedCodeAlertFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const DeployedCodeAlertFilled = React.forwardRef<SVGSVGElement, DeployedCodeAlertFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M10.55 9.783 4.921 6.53 3.9 7.123v.998l6.65 3.848L17.2 8.12v-.998l-1.021-.593-5.629 3.253ZM9.6 20.115 2.95 16.29A1.85 1.85 0 0 1 2 14.652V7.1a1.85 1.85 0 0 1 .95-1.639L9.6 1.637a1.866 1.866 0 0 1 1.9 0l6.65 3.824A1.85 1.85 0 0 1 19.1 7.1v4.417a6.616 6.616 0 0 0-2.85-.641c-1.837 0-3.404.65-4.703 1.947C10.25 14.122 9.6 15.69 9.6 17.526c0 .507.051.994.154 1.46.103.468.258.915.463 1.342a6.34 6.34 0 0 0-.32-.083.896.896 0 0 1-.297-.13Zm6.65.261a.456.456 0 0 0 .332-.143.456.456 0 0 0 0-.665.456.456 0 0 0-.665 0 .456.456 0 0 0 0 .665.456.456 0 0 0 .333.143Zm-.475-1.9h.95v-3.8h-.95v3.8Zm.475 3.8c-1.314 0-2.434-.463-3.36-1.39-.927-.926-1.39-2.046-1.39-3.36s.463-2.434 1.39-3.36c.926-.927 2.046-1.39 3.36-1.39s2.434.463 3.36 1.39c.927.926 1.39 2.046 1.39 3.36s-.463 2.434-1.39 3.36c-.926.927-2.046 1.39-3.36 1.39Z" /></svg>
  )
);

DeployedCodeAlertFilled.displayName = 'DeployedCodeAlertFilled';

export default DeployedCodeAlertFilled;
