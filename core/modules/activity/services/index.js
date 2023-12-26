const handleGetActivity = async (values) => {
    try {
        const GetActivity = await fetch('/api/activity', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        const result = await GetActivity.json();
        return result;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};

export { handleGetActivity };
