import { render, screen, fireEvent } from "@testing-library/react"
import { ErrorPage } from ".";

describe('errorPageComponent', () => {

    test("renders error msg", () => {
        render(<ErrorPage refetch={() => { }} />);
        const msgElement = screen.getByTestId("errorMsg")
        expect(msgElement).toBeInTheDocument()
    })

    test("btn test", () => {
        const refetch = jest.fn()
        render(<ErrorPage refetch={refetch} />);

        const buttonElement = screen.getByTestId("refetchBtn")
        expect(buttonElement).toBeInTheDocument();

        fireEvent.click(buttonElement)

        expect(refetch).toHaveBeenCalledTimes(1)
    })
});