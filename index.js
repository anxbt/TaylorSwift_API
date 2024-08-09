const serverless = require('serverless-http')
const Taylor_relationships = require('./Talylor_Relationship_Data_');
const Lana_relationships = require('./Lana_Realtionship_Data')
require('dotenv').config();

const cors = require('cors')

const app = require('express')();

app.use(cors({
    origin: process.env.CORS_ORIGIN || "*"
}))

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
app.post('/lana', (req, res) => {
    // Handle POST request logic here
    res.send('POST request for /lana');
});

module.exports.handler = serverless(app)