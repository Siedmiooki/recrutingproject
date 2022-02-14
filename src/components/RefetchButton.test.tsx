import { render, screen, fireEvent } from "@testing-library/react"
import { RefetchButton } from ".";

describe('refetchButton', () => {

    test("renders btn elem", () => {
        render(<RefetchButton refetch={() => { }} />);
        const refetchElem = screen.getByTestId("refetchBtn")
        expect(refetchElem).toBeInTheDocument()
    })

    test("renders btn text elem", () => {
        render(<RefetchButton refetch={() => { }} text="testText" />);
        const refetchElem = screen.getByTestId("refetchBtn")
        expect(refetchElem).toHaveTextContent("testText")
    })

    test("btn click test", () => {
        const refetch = jest.fn()
        render(<RefetchButton refetch={refetch} />);

        const buttonElement = screen.getByTestId("refetchBtn")
        expect(buttonElement).toBeInTheDocument();

        fireEvent.click(buttonElement)

        expect(refetch).toHaveBeenCalledTimes(1)
    })

});