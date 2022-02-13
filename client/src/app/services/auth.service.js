import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const authEndpoint = "auth/"

const authService = {
    register: async (payload) => {
        const { data } = await httpService.post("singUp", payload);
        return data;
    },
    login: async ({ email, password }) => {
        const { data } = await httpService.post("signInWithPassword", {
            email,
            password,
            returnSecureToken: true
        });
        return data;
    },
    refresh: async () => {
        const { data } = await httpService.post("token", {
            grant_type: "refresh_token",
            refreshToken: localStorageService.getRefreshToken()
        });
        return data;
    }
};
export default authService;