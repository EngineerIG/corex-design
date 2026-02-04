import * as React from 'react';

export interface WallpaperProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Wallpaper = React.forwardRef<SVGSVGElement, WallpaperProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><mask id="a" width={size} height={size} x={0} y={0} maskUnits="userSpaceOnUse" style={{
    maskType: "alpha"
  }}><path d="M0 0h24v24H0z" /></mask><g mask="url(#a)"><path d="M5 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19v-6h2v6h6v2H5Zm8 0v-2h6v-6h2v6c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 21h-6Zm-7-4 3-4 2.25 3 3-4L18 17H6Zm-3-6V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h6v2H5v6H3Zm16 0V5h-6V3h6c.55 0 1.02.196 1.413.587.39.393.587.863.587 1.413v6h-2Zm-3.5-1c-.433 0-.792-.142-1.075-.425C14.142 9.292 14 8.933 14 8.5c0-.433.142-.792.425-1.075.283-.283.642-.425 1.075-.425.433 0 .792.142 1.075.425.283.283.425.642.425 1.075 0 .433-.142.792-.425 1.075-.283.283-.642.425-1.075.425Z" /></g></svg>
  )
);

Wallpaper.displayName = 'Wallpaper';

export default Wallpaper;
