import { render, screen, fireEvent } from "@testing-library/react"
import { RefetchButton } from ".";

describe('refetchButton', () => {

    test("renders btn msg", () => {
        render(<RefetchButton refetch={() => { }} />);
        const msgElement = screen.getByTestId("refetchBtn")
        expect(msgElement).toBeInTheDocument()
    })

    test("btn test", () => {
        const refetch = jest.fn()
        render(<RefetchButton refetch={refetch} />);

        const buttonElement = screen.getByTestId("refetchBtn")
        expect(buttonElement).toBeInTheDocument();

        fireEvent.click(buttonElement)

        expect(refetch).toHaveBeenCalledTimes(1)
    })

});