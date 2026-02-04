import * as React from 'react';

export interface CloseFullscreenProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const CloseFullscreen = React.forwardRef<SVGSVGElement, CloseFullscreenProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m9.702 15.906-6.778 6.778A1.09 1.09 0 0 1 2.12 23a1.09 1.09 0 0 1-.804-.316A1.09 1.09 0 0 1 1 21.88c0-.326.105-.594.316-.804l6.778-6.778H3.958c-.325 0-.598-.11-.818-.33-.22-.22-.33-.494-.33-.82 0-.325.11-.598.33-.818.22-.22.493-.33.818-.33h6.893c.326 0 .598.11.819.33.22.22.33.493.33.819v6.893c0 .325-.11.598-.33.818-.22.22-.493.33-.819.33-.325 0-.598-.11-.818-.33-.22-.22-.33-.493-.33-.818v-4.136Zm6.204-6.204h4.136c.325 0 .598.11.818.33.22.22.33.494.33.82 0 .325-.11.598-.33.818-.22.22-.493.33-.818.33h-6.893c-.326 0-.598-.11-.819-.33-.22-.22-.33-.493-.33-.819V3.958c0-.325.11-.598.33-.818.22-.22.493-.33.819-.33.325 0 .598.11.818.33.22.22.33.493.33.818v4.136l6.779-6.778c.21-.21.478-.316.804-.316.325 0 .594.105.804.316.21.21.316.479.316.804 0 .326-.105.594-.316.804l-6.778 6.778Z" /></svg>
  )
);

CloseFullscreen.displayName = 'CloseFullscreen';

export default CloseFullscreen;
