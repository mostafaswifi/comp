export const schoolFicher = async () => {
    let url = "http://localhost:3001/schools";
    let response = await fetch(url);
    let data = await response.json();

    return data;
};

