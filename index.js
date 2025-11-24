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

        },
        {
            title: 'I cracker di ciccioGamer89',
            content: 'Dopo il ciambellone ci vuole un cracker alla barbabietole fatto da ciccio',
            image: '/images/cracker_barbabietola.jpeg',
            tags: ['ématematico', 'fattoincasaconciccio', 'barbershopciccio']
        },
        {
            title: 'E che fai te ne privi?',
            content: 'il primo che fai non lo mangi?',
            image: '/images/pasta_barbabietola.jpeg',
            tags: ['ématematico', 'lhamburgeriadiciccio', 'echefaitteneprivi']
        },
        {
            title: 'finalmente un po di dolce',
            content: 'Una fetta di pane a testa siamo 3 quindi 6 fette di pane fritto',
            image: '/images/pane_fritto_dolce.jpeg',
            tags: ['ématematico', 'pane', 'zucchero']
        },
        {
            title: 'La festa di piazze',
            content: 'Na bella torta paesana',
            image: '/images/torta_paesana.jpeg',
            tags: ['festadipiazza', 'festadipaese', 'buonasera']
        },
    ];
    res.type('json').send(posts)


})