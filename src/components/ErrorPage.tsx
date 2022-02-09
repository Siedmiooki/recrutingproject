import { MsgPageStyled } from "../styles/PageStyles"


export default function ErrorPage(props: any) {

    return (
        <MsgPageStyled>
            <p>Something went wrong</p>
            <button onClick={() => props.refetch()}>Retry</button>
        </MsgPageStyled>
    )
}
