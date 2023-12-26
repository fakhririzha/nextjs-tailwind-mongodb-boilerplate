const handleRegister = async (values) => {
    try {
        const sendRegister = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        const result = await sendRegister.json();
        return result;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};

export { handleRegister };
