// import React from 'react';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooks } from "../BookSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddBooks = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const HandleSubmit = e => {
        e.preventDefault();
        const book = { id: uuidv4(), title, author }
        dispatch(addBooks(book))
        navigate("/All_Books")
    }
    return (
        <form onSubmit={HandleSubmit} style={{ marginTop: '65px' }}>
            <h2>Add Books</h2>
            <label>Title:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="Title" style={{ padding: '10px 25px' }} value={title} onChange={e => setTitle(e.target.value)} required></input>
            <br></br><br></br>

            <label>Author:</label> &nbsp;
            <input type='text' placeholder="Author" style={{ padding: '10px 25px' }} value={author} onChange={e => setAuthor(e.target.value)}></input>
            <br></br><br></br>
            <button>Add </button>
        </form>
    );
};

export default AddBooks;