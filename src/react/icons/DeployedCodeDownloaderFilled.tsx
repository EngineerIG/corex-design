import * as React from 'react';

export interface DeployedCodeDownloaderFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const DeployedCodeDownloaderFilled = React.forwardRef<SVGSVGElement, DeployedCodeDownloaderFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m17 21 3-3-.7-.7-1.8 1.8V15h-1v4.1l-1.8-1.8-.7.7 3 3ZM11 9.85 5.075 6.425 4 7.05V8.1l7 4.05 7-4.05V7.05l-1.075-.625L11 9.85Zm-1 10.875L3 16.7a1.948 1.948 0 0 1-1-1.725v-7.95A1.948 1.948 0 0 1 3 5.3l7-4.025c.317-.183.65-.275 1-.275s.683.092 1 .275L19 5.3a1.948 1.948 0 0 1 1 1.725v4.65A6.96 6.96 0 0 0 17 11c-1.933 0-3.583.683-4.95 2.05C10.683 14.417 10 16.067 10 18c0 .533.054 1.046.162 1.538.109.491.271.962.488 1.412a6.835 6.835 0 0 0-.338-.087.943.943 0 0 1-.312-.138ZM17 23c-1.383 0-2.563-.488-3.537-1.462C12.488 20.562 12 19.383 12 18s.488-2.563 1.463-3.537C14.438 13.488 15.617 13 17 13s2.563.488 3.538 1.463C21.512 15.438 22 16.617 22 18s-.488 2.563-1.462 3.538C19.562 22.512 18.383 23 17 23Z" /></svg>
  )
);

DeployedCodeDownloaderFilled.displayName = 'DeployedCodeDownloaderFilled';

export default DeployedCodeDownloaderFilled;
