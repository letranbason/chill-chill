import { useState } from "react";
import { sendOTP } from "../services/authService";

export default function ForgotPasswordPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSendOTP = async (username: string) => {
        setLoading(true);
        setError("");
        try {
            const result = await sendOTP(username);
            return result;
        } catch (err) {
            console.error("Error sending OTP:", err);
            setError("Failed to send OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    }
    return {
        loading,
        handleSendOTP,
        error,
    };
}