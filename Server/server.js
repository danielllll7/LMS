import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/Webhooks.js'

// Initialize Express
const app = express()

// connect to Database
await connectDB()

// Middlewares
app.use(cors())

// Routes
app.get('/',(req, res) => res.send(' Danny API is Working!'))      
app.post('/clerk',express.json(), clerkWebhooks)
// Port 
const PORT = process.env.PORT || 5000

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

