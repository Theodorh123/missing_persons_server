const app = require('./app')
    // specify port to run on

const port = 5000
    // listen on port 5000

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})