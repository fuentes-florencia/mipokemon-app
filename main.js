const fetch = require('node-fetch');
const prompt = require('prompt-sync')();

const nombre = prompt('Escribí el nombre del Pokémon: ').toLowerCase();
const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

fetch(url)
  .then(respuesta => {
    if (!respuesta.ok) {
      console.log('❌ No se encontró el Pokémon. Revisá el nombre.');
      return;
    }
    return respuesta.json();
  })
  .then(datos => {
    if (!datos) return;

    console.log('✅ Resultado:');
    console.log('Nombre:', datos.name);
    console.log('Altura:', datos.height);
    console.log('Tipo(s):', datos.types.map(t => t.type.name).join(', '));
  })
  .catch(error => {
    console.log('⚠️ Ocurrió un error al buscar el Pokémon.');
  });