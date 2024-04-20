var pool = require('./bd');

async function getNovedades() {
    var query = "select * from novedades"
    var rows = await pool.query(query);
    return rows;
}

// funcion para agregar novedades a la lista

async function insetNovedad(obj) {
    try {
        var query = "insert into novedades set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }//cierro Catch
}//cierro insert


//funcion para eliminar novedades de la lista
async function deleteNovedadesById(id){
    var query = "delete from novedades where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows;
}


/*para traer una sola novedad por el id*/
async function getNovedadById(id) {
    var query = 'select * from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows [0];
}

/*Para modificar el UPDATE de las novedades*/
async function modificarNovedadById(obj, id) {
    try {
        var query = 'update novedades set ? where id = ?';
        rows = await pool.query(query, [obj,id]);
        return rows;
    } catch (error) {
        throw error;
    }
}


module.exports = {getNovedades, insetNovedad, deleteNovedadesById, getNovedadById, modificarNovedadById}