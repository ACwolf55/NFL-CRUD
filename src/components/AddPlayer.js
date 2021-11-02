import React, {Component} from 'react'


class AddPlayer extends Component{
    constructor() {
        super()
        this.state = {

            name:'',
            team:'',
            position:''
        }
        this.addPlayer = this.addPlayer.bind(this)
    }
    
    addPlayer=()=>{
        const newPlayer ={
            name:this.state.name,
            team:this.state.team,
            position:this.state.position
        }
        this.props.addPlayer(newPlayer)
    }


    
render(){
    return(
        <div className='addplayer'>
            <h3>ADD PLAYER</h3>
            <p>name:</p>
            <input onChange={(e)=> this.setState({name: e.target.value})}/>
            <p>team</p>
            <input onChange={(e)=> this.setState({team: e.target.value})}/>
            <p>position</p>
            <input onChange={(e)=> this.setState({position: e.target.value})}/>
            <br></br>
            <button onClick={this.addPlayer}>ADD</button>


        </div>


    )


}
}

export default AddPlayer