import React from 'react';
import { useRouter } from 'next/router';
import SearchResultPage from '../components/SearchResultPage';

const SearchPage: React.FC = () => {
  const router = useRouter();
  const { query } = router.query;
  const queryString = typeof query === 'string' ? query : '';

  return (
    <div>
      <h1>Search Results</h1>
      <SearchResultPage query={queryString} />
    </div>
  );
};

export default SearchPage;
