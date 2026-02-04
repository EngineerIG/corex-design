import * as React from 'react';

export interface NotificationMultipleProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const NotificationMultiple = React.forwardRef<SVGSVGElement, NotificationMultipleProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M3 22c-.55 0-1.02-.196-1.413-.588A1.926 1.926 0 0 1 1 20V8a.97.97 0 0 1 .288-.713A.968.968 0 0 1 2 7a.97.97 0 0 1 .712.287c.192.192.288.43.288.713v12h14a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.968.968 0 0 1 17 22H3Zm18-6V9.55l-6 3.5c-.317.183-.65.275-1 .275s-.683-.092-1-.275l-6-3.5V16h14ZM7 18c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 5 16V7.5c0-.35.08-.683.237-1 .159-.317.396-.567.713-.75l6.525-3.85c.233-.133.488-.167.763-.1a.926.926 0 0 1 .612.45c.15.233.188.492.113.775a.97.97 0 0 1-.463.625l-6.3 3.7 6.8 4 6.75-4c.25-.15.504-.22.762-.213.259.009.505.08.738.213.233.133.417.312.55.537.133.225.2.48.2.763V16c0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0 1 21 18H7Zm7-10.8 2.85-2.85a.948.948 0 0 1 .7-.275.95.95 0 0 1 .7.275.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7L14.7 9.3c-.2.2-.433.3-.7.3a.96.96 0 0 1-.7-.3l-1.4-1.4a.948.948 0 0 1-.275-.7.95.95 0 0 1 .275-.7.948.948 0 0 1 .7-.275.95.95 0 0 1 .7.275l.7.7Z" /></svg>
  )
);

NotificationMultiple.displayName = 'NotificationMultiple';

export default NotificationMultiple;
