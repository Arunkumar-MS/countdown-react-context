import express from 'express';
const app = express();
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.listen((process.env.PORT || 4000), (err) => {
    if (err) {
        console.error(err)
        return;
    }
    console.log(`Server is now running on localhost: ${process.env.PORT || 4000}`)
})

app.get('/', function (req, res) {
    res.render('dist/index.html');
});