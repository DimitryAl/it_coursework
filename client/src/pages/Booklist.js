import React, { useState, useCallback, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Preload } from '../components/preloader'
import { Link } from 'react-router-dom'

export const Booklist = () => {
    
    const {loading, request} = useHttp()
    const [books, setBooks] = useState([])

    const fetchBooks = useCallback( async () => {
        try {
            const fetched = await request('api/books/list', 'GET')
            setBooks(fetched)
        } catch (e) {

        }
    }, [request])

    useEffect(() => {
        fetchBooks()
    }, [])

    if (loading) {
        return (
            <Preload />
        )
    }

    if (!books.length) {
        return <h1 className="center"> Книг пока нет </h1>
      }

    return (
        <div classname="row">
            <h3> Книги в библиотеке </h3>
            <table>
                <thead>
                <tr>
                <th>№</th>
                <th>Название</th>
                <th>Автор</th>
                <th>Жанр</th>
                </tr>
                </thead>
                <tbody>
                { books.map((book, index) => {
                    return (
                    <tr key={book._id}>
                        <td>{index + 1}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.genre}</td>
                        <td>
                            <Link to={{
                                pathname:'/edit',
                                bookinfo: {
                                    title:book.title,
                                    author:book.author,
                                    genre:book.genre
                                }
                            }}>
                            <button 
                                class="waves-effect waves-red btn-small red darken-4 " 
                                // disabled={loading}>
                                >
                                <i class="material-icons left">edit</i>Изменить
                            </button>
                            </Link>
                        </td>
                        <td> 
                        <button 
                            class="waves-effect waves-red btn-small red darken-4 " 
                            // disabled={loading}>
                            >
                            <i class="material-icons left">delete</i>Удалить
                            </button>
                        </td>
                    </tr>
                    )
                }) }
                </tbody>
            </table>
        </div>
    )
}