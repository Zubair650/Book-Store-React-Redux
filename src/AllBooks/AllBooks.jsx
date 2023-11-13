// import React from 'react';

import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooks } from "../BookSlice";
import { Link } from "react-router-dom";

const AllBooks = () => {
    const books = useSelector((state) => state.booksSlice.books)
    console.log(books)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteBooks(id))
    }
    return (
        <div style={{ marginTop: '65px' }}>
            <h2>All Books</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '20px' }}>
                {books && books.map((book) => {
                    const { id, title, author } = book;
                    return (
                        <Card key={book.title} style={{ width: '18rem', border: '2px solid white' }}>
                            <Card.Body >
                                <Card.Title style={{ fontSize: '25px' }}><b>{title}</b></Card.Title>
                                <Card.Text>
                                    Author: <b>{author}</b>
                                </Card.Text>
                                <Link to='/Edit_Books'
                                    state={{ id, title, author }}>
                                    <Button variant="primary">Edit</Button> &nbsp;</Link>
                                <Button variant="primary" onClick={() => handleDelete(id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    )
                }

                )}
            </div>
        </div>
    );
};

export default AllBooks;