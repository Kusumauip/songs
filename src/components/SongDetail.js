import React from 'react';
import {connect} from 'react-redux';

const SongDetail=({selectedSong})=>{
    return(
        <div>
        <div>{selectedSong!=null?selectedSong.title:<></>}</div>
        <div>{selectedSong!=null?selectedSong.duration:<></>}</div>
        </div>
    )
}

const mapStateToProp=(state)=>{
   return {selectedSong:state.selectedSong}
}

export default connect(mapStateToProp)(SongDetail)