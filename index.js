const fs = require('fs');

function leerArchivo() {
  try {
    const contenido = fs.readFileSync('datos.txt', 'utf-8');
    console.log('Contenido del archivo:');
    console.log(contenido);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error("El archivo 'datos.txt' no existe");
    }
    throw error;
  }
}

function writeToFile(mensaje) {
  try {
    fs.writeFileSync('resultados.txt', mensaje);
    console.log(`Se ha escrito el mensaje en el archivo 'resultados.txt'`);
  } catch (error) {
    throw new Error(`Error al escribir en el archivo 'resultados.txt'`);
  }
}

leerArchivo();
writeToFile('Examen finalizado')
