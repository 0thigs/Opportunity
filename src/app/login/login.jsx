'use server'

export const VerifyAdmin = (input) => {
    const password = process.env.ADMIN_USER

    if (input === password) {
        console.log(password)
        return true
    }
    else return false
} 