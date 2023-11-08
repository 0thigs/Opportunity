'use server'

export const VerifyAdmin = (input) => {
    const password = process.env.ADMIN_USER

    if (input === password) {
        return true
        console.log(password)
    }
    else return false
} 