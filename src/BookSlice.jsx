import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        { id: 1, title: 'Stories of Bangladesh', author: 'Zubair Ahmed' },
        { id: 2, title: 'The Last Survivor', author: 'Zubair Ahmed' },
        { id: 3, title: 'The Fallen Kingdom', author: 'Saad Ahmed' },
        { id: 4, title: 'The Rise of the Empire', author: 'Asif Khan' },
        { id: 5, title: 'The Heaven of Rose', author: 'Rahim Aslam' },
    ]
}

export const bookSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBooks: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const { id, title, author } = action.payload;
            const bookToUpdate = state.books.find((book) => book.id === id);
            if (bookToUpdate) {
                bookToUpdate.title = title;
                bookToUpdate.author = author;
            } else {
                console.error(`Book with ID "${id}" not found in state.`);
            }
        },
        deleteBooks: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id)
        }
    }
});

export const { showBooks, addBooks, updateBook, deleteBooks } = bookSlice.actions;
export default bookSlice.reducer;
