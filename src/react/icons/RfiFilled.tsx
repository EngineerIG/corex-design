import * as React from 'react';

export interface RfiFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const RfiFilled = React.forwardRef<SVGSVGElement, RfiFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M13.39 7V2.52h1.767c.338 0 .627.06.866.182.241.12.424.29.55.51.126.218.19.475.19.771 0 .298-.064.554-.193.768a1.249 1.249 0 0 1-.558.49c-.242.114-.535.17-.879.17H13.95v-.76h1.03c.18 0 .331-.025.45-.075a.536.536 0 0 0 .268-.223.702.702 0 0 0 .09-.37.733.733 0 0 0-.09-.376.55.55 0 0 0-.27-.232c-.12-.054-.27-.08-.452-.08h-.64V7h-.946Zm2.419-2.039L16.923 7h-1.046l-1.09-2.039h1.022ZM17.432 7V2.52h2.966v.781H18.38v1.067h1.822v.781H18.38V7h-.947Zm4.551-4.48V7h-.948V2.52h.948ZM3.75 22.5V8.25h12L14.25 12l1.5 3.75H5.25v6.75h-1.5Z" /></svg>
  )
);

RfiFilled.displayName = 'RfiFilled';

export default RfiFilled;
