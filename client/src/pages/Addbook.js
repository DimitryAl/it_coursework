import React, { useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Preload } from '../components/preloader'

export const Addbook = () => {
    
    const {loading, request} = useHttp()

    const [form, setForm] = useState( {
        title:'', author:'', genre:''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const addingHandler = async() => {
        try{
            const data = await request('/api/book/add', "POST", {...form})
        } catch (e) {}
    }

    if (loading) {
        return (
            <Preload />
        )
    } else
    return (
        <div classname='row'>
            <div classname='col s6 offset-s3'> 
                <h1> Добавить книгу </h1>
                <div classname="card blue-grey darken-1">
                    <div classname="card-content white-text">
                        <span classname="card-title"> Нажмите кнопку "Добавить", чтобы добавить книгу на сервер. </span>
                        <div>
                            <div classname="input-title">
                                <input 
                                    placeholder="Введите название" 
                                    id="title" 
                                    type="text" 
                                    name="title"
                                    onChange={changeHandler}
                                />
                                {/* <label htmlfor="title"></label> */}
                            </div>
                            <div class="input-author">
                                <input 
                                    placeholder="Имя автора"
                                    id="author" 
                                    type="text" 
                                    name="author"
                                    onChange={changeHandler}
                                />
                                {/* <label for="last_name"></label> */}
                            </div>
                            <div class="input-genre">
                                <select 
                                    class="browser-default"
                                    id="genre"
                                    type="text"
                                    name="genre"
                                    onChange={changeHandler}
                                    >
                                    <option value="" disabled selected>Выберете жанр</option>
                                    <option value="Художественная литература"> Художественная литература </option>
                                    <option value="Наука и техника"> Наука и техника </option>
                                    <option value="Философия и религия"> Философия и религия </option>
                                    <option value="Искусство"> Искусство </option>
                                    <option value="Психология"> Психология </option>
                                </select>
                                <label> <p></p> </label>

                                {/* <input 
                                    placeholder="Жанр"
                                    id="genre" 
                                    type="text" 
                                    name="genre"
                                    onChange={changeHandler}
                                /> */}
                                {/* <label for="last_name"></label> */}
                            </div>
                        </div>
                        <button 
                            class="waves-effect waves-red btn-large red darken-4 " 
                            onClick={addingHandler}
                            disabled={loading}>
                            <i class="material-icons left">add</i>Добавить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}