import React from 'react'
import Player from './Player'

const PlayerDisplay = (props) => {

  const playerMap = props.players.map((element)=> {
    return <Player key ={element.id} player={element} delete={props.delete} edit={props.edit}/>
  })

  return <div className="player-display">{playerMap}</div>
}


export default PlayerDisplay
