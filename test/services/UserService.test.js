
describe ("Test for UserService", () =>{

    test("1. Create a new user using the UserService", () =>{
        const user = UserService.create(1, "EslebanPerez", "Esleban")
        expect(user.username).toBe("EslebanPerez")
        expect(user.name).toBe("Esleban")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})