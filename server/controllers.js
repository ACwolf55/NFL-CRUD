///////////////---data----//////////////////
const nflPlayers =[
    {
       id: 1,
       name: "Josh Allen",
       team: "Buffalo Bills",
       position: "QB"
     },
     {
         id:2,
         name:"Patrick Mahomes",
         team:"Kansas City Chiefs",
         position:"QB"
     },
     {
         id:3,
         name:"Russel WIlson",
         team:"Seattle Seahawks",
         position:"QB"
     },
     {
       id: 4,
       name: "DK Metcalf",
       team: "Seattle Seahawks",
       position: "WR"
     },
     {
         id:5,
         name:"Deandre Hopkins",
         team:"Arizona Cardinals",
         position:"WR"
     },
     {
         id:6,
         name:"Stefon Diggs",
         team:"Buffalo Bills",
         position:"WR"
     },
     {
       id: 7,
       name:"Derrick Henry",
       team:"Tennessee Titans",
       position:"RB"
     },
     {
        id: 8,
        name:"Alvin Kamara",
        team:"New Orlean Saints",
        position:"RB"
      },
      {
          id:9,
          name:"Dalvin Cook",
          team:"Minnesota Vikings",
          position:"RB"
      }
   ]

/////////////////////----modules----///////////////////////////////////////


let id = 10

module.exports = {

    getAllPlayers: (req, res) => {
        res.status(200).send(nflPlayers)
      },

    test:(req, res)=>{
        res.status(200).send('ITS WORKING!')
    },

    getPlayer: (req, res)=>{
        const {id} = req.params
        const nfl_id = nflPlayers.find((element) => element.id === +id)
        //why does +id only work, when my object numbers arent strings??1!!
            if (nfl_id){
            res.status(200).send(nfl_id)
            }
            else{res.status(409).send('Player does not exist')}
    },

    addPlayer:(req,res)=> {
        const {name,team,position} = req.body

        const newPlayer= {
            id,
            name,
            team,
            position
        }
        nflPlayers.push(newPlayer)
        id++
        res.status(200).send(nflPlayers)
    },
    editPlayer:(req,res)=> {
        const {id} = req.params
        const {name,team,position} = req.body
      
        const index = nflPlayers.findIndex((element)=> element.id === +id)

        if(index === -1){
            return res.status(409).send('Player doesnt exist')
        }
        const existingPlayer = nflPlayers[index]

        nflPlayers[index] = {
            id: existingPlayer.id,
            name: name || existingPlayer.name,
            team: team || existingPlayer.team,
            position: position  || existingPlayer.position
        }
        res.status(200).send(nflPlayers) 
    },

    deletePlayer: (req,res)=> {
        const {id} = req.params
        const index = nflPlayers.findIndex((element)=> element.id === +id)

        if(index === -1){
            return res.status(409).send('Player doesnt exist')
        }
        nflPlayers.splice([index],1)
        res.status(200).send(nflPlayers)
    }

 }







