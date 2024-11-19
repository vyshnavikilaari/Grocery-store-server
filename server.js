const express = require('express')
const cors = require('cors')
// const bcrypt = require('bcrypt');
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

const db = require('./config/db')
const Products = require('./routes/ProductRoute')
const Beautyandhygiene = require('./routes/BeautyandhygieneRoute')
const Cleaningandhousehold = require('./routes/CleaningandhouseholdRoute')
const Dairyproducts = require('./routes/DairyproductsRoute')
const Fruitsandveg = require('./routes/FruitsandvegRoute')
const Snacks = require('./routes/SnacksRoute')
const Users = require('./routes/UserRoute')
const Auth = require('./routes/AuthRoute')
app.get('/', (req, res) => res.status(200).json({ message: "Welcome" }))
app.use('/products', Products)
app.use('/beautyandhygiene', Beautyandhygiene)
app.use('/cleaningandhousehold', Cleaningandhousehold)
app.use('/dairyproducts', Dairyproducts)
app.use('/fruitsandveg', Fruitsandveg)
app.use('/snacks', Snacks)
app.use('/users', Users)
app.use('/auth', Auth)

app.listen(port, (() => console.log(`Listening on ${port}`)))








