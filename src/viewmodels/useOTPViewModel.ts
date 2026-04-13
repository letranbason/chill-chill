import { useState } from "react";
import { verifyOTP } from "../services/authService";

export default function useOTPViewModel() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleVerifyOTP = async (otp: string) => {
        setLoading(true);
        setError("");
        try {
            const result = await verifyOTP(otp);
            console.log("OTP verification result:", result);
        } catch (err) {
            setError("Invalid OTP");
        } finally {
            setLoading(false);
        }
    };

    const clearError = () => {
        setError("");
    }

    return {
        loading,
        error,
        handleVerifyOTP,
        clearError
    };
}