const UserService = require ('../../app/services/UserService')

describe ("Test for UserService", () =>{

    test("1. Create a new user using the UserService", () =>{
        const user = UserService.create(1, "EslebanPerez", "Esleban")
        expect(user.username).toBe("EslebanPerez")
        expect(user.name).toBe("Esleban")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
    test("2. Get all users data in a list", () =>{
        const user = UserService.create(1, "EslebanPerez", "Esleban")
        const userInfoInlist = UserService.getInfo(user)
        expect(userInfoInlist[0]).toBe(1)
        expect(userInfoInlist[1]).toBe("EslebanPerez")
        expect(userInfoInlist[2]).toBe("Esleban")
        expect(userInfoInlist[3]).toBe("Sin bio")

    })
    
})