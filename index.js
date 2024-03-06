require('dotenv').config();

const cors = require('cors')

const app = require('express')();

app.use(cors({
    origin: "http://localhost:3001"
}))

const Taylor_relationships = require('./Talylor_Relationship_Data_');
Lana_relationships = require('./Lana_Realtionship_Data').default



const PORT = process.env.PORT && 8080

app.listen(
    PORT,
    () => console.log(`Server is running on port ${PORT}`)
);

app.get('/taylor', (req, res) => {
    res.send(Taylor_relationships)
})


app.get('/lana', (req, res) => {
    res.send(Lana_relationships)
})
    .post('/lana', (req, res) => {
        // Handle POST request logic here
        res.send('POST request for /lana');
    });
