import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { AppContainerStyled, NoResultStyled } from "./styles/PageStyles";
import { useQuery } from "react-query";
import { getUsers } from "./api/usersApi";
import filterUsers from "./components/filterUsers";
import { LoadingPage, ErrorPage, RefetchButton, SearchInput, UserView } from "./components";

function App() {

  const { data, isLoading, isError, refetch, isFetching } = useQuery("users", getUsers, {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
  })

  const [searchInput, setSearchInput] = useState("")

  const filteredUsers = filterUsers(data, searchInput)
  const refetchText = isFetching ? "Loading..." : "Load new users";
  const noUsers = filteredUsers.length === 0;

  if (isLoading) {
    return <LoadingPage />
  }

  if (isError) {
    return <ErrorPage refetch={refetch} />
  }

  return (
    <AppContainerStyled>
      <GlobalStyles />
      <RefetchButton refetch={refetch} text={refetchText} />
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      {noUsers ? <NoResultStyled>No results</NoResultStyled> : filteredUsers.map((user: any) =>
        <UserView key={user.login.uuid} user={user} />)}
    </AppContainerStyled>
  );
}

export default App;
