import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'

class SongList extends React.Component{
    
    renderList=()=>{
        return this.props.song.map((song)=>{
            return (
                <div className='item' key={song.title}>
                    <div className='right floated buttom'>
                        <button onClick={()=>this.props.selectSong(song)}className='ui button primary'>Select</button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            )
        }

        )
    }

    render(){
        return(
            <div className='ui divided list'>{this.renderList()}</div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {song:state.song}

}

export default connect(mapStateToProps,{selectSong:selectSong})(SongList)