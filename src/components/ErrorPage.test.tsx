import { render, screen } from "@testing-library/react"
import { ErrorPage } from ".";

describe('errorPageComponent', () => {

    test("renders error msg", () => {
        render(<ErrorPage refetch={() => { }} />);
        const msgElement = screen.getByTestId("errorMsg")
        expect(msgElement).toBeInTheDocument()
    })

    test("renders btn", () => {
        render(<ErrorPage refetch={() => { }} />);
        const refetchElem = screen.getByTestId("refetchBtn")
        expect(refetchElem).toBeInTheDocument()
    })
});
