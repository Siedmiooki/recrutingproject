import { UserContainerStyled, UserDescContainerStyled } from "../styles/PageStyles";

export default function UserView({ user }: { user: any }) {
    return (
        <UserContainerStyled>
            <img src={user.picture.medium} alt="userPicture" />
            <UserDescContainerStyled>
                <p style={{ background: `${user.name.title === "Ms" ? "#488bb8" : null}` }}>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
                <p>{`email: ${user.email}`}</p>
                <p>{`city: ${user.location.city}`}</p>
            </UserDescContainerStyled>
        </UserContainerStyled>
    )
}
