import * as React from 'react';

export interface FeatureSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const FeatureSearch = React.forwardRef<SVGSVGElement, FeatureSearchProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m18 13.25 2 2V20c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 22H4c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 20V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 4h5.5c-.133.3-.233.62-.3.963A10.72 10.72 0 0 0 9.05 6H4v14h14v-6.75Zm1.3-4.35 3.2 3.2-1.4 1.4-3.2-3.2c-.35.2-.725.367-1.125.5s-.825.2-1.275.2c-1.25 0-2.313-.438-3.188-1.313C11.438 8.813 11 7.75 11 6.5c0-1.25.438-2.313 1.313-3.188C13.187 2.438 14.25 2 15.5 2c1.25 0 2.313.438 3.188 1.313C19.563 4.186 20 5.25 20 6.5c0 .45-.067.875-.2 1.275-.133.4-.3.775-.5 1.125Zm-3.8.1c.7 0 1.292-.242 1.775-.725C17.758 7.792 18 7.2 18 6.5s-.242-1.292-.725-1.775C16.792 4.242 16.2 4 15.5 4s-1.292.242-1.775.725C13.242 5.208 13 5.8 13 6.5s.242 1.292.725 1.775C14.208 8.758 14.8 9 15.5 9ZM4 20V6v7-.3V20Z" /></svg>
  )
);

FeatureSearch.displayName = 'FeatureSearch';

export default FeatureSearch;
