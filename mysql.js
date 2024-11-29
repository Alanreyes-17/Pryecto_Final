const mysql = require('mysql2');

const DatabaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root ',
  password: '12345',
  database: 'Proyecto'
});

DatabaseConnection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

const Query = (query, params) => {
  console.log(`Ejecutando consulta: ${query} con parámetros: ${JSON.stringify(params)}`);
  
  const Response = [
    { id: 1, email: 'test@example.com', password: 'password123' },
    { id: 2, email: 'user@example.com', password: 'password456' }
  ];
  
  return Response;
};

const results = Query('SELECT * FROM users WHERE email = ?', ['test@example.com']);
console.log('Resultados de la consulta:', results);

DatabaseConnection.end((err) => {
  if (err) {
    console.error('Error al cerrar la conexión:', err);
    return;
  }
  console.log('Conexión cerrada');
});