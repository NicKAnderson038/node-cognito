import express from 'express'
import dotenv from 'dotenv'
import router from './routes'
dotenv.config()
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})