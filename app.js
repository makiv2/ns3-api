import express from 'express';


//init app 

const app = express()

app.listen(3000, () => {
    console.log(
        'app listning on port 3000'
    )
})


// routes

app.get('/test', (req, res) => {
    res.json({mssg: "Welcome to the api"})
})



