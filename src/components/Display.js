import React, { Component } from 'react'
import axios from 'axios'
import PlayerDisplay from './PlayerDisplay'
import Player from './Player'
import AddPlayer from './AddPlayer'




class Display extends Component{
    constructor() {
        super()
        this.state = {

            players:[]

        }
        
    this.addPlayer = this.addPlayer.bind(this)
    this.editPlayer = this.editPlayer.bind(this)
    this.deletePlayer = this.deletePlayer.bind(this)
    this.get = this.get.bind(this)
    }

    componentDidMount() {
        axios.get('/nflplayers').then(res=>{
            this.setState({
                players: res.data
            })
        })
    }

    addPlayer(newPlayer){
        axios.post('/nflplayers',newPlayer).then(res=>{
            this.setState({
                players: res.data
            })
        })
    }
    deletePlayer(id){
        axios.delete(`/nflplayers/${id}`).then((res=>{
            this.setState({players:res.data,})
          }))
    }

    editPlayer(id,name,team,position){
        axios.put(`/nflplayers/${id}`,{name,team,position}).then((res=>{
        this.setState({players:res.data,})
            }))
    }
     get(){
        axios.get('/getstring').then((res)=>{
            console.log(res.data)
        })
    }
    


    render() {
        return (
            <div className='display'>
                <PlayerDisplay players={this.state.players} delete={this.deletePlayer} edit={this.editPlayer}/>
                <AddPlayer addPlayer={this.addPlayer}/>
                <button onClick={this.get}>get axios thing</button>


            </div> 

        )

    }



}


export default Display