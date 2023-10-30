import { ApiManager } from "./ApiManager";

export const loginUser = async (data) => {
    try {
        const result = await ApiManager(`/auth/login`, {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            data
        })

        return result
    } catch (error) {
        console.log('Error While Login API ', error)
    }
}

export const registerUser = async (data) => {
    try {
        const result = await ApiManager(`/auth/register`,{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            data
        })

        return result
    } catch (error) {
        console.log('Error While Register API ', error)
    }
}