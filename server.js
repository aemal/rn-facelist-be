const express = require('express')
const app = express()
var cors = require('cors')
const port = 4000

app.use(cors())

const faceListData = [
  { "id": "1", "avatar": "https://i.pravatar.cc/150?img=1", "name": "Morgan James" },
  { "id": "2", "avatar": "https://i.pravatar.cc/150?img=2", "name": "Esme Coleman" },
  { "id": "3", "avatar": "https://i.pravatar.cc/150?img=3", "name": "Gary Watson" },
  { "id": "4", "avatar": "https://i.pravatar.cc/150?img=14", "name": "Morgan James" },
  { "id": "5", "avatar": "https://i.pravatar.cc/150?img=4", "name": "Nicholas Scott" },
  { "id": "6", "avatar": "https://i.pravatar.cc/150?img=5", "name": "Hugo Gray" },
  { "id": "7", "avatar": "https://i.pravatar.cc/150?img=6", "name": "Carlos Cox" },
  { "id": "8", "avatar": "https://i.pravatar.cc/150?img=7", "name": "Nannie Ortiz" },
  { "id": "9", "avatar": "https://i.pravatar.cc/150?img=8", "name": "Heather Hughes" },
  { "id": "10", "avatar": "https://i.pravatar.cc/150?img=9", "name": "Lillie Jackson" },
  { "id": "11", "avatar": "https://i.pravatar.cc/150?img=10", "name": "Nathaniel Meyer" },
  { "id": "12", "avatar": "https://i.pravatar.cc/150?img=11", "name": "Tilly Hill" },
  { "id": "13", "avatar": "https://i.pravatar.cc/150?img=12", "name": "Richard James" },
  { "id": "14", "avatar": "https://i.pravatar.cc/150?img=13", "name": "Amelie Glasses" }
 ];

app.get('/facelist', (req, res) => {
  res.json(faceListData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})