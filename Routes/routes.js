module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('index')
    })

    app.get('/memes', (req, res) => {
        res.render('memes')
    })

    app.get('/videomemes', (req, res) => {
        res.render('videomemes')
    })

    app.get('/acerca', (req, res) => {
        res.render('acerca')
    })

    app.get('/reportar', (req, res) => {
        res.render('reportar')
    })
}