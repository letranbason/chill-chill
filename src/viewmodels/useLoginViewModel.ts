import { useState } from "react";
import { login } from "../services/authService";

export default function useLoginViewModel() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (username: string, password: string) => {
        setLoading(true);
        setError("");
        try {
            const response = await login(username, password);
            console.log("Login successful:", response);
        } catch (err) {
            setError("Invalid username or password");
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        handleLogin,
    };
}