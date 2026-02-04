import * as React from 'react';

export interface NotificationsPausedProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const NotificationsPaused = React.forwardRef<SVGSVGElement, NotificationsPausedProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M5 19a.967.967 0 0 1-.713-.288A.968.968 0 0 1 4 18a.97.97 0 0 1 .287-.712A.967.967 0 0 1 5 17h1v-7c0-1.383.417-2.612 1.25-3.688.833-1.075 1.917-1.779 3.25-2.112v-.7c0-.417.146-.77.438-1.063A1.447 1.447 0 0 1 12 2c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062v.7c1.333.333 2.417 1.037 3.25 2.112C17.583 7.388 18 8.617 18 10v7h1c.283 0 .52.096.712.288.192.191.288.429.288.712s-.096.52-.288.712A.968.968 0 0 1 19 19H5Zm7 3c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 10 20h4c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 12 22Zm-4-5h8v-7c0-1.1-.392-2.042-1.175-2.825C14.042 6.392 13.1 6 12 6s-2.042.392-2.825 1.175C8.392 7.958 8 8.9 8 10v7Zm5.85-1c.25 0 .463-.088.638-.262a.868.868 0 0 0 .262-.638.868.868 0 0 0-.262-.637.868.868 0 0 0-.638-.263H12l2.55-3.15a.945.945 0 0 0 .2-.575V9.9a.868.868 0 0 0-.262-.638A.868.868 0 0 0 13.85 9h-3.7a.868.868 0 0 0-.638.262.868.868 0 0 0-.262.638c0 .25.088.463.262.637a.868.868 0 0 0 .638.263H12l-2.55 3.15a.944.944 0 0 0-.2.575v.575c0 .25.088.463.262.638a.868.868 0 0 0 .638.262h3.7Z" /></svg>
  )
);

NotificationsPaused.displayName = 'NotificationsPaused';

export default NotificationsPaused;
