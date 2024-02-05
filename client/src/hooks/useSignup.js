import { useState } from "react";
import apiConfig from "../api.config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();
    const signup = async (name, email, phone, password,college,workshop, transactionid ) => {
        setIsLoading(true);
        setError(null);
        const resp = await fetch(apiConfig.URL + '/userapi/signup', {
            method: 'POST',
            headers: { 'Content-type': 'application/json','Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ name, email, phone, password,college,workshop, transactionid })
        })
        const data = await resp.json();
        if (!resp.ok) {
            setIsLoading(false);
            setError(data.error);
        } else {
            // save the user to local storage
            localStorage.setItem('slayer', JSON.stringify(data));
            dispatch({ type: 'LOGIN', payload: data })

            setIsLoading(false);
        }
    }
    return { signup, isLoading, error };
}