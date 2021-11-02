const express = require('express')
const app = express()
const PORT = 5000

const ctrl = require('./controllers')

app.use(express.json())

 app.get('/nflplayers',ctrl.getAllPlayers)
 app.get('/nflplayers/:id',ctrl.getPlayer)
 app.get('/test',ctrl.test)
 app.post('/nflplayers',ctrl.addPlayer)
 app.put('/nflplayers/:id',ctrl.editPlayer)
 app.delete('/nflplayers/:id',ctrl.deletePlayer)

 app.get('/getstring', (req,res)=>{
     return res.send('string')
 })

app.listen(PORT, ()=> console.log(`Its working-> PORT: ${PORT}`))

