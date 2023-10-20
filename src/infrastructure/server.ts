import express from 'express'
import router from './views/index'

const app = express()

app.use(express.json(), router)
const PORT = 3000

app.listen(PORT, () => console.log(`Serveur run on port ${PORT}`))
