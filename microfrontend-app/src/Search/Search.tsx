
import * as React from 'react';
const Search = React.lazy(() => import('app2/Search'));

const SearchComponent: React.FC = () => (
    <React.Suspense fallback='Loading Search'>
        <Search />
    </React.Suspense>
)

export default SearchComponent;