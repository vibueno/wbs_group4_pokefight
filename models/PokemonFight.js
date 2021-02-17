const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonFightSchema = new Schema({
  date: { type: Date, default: Date.now() },
  pokemon1: { type: mongoose.Types.ObjectId, ref: 'Pokemon', required: true },
  pokemon2: { type: mongoose.Types.ObjectId, ref: 'Pokemon', required: true },
  winner: { type: mongoose.Types.ObjectId, ref: 'Pokemon', required: true },
});

module.exports = mongoose.model('PokemonFight', pokemonFightSchema);
