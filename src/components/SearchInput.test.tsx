import { render, screen } from "@testing-library/react"
import { SearchInput } from ".";

test("renders SearchInput component", () => {
    render(<SearchInput />);
    const inputElement = screen.getByPlaceholderText("Search by name...");
    expect(inputElement).toBeInTheDocument()
})