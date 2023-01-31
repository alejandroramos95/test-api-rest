require('dotenv').config()
const args = require('yargs/yargs')(process.argv.slice(2)).argv

function getInfoSystem(req, res) {
  res.send({
    Puerto: args.PORT,
    Argumentos: args,
    SistemaOperativo: process.platform,
    VersionNode: process.version,
    UsoDeMemoria: process.memoryUsage().rss,
    PathEjecucion: req.url,
    ProcessId: process.pid,
    CarpetaDelProyecto: process.cwd(),
    NumeroProcesadores: require('os').cpus().length,
  })
}

module.exports = { getInfoSystem }
