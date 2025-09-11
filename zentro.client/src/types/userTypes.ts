export interface UserLoginRequest {
    email: string;
    password: string;
}

export interface UserTokenResponse {
    token: string;
}

export interface User {
    id?: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    birthDate: string;
}