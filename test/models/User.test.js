const User = require('./../../app/models/User')

describe("Unit Test for User class",() =>{
    test('Create an User object', () =>{
        // Aquí invocas el código que vas a usar en tu app
        const user = new User(1, "EslebanPerez", "Esleban", "Bio")
        
        // Aquí validad los resultados de ese código
        // Esta es una comparación que va a igualar el valor de la izquierda conoel valor de la derecha (valor esperado) 
        expect(user.id).toBe(1)
        expect(user.username).toBe("EslebanPerez")
        expect(user.name).toBe("Esleban")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined() // Verifica que el valor no sea undefined
        expect(user.lastUpdated).not.toBeUndefined()
    });
    test('Add getters',() =>{
        const user = new User(1, "EslebanPerez", "Esleban", "Bio")
        expect(user.getUsername).toBe("EslebanPerez")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });
})