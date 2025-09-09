import axios from "axios";
import type { UserLoginRequest, UserTokenResponse } from "../types/userTypes";
import { API_BASE_URL } from "./apiConfig";

export const login = async (data: UserLoginRequest): Promise<UserTokenResponse> => {
    try {
        const response = await axios.post<UserTokenResponse>(`${API_BASE_URL}/users/login`, data);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};