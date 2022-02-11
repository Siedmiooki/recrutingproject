import { MsgPageStyled } from "../styles/PageStyles"


export default function ErrorPage(props: { refetch: (() => void) }) {

    return (
        <MsgPageStyled>
            <p data-testid="errorMsg">Something went wrong</p>
            <button data-testid="refetchBtn" onClick={() => props.refetch()}>Retry</button>
        </MsgPageStyled>
    )
}
