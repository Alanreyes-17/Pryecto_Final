import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';

const ProfileScreen = ({ navigation }) => {
    const user = {
        name: 'Alan Reyes',
        email: 'juan.perez@example.com',
        profileImage: require('../assets/fondo.jpeg'), // Reemplaza con tu imagen
    };

    const handleEditProfile = () => {
        // Lógica para editar el perfil
        console.log('Editar perfil');
    };

    const handleGoToLogin = () => {
        navigation.navigate('Login'); 
    };

    const handleGoToEdit = () => {
        navigation.navigate('editar'); 
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Perfil</Text>
            </View>
            <View style={styles.profileContainer}>
                <Image source={user.profileImage} style={styles.profileImage} />
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userEmail}>{user.email}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleGoToEdit}>
                <Text style={styles.buttonText}>Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleGoToLogin} style={styles.button}>
                <Text style={styles.buttonText}>Cerrar sesion</Text>
            </TouchableOpacity>

            <Text ></Text>
            <Text ></Text>
            <Text >En proceso ...</Text>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    userName: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000',
    },
    userEmail: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '500',
    },
    link: {
        marginVertical: 10,
        alignItems: 'center',
    },
    linkText: {
        color: '#007BFF', // Color azul para el enlace
        fontSize: 18,
        textDecorationLine: 'underline', // Subrayar el texto para parecer un enlace
    },
});

export default ProfileScreen;