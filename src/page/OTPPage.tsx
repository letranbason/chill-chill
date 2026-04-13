import { useState } from "react";
import { Button, Flex, Input, type GetProps } from "antd";
import useOTPViewModel from "../viewmodels/useOTPViewModel";

type OTPProps = GetProps<typeof Input.OTP>;

export default function OTPPage() {
    const [otp, setOtp] = useState("");
    const { loading, error, handleVerifyOTP, clearError } = useOTPViewModel();
    const onChange: OTPProps['onChange'] = (text) => {
        setOtp(text);
    };

    const onInput: OTPProps['onInput'] = () => {
        setOtp("");
        clearError();
    };

    const sharedProps: OTPProps = {
        onChange,
        onInput,
    };

    const disableButton = otp.length !== 6 || loading;
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Flex gap="medium" align="flex-center" vertical>
                <h1 className="mb-4">OTP Page</h1>
                <Input.OTP length={6} {...sharedProps} />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Button type="primary" className="mt-3" onClick={() => handleVerifyOTP(otp)} disabled={disableButton}>
                    {loading ? "Verifying..." : "Verify OTP"}
                </Button>
            </Flex>
        </div>
    );
}