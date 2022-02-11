import { render, screen } from "@testing-library/react"
import { LoadingPage } from ".";

describe('loadingPageComponent', () => {

    test("renders Loading...", () => {
        render(<LoadingPage />);
        const msgElement = screen.getByTestId("loadingMsg");
        expect(msgElement).toBeInTheDocument()
    })

});