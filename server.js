import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import {
  getAllPokemon,
  getPokemonById,

  saveNewPokemon,
  deletePokemon,
} from './controllers/Pokemons'
import { getAllTypes, getTypeById } from './controllers/Types'
import { getAllForms, getFormById } from './controllers/Forms'

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/api', (request, response) => response.status(200).render('index'))

app.get('/api/pokemon', getAllPokemon)
app.post('/api/pokemon', bodyParser.json(), saveNewPokemon)
app.get('/api/pokemon/:name', getPokemonById)
app.delete('/api/pokemon/:name', deletePokemon)

app.get('/api/types', getAllTypes)
app.get('/api/types/:name', getTypeById)

app.get('/api/forms', getAllForms)
app.get('/api/forms/:name', getFormById)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1447, () => {
  console.log('Listening on 1447...')// eslint-disable-line no-console
})
