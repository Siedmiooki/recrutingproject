import { screen, render } from "@testing-library/react";
import { getUsers } from "./api/usersApi";
import App from "./App";

const mockUseQuery = jest.fn()

jest.mock("react-query", () => {
    return {
        useQuery: (...args: any[]) => mockUseQuery(...args)
    }
})

describe('App component test', () => {
    test('isLoading test', () => {
        mockUseQuery.mockReturnValueOnce({ isLoading: true })
        render(<App />)

        expect(screen.getByTestId('loadingMsg')).toBeInTheDocument()
        expect(mockUseQuery).toHaveBeenNthCalledWith(1, "users", getUsers, {
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false
        })
    })
    test('isError test', () => {
        mockUseQuery.mockReturnValue({ isError: true })
        render(<App />)

        expect(screen.getByTestId('errorMsg')).toBeInTheDocument()
        expect(mockUseQuery).toHaveBeenNthCalledWith(1, "users", expect.anything(), expect.anything())
    })
    test('isFetching text test', async () => {
        mockUseQuery.mockReturnValue({ isFetching: true })
        render(<App />)

        expect(await screen.findByText("Loading...")).toBeInTheDocument()
        expect(mockUseQuery).toHaveBeenNthCalledWith(1, "users", expect.anything(), expect.anything())
    })
    test('!isFetching text test', async () => {
        mockUseQuery.mockReturnValue({ isFetching: false })
        render(<App />)

        expect(await screen.findByText("Load new users")).toBeInTheDocument()
        expect(mockUseQuery).toHaveBeenNthCalledWith(1, "users", expect.anything(), expect.anything())
    })
    test('noUsers test', async () => {
        mockUseQuery.mockReturnValue({ noUsers: true })
        render(<App />)

        expect(await screen.findByText("No results")).toBeInTheDocument()
        expect(mockUseQuery).toHaveBeenNthCalledWith(1, "users", expect.anything(), expect.anything())
    })
})