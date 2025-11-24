const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.listen(port, () => {
    console.log(`my server listening on port http://localhost:${port}`)
})

app.get('/bacheca', (req, res) => {
    const posts = [
        {
            title: 'La ricetta della nonna....',
            content: 'non é domenica senza il classico ciambellone di Benedetta',
            image: '/images/ciambellone.jpeg',
            tags: ['nonnaforever', 'fattoincasaconbenedetta']

        }
    ]



})