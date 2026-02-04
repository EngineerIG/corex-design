import * as React from 'react';

export interface NotificationImportantProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const NotificationImportant = React.forwardRef<SVGSVGElement, NotificationImportantProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M5 19a.967.967 0 0 1-.713-.288A.968.968 0 0 1 4 18a.97.97 0 0 1 .287-.712A.967.967 0 0 1 5 17h1v-7c0-1.383.417-2.612 1.25-3.688.833-1.075 1.917-1.779 3.25-2.112v-.7c0-.417.146-.77.438-1.063A1.447 1.447 0 0 1 12 2c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062v.7c1.333.333 2.417 1.037 3.25 2.112C17.583 7.388 18 8.617 18 10v7h1c.283 0 .52.096.712.288.192.191.288.429.288.712s-.096.52-.288.712A.968.968 0 0 1 19 19H5Zm7 3c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 10 20h4c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 12 22Zm-4-5h8v-7c0-1.1-.392-2.042-1.175-2.825C14.042 6.392 13.1 6 12 6s-2.042.392-2.825 1.175C8.392 7.958 8 8.9 8 10v7Zm4-4c.283 0 .52-.096.713-.287A.968.968 0 0 0 13 12V9a.967.967 0 0 0-.287-.713A.968.968 0 0 0 12 8a.968.968 0 0 0-.713.287A.967.967 0 0 0 11 9v3c0 .283.096.52.287.713.192.191.43.287.713.287Zm0 3c.283 0 .52-.096.713-.287A.968.968 0 0 0 13 15a.968.968 0 0 0-.287-.713A.968.968 0 0 0 12 14a.968.968 0 0 0-.713.287A.968.968 0 0 0 11 15c0 .283.096.52.287.713.192.191.43.287.713.287Z" /></svg>
  )
);

NotificationImportant.displayName = 'NotificationImportant';

export default NotificationImportant;
