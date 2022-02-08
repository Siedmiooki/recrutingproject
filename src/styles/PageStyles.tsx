import styled from "styled-components"

export const AppContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const UserContainerStyled = styled.div`
  width: 30rem;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0rem 3rem 0rem;
  img {
    object-fit: contain;
    padding: 1rem;
    border-radius: 2rem;
  }
  @media ( max-width: 500px ) {
    width: 100%;
    }
`

export const UserDescContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 1.2rem;
    padding: 0rem 0.2rem;
    border-radius: 2rem;
  }
`

export const NoResultStyled = styled.p`
  font-size: 2rem;
  margin: 2rem;
`

export const MsgPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: #1A1D32;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: white;
    font-size: 1.2rem;
    font-family: "Jost"
  }
  button {
    font-family: "Jost";
    font-weight: "bold";
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #488bb8;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    border-radius: 2rem;
    &:hover {
        background-color: #488bb8;
        color: white;
    }
  }
`