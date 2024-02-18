'use server'
const password = process.env.ADMIN_USER

export const VerifyAdmin = (input) => {
    return input === password;
} 