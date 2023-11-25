import config from './../config/config.js'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', (err) => {
  throw new Error(`unable to connect to database: ${err.message}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
