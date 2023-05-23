const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser");
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })

    );app.use(express.json());

app.use(express.static('public'));



app.get('/', (req, res) => {
  res.sendFile(__dirname +'/index.html')

})

app.post('/adduser', async (req, res) => {
    data = req.body;

res.send(data);
  const post = await prisma.hamada.create({
  data
    })

//  res.json(post);
})
app.listen(port, () => console.info(`A;; listening on port ${port}`))