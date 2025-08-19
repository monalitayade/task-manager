import API from "../utils/api";

export const registerUser = async (UserData) => {
    try {
        const response = await API.post('auth/register', UserData);
        return response?.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export const loginUser = async (userData) => {
    try {
        const response = await API.post('auth/login', userData);
        if(response?.data?.token) {
            // localStorage.setItem("token", response.data.token);
        localStorage.setItem("authUser", JSON.stringify({
            token: response?.data?.token,
            user: response?.data?.user
        }));
        }
        return response?.data;
    } catch (error) {
        console.error("Error logging user:", error);
        throw error;
    }
}