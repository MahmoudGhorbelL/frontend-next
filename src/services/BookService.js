const BOOK_API = "/books/";

export const fetchBooks = async () => {
    const res = await fetch(process.env.API_URL + BOOK_API, {
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const response = await res.json();
    return response;
};

export const fetchBookById = async (bookId) => {
    const res = await fetch(process.env.API_URL + BOOK_API + `${bookId}`, {
        method: 'GET'
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const response = await res.json();
    return response;
};

export const deleteBook = async (bookId) => {
    const res = await fetch(process.env.API_URL + BOOK_API + `${bookId}`, {
        method: 'DELETE'
    });
    if (!res.ok) {
        throw new Error('Failed to delete data');
    }

    const response = await res.json();
    return response;
};

export const addBook = async (book) => {
    const res = await fetch(process.env.API_URL + BOOK_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    });
    if (!res.ok) {
        throw new Error('Failed to add data');
    }

    const response = await res.json();
    return response;
};

export const editBook = async (book) => {
    const res = await fetch(process.env.API_URL + BOOK_API + `${book._id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });
    const response = await res.json();
    return response;
}

export const fetchBooksPagination=async(page,limit)=> {
    const res = await
    fetch(process.env.API_URL+BOOK_API+`pagination?page=${page}&limit=${limit}`
    , { cache: 'no-store' })
    const response=await res.json()
    return response;
    }
    export const fetchArticlesPaginationFilter=async(page,limit,searchTerm,prixMax)=> {
        const res = await
        fetch(process.env.API_URL+BOOK_API+`paginationFilter?page=${page}&limit=${limit}&searchTerm=${searchTerm}&prixMax=${prixMax}`, { cache: 'no-store' })
        const response=await res.json()
        return response;
    }
