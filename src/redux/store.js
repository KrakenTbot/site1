import {  createStore  } from 'redux';
import s from './store.module.css'

const Array = [
    {name: 'Reid Pilch', position: 'Managing Director'},
    {name: 'Kevin Qian', position: 'Principal of Consulting'},
    {name: 'Julia Loughlin', position: 'Principal of Human Resources'},
    {name: 'Walter Wong', position: 'Principal of Business Development'},
    {name: 'Tatsuya Hayashi', position: 'Engagement Manager'},
    {name: 'Joan Wang', position: 'Engagement Manager'},
    {name: 'Philip Crean', position: 'Engagement Manager'},
    {name: 'Alec Page', position: 'Engagement Manager'},
] 

const initialState = {
    block: Array.map(e => {return(
        <div className={s.InfoBlock}>
            <h1>{e.name}</h1>
            <p>{e.position}</p>
        </div>
    )})
}

const reduser = (state = initialState, action) => {
    return state;
}

const store = createStore(reduser)

export default store