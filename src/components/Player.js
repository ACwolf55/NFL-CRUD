import React, { Component } from 'react'


class Player extends Component{
    constructor() {
        super()
        this.state = {

            name:'',
            team:'',
            position:'',
            showEdit:false
        }
       
    }

editPlayer=()=>{
    const editId = this.props.player.id
    const {name,team,position} = this.state


    this.props.edit(editId,name,team,position)
    this.toggle()
}

deletePlayer=()=>{
    const deleteId = this.props.player.id

    this.props.delete(deleteId)
}

toggle=()=>{
    this.setState({
        showEdit:!this.state.showEdit
    })

}


render(){
     
    return (

        <div className='player'>
            <p>{this.props.player.name}</p>
            <p>{this.props.player.team}</p>
            <p>{this.props.player.position}</p>
            <br></br>

            
           { !this.state.showEdit ? <button onClick={this.toggle}>Edit</button> :
            <div id='edit-popup' >
                <input id='name'placeholder="name" onChange={(e)=> this.setState({name: e.target.value})}/>
                <input id='team'placeholder="team" onChange={(e)=> this.setState({team: e.target.value})}/>
                <input id='edit-pozish'placeholder="position" onChange={(e)=> this.setState({position: e.target.value})}/>

                <button onClick={this.editPlayer}>SAVE</button>
            </div>}

            <button onClick={this.deletePlayer}>Delete</button>



        </div>

    )
}
}

export default Player