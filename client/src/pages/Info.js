import React from 'react'
import logo from './NPC_wojak_meme.png'

export const Myinfo = () => {

    return (
        <div class="row">
            <div class="col  m6">
                <div class="card">
                    <div class="card-image">
                        <img src={logo}/>
                        <span class="card-title "></span>
                        {/* <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
                    </div>
                    <div class="card-content">
                        <p> Алексеев Д.А. </p>
                        <p> М3О-324Б-18 </p>
                        <p> Курсовая работа по дисциплине "Интернет-технологии </p>
                        <div class="card-action">
                            <a href="https://github.com/DimitryAl" class="waves-effect waves-red btn red darken-4"> Мой GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}