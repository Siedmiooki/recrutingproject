import { render, screen } from "@testing-library/react"
import { UserView } from "./"

describe('UserView', () => {
    const testUser = {
        name: {
            title: "titleTest",
            first: "firstTest",
            last: "lastTest"
        },
        picture: {
            medium: "imgTest"
        },
        email: "emailTest",
        location: {
            city: "cityTest"
        }
    }
    test("renders img elem", () => {
        render(<UserView user={testUser} />);
        const imgElem = screen.getByTestId("userViewImg")
        expect(imgElem).toBeInTheDocument()
        expect(imgElem).toHaveAttribute("src", testUser.picture.medium)
    })
    test("renders desc elements", () => {
        render(<UserView user={testUser} />);
        const descElem = screen.getByTestId("userViewDesc")
        expect(descElem).toBeInTheDocument()
        expect(descElem).toHaveTextContent(testUser.name.title)
        expect(descElem).toHaveTextContent(testUser.name.first)
        expect(descElem).toHaveTextContent(testUser.name.last)
        expect(descElem).toHaveTextContent(`email: ${testUser.email}`)
        expect(descElem).toHaveTextContent(`city: ${testUser.location.city}`)
    })

});