import React, {useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {Preload} from '../components/preloader'
import {Link} from 'react-router-dom'

export const Edit = (props) => {

    const {loading, request} = useHttp()

    const {id, title, author, genre} = props.location.bookinfo

    const [form, setForm] = useState({
        id: id,
        title: title,
        author: author,
        genre: genre
    })

    const saveHandler = async () => {
        try {
            const data = await request('api/book/edit', 'PUT', {...form})
        } catch (e) {}
    }

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    if (loading) {
        <Preload />
    } else
    return (
        <div class="row">
            <div class="col s12 m10">
                <div class="card white">
                    <div class="card-content ">
                        <span class="card-title">Изменение данных книги</span>
                        <div classname="input-title">
                            <input 
                                id="title" 
                                type="text" 
                                name="title"
                                defaultValue={title}
                                class="validate"
                                onChange={changeHandler}
                            />
                            <label htmlfor="title">Название</label>
                        </div>
                        <div classname="input-author">
                            <input 
                                id="author" 
                                type="text" 
                                name="author"
                                defaultValue={author}
                                onChange={changeHandler}
                            />
                            <label htmlfor="author">Автор</label>
                        </div>
                        <div class="input-genre">
                                <select 
                                    class="browser-default"
                                    id="genre"
                                    type="text"
                                    name="genre"
                                    onChange={changeHandler}
                                    >
                                    <option value="" disabled selected>{genre}</option>
                                    <option value="Художественная литература"> Художественная литература </option>
                                    <option value="Наука и техника"> Наука и техника </option>
                                    <option value="Философия и религия"> Философия и религия </option>
                                    <option value="Искусство"> Искусство </option>
                                    <option value="Психология"> Психология </option>
                                </select>
                                <label> Жанр </label>
                        </div>
                    </div> 
                    <div class="card-action">
                        <Link to='/books'>
                            <button 
                                class="waves-effect waves-red btn-large red darken-4 " 
                                onClick={saveHandler}
                                disabled={loading}>
                                <i class="material-icons left">save</i>Сохранить изменения
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}