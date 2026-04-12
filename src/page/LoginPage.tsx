import { useState } from "react";
import useLoginViewModel from "../viewmodels/useLoginViewModel";
import {Button, Checkbox, Form, Input} from "antd";
import { Link } from "react-router-dom";
import type { FieldType } from "../helpers/authField";

export default function LoginPage() {
    const { handleLogin, loading, error } = useLoginViewModel();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <h1 className="mb-4">Login Page</h1>
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

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit" onClick={() => handleLogin(username, password)}>
                        {loading ? "Loading" : "Login"}
                    </Button>
                </Form.Item>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <Link to="/forgot" className="mt-3">Forgot Password?</Link>
            </Form>
        </div>
    );
}