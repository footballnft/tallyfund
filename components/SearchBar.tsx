import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <TextField
        variant="outlined"
        placeholder="Search Campaigns..."
        fullWidth
        size="small"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton type="submit" color="primary" aria-label="search">
              <Search />
            </IconButton>
          ),
        }}
      />
    </form>
  );
};

export default SearchBar;
