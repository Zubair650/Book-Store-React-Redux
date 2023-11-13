import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../BookSlice";
import { useLocation, useNavigate } from "react-router-dom";

const EditBooks = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id, title: initialTitle, author: initialAuthor } = location.state;
    const [title, setTitle] = useState(initialTitle);
    const [author, setAuthor] = useState(initialAuthor);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBook({ id, title, author }));
        navigate('/All_Books', { replace: true });
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '65px' }}>
            <h2>Edit Books</h2>
            <label>Title:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="Title" value={title} style={{ padding: '10px 25px' }} onChange={(e) => setTitle(e.target.value)} required></input>
            <br /><br />

            <label>Author:</label> &nbsp;
            <input type='text' placeholder="Author" value={author} style={{ padding: '10px 25px' }} onChange={(e) => setAuthor(e.target.value)} ></input>
            <br /><br />
            <button type='submit'>Update</button>
        </form>
    );
};

export default EditBooks;
