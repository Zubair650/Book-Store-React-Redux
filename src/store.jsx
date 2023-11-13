import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./BookSlice";

const store = configureStore({
    reducer: {
        booksSlice: bookSlice
    }
})

export default store;