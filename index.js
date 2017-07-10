const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const port = 3000
const addresses = []
let id = 1;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/public', express.static(path.join(__dirname + '/client/public')));

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.get('/addresses', (req, res) => {
  res.json(addresses)
})

app.post('/addresses', (req, res) => {
  const errors = validate(res, req.body)
 
  if (errors.length) {
    return;
  }

  addresses.push(Object.assign({
    id,
    line2: '',
    county: ''
  }, req.body))
  id++;
  res.status(204).json()
})

app.delete('/addresses/:id', (req, res) => {
  const index = addressExists(res, req.params.id)
  if (index > -1) {
    addresses.splice(index, 1)
    res.status(204).json()
  }
})

app.put('/addresses/:id', (req,res) => {
  const index = addressExists(res, req.params.id)
  if (index > -1) {
    const errors = validate(res, req.body)

    if (errors.length) {
      return;
    }
    addresses[index] = Object.assign(addresses[index], req.body)
    res.status(204).json()
  }
})

app.use((req, res, next) => {
  res.status(404).json({error: 'Not found!'})
})

app.listen(port, () => {
  console.log('Server listening on http://localhost:3000!')
})

function addressExists(res, id) {
  const index = addresses.findIndex( a => a.id == id)
  if (index === -1) {
    res.status(404).json({error: `Id doesn't exist`})
    return false
  }

  return index
}

function validate(res, body) {
  const errors = []
  if (!body.title) {
    errors.push({
      field: 'title',
      message: 'Title is required'
    })
  }

  if (!body.name) {
    errors.push({
      field: 'name',
      message: 'Name is required'
    })
  }

  if (!body.line1) {
    errors.push({
      field: 'line1',
      message: 'Address Line 1 is required'
    })
  }

  if (!body.town) {
    errors.push({
      field: 'town',
      message: 'Town/City is required'
    })
  }

  if (!body.postcode) {
    errors.push({
      field: 'postcode',
      message: 'Postcode is required'
    })
  }

  if (!body.phone) {
    errors.push({
      field: 'phone',
      message: 'Phone Number is required'
    })
  }

  if (errors.length) {
    res.status(422).json(errors)
  }

  return errors;
}
