import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { AppContainerStyled, UserContainerStyled, UserDescContainerStyled, NoResultStyled } from "./styles/PageStyles";
import { useQuery } from "react-query";
import { getUsers } from "./api/usersApi";
import { LoadingPage, ErrorPage, RefetchButton, SearchInput } from "./components";


function App() {

  const { data, isLoading, isError, refetch, isFetching } = useQuery("users", getUsers, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
  })

  const [searchInput, setSearchInput] = useState("")

  const filteredUsers = data?.results.filter((user) =>
    user.name.first.toLocaleLowerCase().startsWith(searchInput.toLowerCase())
  );

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
      {
        filteredUsers === undefined || filteredUsers.length === 0 ? <NoResultStyled>No results</NoResultStyled> :
          filteredUsers.map((user: any) => (
            <UserContainerStyled key={user.login.uuid}>
              <img src={user.picture.medium} alt="userPicture" />
              <UserDescContainerStyled>
                <p style={{ background: `${user.name.title === "Ms" ? "#488bb8" : null}` }}>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
                <p>{`email: ${user.email}`}</p>
                <p>{`city: ${user.location.city}`}</p>
              </UserDescContainerStyled>
            </UserContainerStyled>
          ))
      }
    </AppContainerStyled>
  );
}

export default App;
