import { useState } from "react";
import type { FieldType } from "../helpers/authField";
import { Input, Form, Button } from "antd";
import useForgotPasswordViewModel from "../viewmodels/useForgotPasswordViewModel";
import { useNavigate } from "react-router";

export default function ForgotPasswordPage() {
    const [username, setUsername] = useState("");
    const { loading, handleSendOTP, error } = useForgotPasswordViewModel();
    const navigate = useNavigate();

    const sendOTP = async () => {
        try {
            const res = await handleSendOTP(username);
            if (res) {
                navigate("/otp");
            }
        }
        catch (err) {
            console.error("Error sending OTP:", err);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <h1 className="mb-4">Forgot Password Page</h1>
                <Form.Item<FieldType>
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Item>

                <Button onClick={() => window.history.back()} style={{ marginRight: "10px" }}>
                    Back
                </Button>
                <Button type="primary" onClick={async() => sendOTP()} disabled={loading}>
                    {loading ? "Sending OTP..." : "Send OTP"}
                </Button>

                {error && <p className="mt-3" style={{ color: "red" }}>{error}</p>}
            </Form>
        </div>
    )
}