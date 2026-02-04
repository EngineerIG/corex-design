import * as React from 'react';

export interface AddHomeFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const AddHomeFilled = React.forwardRef<SVGSVGElement, AddHomeFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 19 20" width={size} height={size} ref={ref} {...props}><path d="M13.5 15v2c0 .133.05.25.15.35a.48.48 0 0 0 .7 0c.1-.1.15-.217.15-.35v-2h2a.48.48 0 0 0 .35-.15.48.48 0 0 0 0-.7.48.48 0 0 0-.35-.15h-2v-2a.48.48 0 0 0-.15-.35.48.48 0 0 0-.7 0 .48.48 0 0 0-.15.35v2h-2a.48.48 0 0 0-.35.15.48.48 0 0 0 0 .7c.1.1.217.15.35.15h2Zm.5 4.5c-1.383 0-2.563-.488-3.537-1.462C9.488 17.062 9 15.883 9 14.5s.488-2.563 1.463-3.537C11.438 9.988 12.617 9.5 14 9.5s2.563.488 3.538 1.463C18.512 11.938 19 13.117 19 14.5s-.488 2.563-1.462 3.538c-.976.974-2.155 1.462-3.538 1.462Zm-14-4v-9a1.986 1.986 0 0 1 .8-1.6l6-4.5C7.15.133 7.55 0 8 0c.45 0 .85.133 1.2.4l6 4.5a1.985 1.985 0 0 1 .8 1.6v.525c0 .2-.08.354-.238.462a.71.71 0 0 1-.537.113 6.876 6.876 0 0 0-3.313.213A6.914 6.914 0 0 0 9.05 9.55c-.9.9-1.513 1.95-1.838 3.15a6.778 6.778 0 0 0 .013 3.625.93.93 0 0 1-.125.813.78.78 0 0 1-.675.362H2c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 0 15.5Z" /></svg>
  )
);

AddHomeFilled.displayName = 'AddHomeFilled';

export default AddHomeFilled;
