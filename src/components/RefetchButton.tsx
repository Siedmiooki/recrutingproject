
export default function RefetchButton(props: any) {
    return <button onClick={() => props.refetch()}>{props.isFetching ? "Loading..." : "Load new users"}</button>;
}
