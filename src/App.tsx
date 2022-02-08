import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { AppContainerStyled, UserContainerStyled, UserDescContainerStyled, NoResultStyled, MsgPageStyled } from "./styles/PageStyles";
import { useQuery } from "react-query";
import { getUsers } from "./api/usersApi";

function App() {

  const { data, isLoading, isError, refetch, isFetching } = useQuery("users", getUsers, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
  })
  const [searchInput, setSearchInput] = useState("")

  const filteredUsers = data?.results.filter((user: any) =>
    user.name.first.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  if (isLoading) {
    return (
      <MsgPageStyled>
        <p>Loading...</p>
      </MsgPageStyled>
    )
  }

  if (isError) {
    return (
      <MsgPageStyled>
        <p>Something went wrong</p>
        <button onClick={() => refetch()}>Retry</button>
      </MsgPageStyled>
    )
  }

  return (
    <AppContainerStyled>
      <GlobalStyles />
      <button onClick={() => refetch()}>{isFetching ? "Loading..." : "Load new users"}</button>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {
        data && filteredUsers.length === 0 ? <NoResultStyled>No results</NoResultStyled> :
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
