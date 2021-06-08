import React, { useState, useCallback, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Preload } from '../components/preloader'
import { Link } from 'react-router-dom'

export const Booklist = () => {
    
    const {loading, request} = useHttp()
    const [books, setBooks] = useState([])

    const [isValid, setIsValid] = useState(false)
    const [sort, setSort] = useState({by:''})
    const [filter, setFilter] = useState('') 

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

    const deleteHandler = async (event) => {
        try {
            const bookId = event.target.value
            const data = await request('api/books/delete', 'DELETE', {bookId})
        } catch (e) {}
    }

    // sortHandler = (event) => {
    //     setSort({...sort, by: event.target.value})

    //     console.log('Sorting by:', sort.by)

    // }

    const filterHandler = useCallback(async (event) => {
        setFilter(event.target.value)
        
        console.log('filtering by: ', event.target.value)

        try {
            const fetched = await request(`/api/books/${event.target.value}`, 'GET')
            setBooks(fetched)
            
            console.log('Recieve body: ', fetched)

        } catch (e) { }

    }, [request])

    if (loading) {
        return (
            <Preload />
        )
    }

    // if (!books.length) {
    //     return <h1 className="center"> Книг пока нет </h1>
    //   }

    return (
        <div classname="row">
            <h3> Книги в библиотеке </h3>
            <div class='col s3'>
                <label>Фильтр по жанру</label>
                    <select class="browser-default"
                        type='text'
                        id='genre-filter'
                        name='genre-filter'
                        onChange={filterHandler}
                        defaultValue={filter}>
                        <option value="" disabled selected>Фильтровать по жанру</option>
                        <option value="">Без фильтра</option>
                        <option value="Художественная литература"> Художественная литература </option>
                        <option value="Наука и техника"> Наука и техника </option>
                        <option value="Философия и религия"> Философия и религия </option>
                        <option value="Искусство"> Искусство </option>
                        <option value="Психология"> Психология </option>
                    </select>
            </div>
            
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
                                    id:book._id,
                                    title:book.title,
                                    author:book.author,
                                    genre:book.genre
                                }
                            }}>
                            <button 
                                class="waves-effect waves-red btn-small red darken-4 " 
                                disabled={loading}>
                                <i class="material-icons left">edit</i>Изменить
                            </button>
                            </Link>
                        </td>
                        <td> 
                            <button 
                                class="waves-effect waves-red btn-small red darken-4 " 
                                class="btn"
                                disabled={loading}
                                value={book._id}
                                onClick={deleteHandler}
                                >
                                <i class="material-icons left">delete</i>
                                Удалить
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