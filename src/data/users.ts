import type { IUser } from "../interfaces/user"; // Asegúrate de que la ruta sea correcta

export const users: IUser[] = [
    {
        id: 1,
        email: "user@gmail.com",
        name: "Edgar",
        lastName: "Gonzalez",
        password: "user1234",
        isVip: false,
        purchases: []
    }
]