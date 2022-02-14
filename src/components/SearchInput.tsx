export default function SearchInput(props: any) {
    return <input
        type="text"
        data-testid="searchInput"
        placeholder="Search by name..."
        value={props.searchInput}
        onChange={(e) => props.setSearchInput(e.target.value)}
    />;
}
