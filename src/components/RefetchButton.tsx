export default function RefetchButton(props: any) {
    return <button data-testid="refetchBtn" onClick={() => props.refetch()}>{props.text}</button>;
}
