import { fetchSignin } from "../api/fetchSignin"

export const checkingAuth = async (data) => {
    const accounts = await fetchSignin(data);
    const authAccount = accounts.find((obj) => obj.login === data.login && obj.password === data.password);

    if (authAccount) {
        alert("Вы успешно авторизовались!");
        return authAccount;
    } else {
        alert("Неверный логин или пароль");
    }
    return null;

}