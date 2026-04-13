export const login = async (username: string, password: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "password") {
                resolve({ token: "fake-jwt-token" });
            } else {
                reject(new Error("Invalid username or password"));
            }     
        }, 1000); 
    });
};

export const sendOTP = async (username: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!username) {
                reject(new Error("Username is required"));
            } else {
                resolve({ message: "OTP sent successfully" });
            }
        }, 1000);
    });
};

export const verifyOTP = async (otp: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (otp === "123456") {
                resolve({ token: "fake-jwt-token" });
            } else {
                reject(new Error("Invalid OTP"));
            }
        }, 1000);       
    });
};