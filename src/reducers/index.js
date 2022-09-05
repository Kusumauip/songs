import {combineReducers} from 'redux';

const songReducer=()=>{
    return [
        {title:'Thiniga Thuniga',duration: '3:02'},
        {title:'Race Gurram', duration:'3:00'},
        {title:'Nitho vunta',duration:'2:38'},
        {title:'DJ Tillu', duration:'4:01'}
    ]
}

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SELECT_SONG')
    return action.payload.song

    return selectedSong;
}

export default combineReducers({
    song: songReducer,
    selectedSong: selectedSongReducer
})