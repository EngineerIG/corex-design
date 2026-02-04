import * as React from 'react';

export interface AdminPanelSettingsFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const AdminPanelSettingsFilled = React.forwardRef<SVGSVGElement, AdminPanelSettingsFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M17 22c-1.383 0-2.563-.488-3.537-1.462C12.488 19.562 12 18.383 12 17s.488-2.563 1.463-3.537C14.438 12.488 15.617 12 17 12s2.563.488 3.538 1.463C21.512 14.438 22 15.617 22 17s-.488 2.563-1.462 3.538C19.562 21.512 18.383 22 17 22Zm-5 0c-2.317-.583-4.23-1.913-5.737-3.988C4.754 15.938 4 13.633 4 11.1V5l8-3 8 3v5.675a6.157 6.157 0 0 0-1.462-.5A7.311 7.311 0 0 0 17 10c-1.933 0-3.583.683-4.95 2.05C10.683 13.417 10 15.067 10 17c0 1.033.196 1.967.588 2.8a7.92 7.92 0 0 0 1.487 2.175c-.017 0-.03.004-.037.012-.009.009-.021.013-.038.013Zm5-5c.417 0 .77-.146 1.063-.438.291-.291.437-.645.437-1.062 0-.417-.146-.77-.438-1.063A1.446 1.446 0 0 0 17 14c-.417 0-.77.146-1.063.438A1.446 1.446 0 0 0 15.5 15.5c0 .417.146.77.438 1.063.291.291.645.437 1.062.437Zm0 3c.517 0 .992-.12 1.425-.363a2.993 2.993 0 0 0 1.05-.962 4.892 4.892 0 0 0-1.175-.5A4.798 4.798 0 0 0 17 18c-.45 0-.883.058-1.3.175a4.892 4.892 0 0 0-1.175.5 3 3 0 0 0 1.05.962c.433.242.908.363 1.425.363Z" /></svg>
  )
);

AdminPanelSettingsFilled.displayName = 'AdminPanelSettingsFilled';

export default AdminPanelSettingsFilled;
