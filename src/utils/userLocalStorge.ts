import type { IUser } from '../interfaces/user'


export const saveUserLocalStorage = (user: IUser) => {
    const serializedUser = JSON.stringify(user);
    localStorage.setItem('user', serializedUser);
}

export const getUserLocalStorage = (): IUser | null => {
    const serializedUser = localStorage.getItem('user');
    if (!serializedUser) {
        return null;
    }
    return JSON.parse(serializedUser) as IUser;
}

export const clearLocalStorage = (): void => {
    localStorage.clear();
}