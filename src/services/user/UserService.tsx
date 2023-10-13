import User from "../../models/user/User";

export const registerUser = async (user: User) => {
    try {
        const repoonse = await fetch(`El tuki endpoint`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });

        if (!repoonse.ok) {
            throw new Error('POST request failed');
        }
        console.log('Post request succeeded');
    } catch (err) {
        console.error('POST request errror',err);
        throw err;
    }
}