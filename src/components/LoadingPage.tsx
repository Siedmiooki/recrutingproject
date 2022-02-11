import { MsgPageStyled } from "../styles/PageStyles"

export default function LoadingPage() {
    return (
        <MsgPageStyled>
            <p data-testid="loadingMsg">Loading...</p>
        </MsgPageStyled>
    )
}
