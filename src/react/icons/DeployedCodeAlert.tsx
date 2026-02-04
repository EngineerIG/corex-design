import * as React from 'react';

export interface DeployedCodeAlertProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const DeployedCodeAlert = React.forwardRef<SVGSVGElement, DeployedCodeAlertProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M10.55 3.276 4.921 6.53l5.629 3.253 5.629-3.253-5.629-3.254ZM2 14.652V7.1a1.85 1.85 0 0 1 .95-1.639L9.6 1.637a3.18 3.18 0 0 1 .463-.19 1.727 1.727 0 0 1 .986 0c.158.048.308.111.451.19l6.65 3.824A1.85 1.85 0 0 1 19.1 7.1v3.776h-1.9V8.121l-6.674 3.848L3.9 8.12v6.508l5.7 3.3v2.186L2.95 16.29A1.85 1.85 0 0 1 2 14.652Zm14.25 5.724a.456.456 0 0 0 .332-.143.456.456 0 0 0 0-.665.456.456 0 0 0-.665 0 .456.456 0 0 0 0 .665.456.456 0 0 0 .333.143Zm-.475-1.9h.95v-3.8h-.95v3.8Zm.475 3.8c-1.314 0-2.434-.463-3.36-1.39-.927-.926-1.39-2.046-1.39-3.36s.463-2.434 1.39-3.36c.926-.927 2.046-1.39 3.36-1.39s2.434.463 3.36 1.39c.927.926 1.39 2.046 1.39 3.36s-.463 2.434-1.39 3.36c-.926.927-2.046 1.39-3.36 1.39Z" /></svg>
  )
);

DeployedCodeAlert.displayName = 'DeployedCodeAlert';

export default DeployedCodeAlert;
