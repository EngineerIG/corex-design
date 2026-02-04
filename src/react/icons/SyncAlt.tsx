import * as React from 'react';

export interface SyncAltProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const SyncAlt = React.forwardRef<SVGSVGElement, SyncAltProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><mask id="a" width={size} height={size} x={0} y={0} maskUnits="userSpaceOnUse" style={{
    maskType: "alpha"
  }}><path d="M0 0h24v24H0z" /></mask><g mask="url(#a)"><path d="m7 5.825-1.9 1.9c-.2.2-.433.296-.7.287a1.006 1.006 0 0 1-.7-.312c-.183-.2-.28-.434-.288-.7a.916.916 0 0 1 .288-.7l3.6-3.6a.88.88 0 0 1 .325-.213c.117-.041.242-.062.375-.062s.258.02.375.062A.877.877 0 0 1 8.7 2.7l3.6 3.6a.933.933 0 0 1 .275.687c0 .275-.092.513-.275.713-.2.2-.438.3-.713.3a.973.973 0 0 1-.712-.3L9 5.825V20c0 .283-.096.52-.288.712A.967.967 0 0 1 8 21a.967.967 0 0 1-.713-.288A.968.968 0 0 1 7 20V5.825Zm8 12.35V4a.97.97 0 0 1 .287-.713A.968.968 0 0 1 16 3a.97.97 0 0 1 .712.287c.192.192.288.43.288.713v14.175l1.9-1.9c.2-.2.433-.296.7-.288.267.009.5.113.7.313.183.2.28.433.287.7a.916.916 0 0 1-.287.7l-3.6 3.6c-.1.1-.208.17-.325.212a1.106 1.106 0 0 1-.375.063c-.133 0-.258-.021-.375-.063a.877.877 0 0 1-.325-.212l-3.6-3.6a.933.933 0 0 1-.275-.688c0-.275.092-.512.275-.712.2-.2.437-.3.712-.3.275 0 .513.1.713.3L15 18.175Z" /></g></svg>
  )
);

SyncAlt.displayName = 'SyncAlt';

export default SyncAlt;
