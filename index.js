const express = require('express');
const cors = require('cors')
const log = require('pino')();
const app = express();
//app.use(cors())
app.use(express.urlencoded())

const port = 8080;

let books = [{id: 0, title: "HK"},{id: 1, title: "TW"}]
const bookRestPath = "books"

let nextBookId = books.length;

app.get("/" + bookRestPath, (req, res) => { log.info(req); res.json(books)} )

app.get("/" + bookRestPath + "/:id", (req, res) => { 
    log.info(req);
    log.info(req.body);
    log.info(req.params);
    book = books.find((book) => book.id == req.params.id)
    res.status(200).send(book)
 } )

app.post("/" + bookRestPath, (req, res) => { 
    log.info(req);
    log.info(req.body);
    books = books.concat({id: nextBookId, title: req.body.title})
    res.status(201).send({id: nextBookId})
    nextBookId +=1;
 } )

 app.delete("/" + bookRestPath + "/:id", (req, res) => { 
    log.info(req);
    log.info(req.body);
    log.info(req.params);
    books = books.filter((book) => book.id != req.params.id)
    res.status(200).send({id: req.params.id})
 } )

 app.get("/greetings", (req, res, next) => {
    let now = new Date();
    console.log(`${now} ${req.method} ${req.path}`);
    res.type('application/json')
    res.json([{greeting:"Hello Beautiful World!!!!" + now.toString()}]);
    }
    )

app.listen(port, () => {
console.log(`Server started at port ${port}`)
})

