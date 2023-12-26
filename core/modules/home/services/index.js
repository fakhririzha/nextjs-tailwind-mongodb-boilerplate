const handleCreateActivity = async (values) => {
    try {
        const sendCreateActivity = await fetch('/api/activity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        const result = await sendCreateActivity.json();
        return result;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};

export { handleCreateActivity };
