export const fetchForms = async (apiUrl: string) => {
    const res = await fetch(`${apiUrl}/api/forms`);
    const data = await res.json();
    return data.data;
};