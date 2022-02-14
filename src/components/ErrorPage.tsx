import { MsgPageStyled } from "../styles/PageStyles"
import { RefetchButton } from "."


export default function ErrorPage(props: { refetch: (() => void) }) {

    return (
        <MsgPageStyled>
            <p data-testid="errorMsg">Something went wrong</p>
            <RefetchButton data-testid="refetchComp" refetch={props.refetch} text="Retry" />
        </MsgPageStyled>
    )
}
