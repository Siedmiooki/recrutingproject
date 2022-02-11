import filterUsers from "./filterUsers";

describe('filterUsers', () => {

    test("returns filteredUsers", () => {
        const filterdUsers = filterUsers({
            results: [{ name: { first: "a" } }, { name: { first: "b" } }]
        }, "c")
        expect(filterdUsers).toEqual([])
    })
    test("returns filteredUsers2", () => {
        const filterdUsers = filterUsers({
            results: [{ name: { first: "a" } }, { name: { first: "b" } }]
        }, "a")
        expect(filterdUsers).toEqual([{ name: { first: "a" } }])
    })
    test("returns filteredUsers3", () => {
        const filterdUsers = filterUsers({
            results: [{ name: { first: "a" } }, { name: { first: "b" } }]
        }, "b")
        expect(filterdUsers).toEqual([{ name: { first: "b" } }])
    })
});



