import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { AppContainerStyled, NoResultStyled } from "./styles/PageStyles";
import { useQuery } from "react-query";
import { getUsers } from "./api/usersApi";
import filterUsers from "./components/filterUsers";
import { LoadingPage, ErrorPage, RefetchButton, SearchInput, UserView } from "./components";


function App() {

  const { data, isLoading, isError, refetch, isFetching } = useQuery("users", getUsers, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
  })

  const [searchInput, setSearchInput] = useState("")

  const filteredUsers = filterUsers(data, searchInput)

  if (isLoading) {
    return <LoadingPage />
  }

  if (isError) {
    return <ErrorPage refetch={refetch} />
  }

  return (
    <AppContainerStyled>
      <GlobalStyles />
      <RefetchButton isFetching={isFetching} refetch={refetch} />
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      {filteredUsers.length === 0 ? <NoResultStyled>No results</NoResultStyled> :
        filteredUsers.map((user: any) =>
          <UserView key={user.login.uuid} user={user} />)}
    </AppContainerStyled>
  );
}

export default App;
