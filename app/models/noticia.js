function NoticiaDao(){
}

NoticiaDao.prototype.findAll = function(connection, callback) {
	console.log('\tModel noticia. Operação findAll');		
	connection.query(
		"SELECT noticia_id, titulo, DATE_FORMAT(data,'%d/%m/%Y') as data, conteudo FROM noticia", 
		callback
		);
}

NoticiaDao.prototype.findById = function(connection, noticia_id, callback) {
	console.log('\tModel noticia. Operação findById');		
	/* TODO
	Implementar a função findById
	*/
	connection.query(
		`SELECT noticia_id, titulo, DATE_FORMAT(data,'%d/%m/%Y') as data, conteudo FROM noticia WHERE noticia_id = ${noticia_id}`, callback

		)
}

NoticiaDao.prototype.add = function(connection, noticia, callback) {
	console.log('\tModel noticia. Operação add');			
	/* TODO
	Implementar a função add
	*/
}

NoticiaDao.prototype.edit = function(connection, noticia, callback) {
	console.log('\tModel noticia. Operação edit');			
	/* TODO
	Implementar a função edit
	*/
}

NoticiaDao.prototype.delete = function(connection, noticia, callback) {
	console.log('\tModel noticia. Operação delete');			
	/* TODO
	Implementar a função delete
	*/
}

module.exports.noticiaDao = new NoticiaDao()