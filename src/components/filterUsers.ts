export default function filterUsers(usersData: { results: any[] } | undefined, searchInput: string): any[] {
    return usersData?.results.filter((user: any) =>
        user.name.first.toLowerCase().startsWith(searchInput.toLowerCase())
    ) || [];
}
