'use server'
const password = process.env.ADMIN_USER

export const VerifyAdmin = (input) => {
    
    if (input === password) {
        console.log(true)
    }
    else {
        console.log(false)
    }
} 