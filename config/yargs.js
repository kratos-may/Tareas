
const opt= {
 descripcion: {
        demand:true,
        alias: 'd',
        desc: " descripcion de la tarea obligatoria"
    }
}
const argv = require("yargs")
    .command('crear',"Crear un elemento por hacer",opt)
    .command('actualizar',"Actualizar el estado de una tarea",{
        descripcion: {
            demand:true,
            alias: 'd',
            desc: " descripcion de la tarea obligatoria"
        },
        completado:{
            desc:"marca como completado o pendiente la tarea",
            alias:'c',
            default: true
        }
    })
    .command('borrar', "Borrar una tarea",opt)
    .help()
    .argv;
module.exports={
    argv
}