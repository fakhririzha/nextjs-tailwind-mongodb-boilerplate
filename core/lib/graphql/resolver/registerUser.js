import fetch from 'isomorphic-unfetch';

const registerUser = async (
    parent,
    { input: { name, email, password } },
    context
) => {
    try {
        const res = await fetch(
            process.env.NEXT_PUBLIC_URL
                ? `${process.env.NEXT_PUBLIC_URL}/api/auth/signup`
                : 'http://localhost:3000/api/auth/signup',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            }
        );

        const resJson = await res.json();

        return {
            _id: resJson._id,
            name: resJson.name,
            email: resJson.email,
            password: resJson.password,
            createdAt: resJson.createdAt,
            updatedAt: resJson.updatedAt,
        };
    } catch (error) {
        return error;
    }
    
};

export default registerUser;
