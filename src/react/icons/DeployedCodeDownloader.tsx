import * as React from 'react';

export interface DeployedCodeDownloaderProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const DeployedCodeDownloader = React.forwardRef<SVGSVGElement, DeployedCodeDownloaderProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m17 21 3-3-.7-.7-1.8 1.8V15h-1v4.1l-1.8-1.8-.7.7 3 3ZM11 3 5.075 6.425 11 9.85l5.925-3.425L11 3ZM2 14.975v-7.95A1.948 1.948 0 0 1 3 5.3l7-4.025c.167-.083.33-.15.488-.2a1.818 1.818 0 0 1 1.037 0 2.4 2.4 0 0 1 .475.2L19 5.3a1.948 1.948 0 0 1 1 1.725V11h-2V8.1l-7.025 4.05L4 8.1v6.85l6 3.475v2.3L3 16.7a1.948 1.948 0 0 1-1-1.725ZM17 23c-1.383 0-2.563-.488-3.537-1.462C12.488 20.562 12 19.383 12 18s.488-2.563 1.463-3.537C14.438 13.488 15.617 13 17 13s2.563.488 3.538 1.463C21.512 15.438 22 16.617 22 18s-.488 2.563-1.462 3.538C19.562 22.512 18.383 23 17 23Z" /></svg>
  )
);

DeployedCodeDownloader.displayName = 'DeployedCodeDownloader';

export default DeployedCodeDownloader;
