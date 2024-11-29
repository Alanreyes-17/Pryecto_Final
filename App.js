import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ResetasScreen from './screens/ResetasScreen';
import HomeScreen from './screens/HomeScreen';
import PrincipianteScreen from './screens/PrincipianteScreen';
import AvanzadoScreen from './screens/AvanzadoScreen';
import IntermedioScreen from './screens/IntermedioScreen';
import PP from './screens/PP';
import GM from './screens/GM';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(express.json());

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

app.get('/users', (req, res) => {
  const Response = [
    { id: 1, email: 'test@example.com', password: 'password123' },
    { id: 2, email: 'user@example.com', password: 'password456' }
  ];
  
  res.json(Response);
});

app.post('/users', (req, res) => {
  const { email, password } = req.body;

  const newUser  = {
    id: Math.floor(Math.random() * 1000),
    email,
    password
  };

  console.log('Nuevo usuario agregado:', newUser );
  
  res.status(201).json(newUser ); 
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

process.on('SIGINT', () => {
  DatabaseConnection.end((err) => {
    if (err) {
      console.error('Error al cerrar la conexión:', err);
      return;
    }
    console.log('Conexión cerrada');
    process.exit(0);
  });
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Inicio de Sesión' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Registro' }}
        />
        <Stack.Screen
          name="Gallery"
          component={ResetasScreen}
          options={{ title: 'Galería de Recetas' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen
          name="Principiante"
          component={PrincipianteScreen}
          options={{ title: 'principiante' }}
        />
        <Stack.Screen
          name="Intermedio"
          component={IntermedioScreen}
          options={{ title: 'Intermedio' }}
        />
        <Stack.Screen
          name="Avanzado"
          component={AvanzadoScreen}
          options={{ title: 'Avanzado' }}
        />
        <Stack.Screen
          name="Perdida de Peso"
          component={PP}
          options={{ title: 'Perdida de peso' }}
        />
        <Stack.Screen
          name="Ganancia muscular"
          component={GM}
          options={{ title: 'Ganancia muscular' }}
        />
        <Stack.Screen
          name="perfil"
          component={ProfileScreen}
          options={{ title: 'Perfil' }}
        />
        <Stack.Screen
        name="editar"
        component={EditProfileScreen} 
        options={{ title: 'Editar perfil' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
