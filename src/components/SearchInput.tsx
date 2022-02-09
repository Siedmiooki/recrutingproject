import React from 'react';

export default function SearchInput(props: any) {
    return <input
        type="text"
        placeholder="Search by name..."
        value={props.searchInput}
        onChange={(e) => props.setSearchInput(e.target.value)}
    />;
}
