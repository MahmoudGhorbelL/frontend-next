const CATEGORIE_API = "/categories/";



export const deleteCategorie = async (categorieId) => {
    const res = await fetch(process.env.API_URL + CATEGORIE_API + `${categorieId}`, {
        method: 'DELETE'
    });
    if (!res.ok) {
        throw new Error('Failed to delete data');
    }

    const response = await res.json();
    return response;
};

export const addCategorie = async (categorie) => {
    const res = await fetch(process.env.API_URL + CATEGORIE_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(categorie),
    });

    const response = await res.json();
    return response;
};

export const fetchCategories = async () => {
    const res = await fetch(process.env.API_URL + CATEGORIE_API);
    const data = await res.json();
    return data;
};

export const fetchCategoriesById = async (categorieId) => {
    const res = await fetch(process.env.API_URL + CATEGORIE_API + `${categorieId}`, {
        method: 'GET'
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const response = await res.json();
    return response;
};

export const editCategorie = async (categorie) => {
    const res = await fetch(process.env.API_URL + CATEGORIE_API + `${categorie._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(categorie),
    });

    const response = await res.json();
    return response;
};
