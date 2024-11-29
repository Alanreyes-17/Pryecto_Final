import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    Dimensions,
    TouchableOpacity // Importar TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
    const routines = [
        {
            id: 1,
            name: 'Principiantes',
            description: 'Rutina ideal para iniciar',
            screen: 'PrincipianteScreen'
        },
        {
            id: 2,
            name: 'Intermedios',
            description: 'Nivel medio de entrenamiento',
            screen: 'IntermedioScreen'
        },
        {
            id: 3,
            name: 'Avanzados',
            description: 'Rutina de alto rendimiento',
            screen: 'AvanzadoScreen'
        },
        {
            id: 4,
            name: 'Pérdida de Peso',
            description: 'Enfocado en quemar calorías',
            screen: 'PPScreen'
        },
        {
            id: 5,
            name: 'Ganancia Muscular',
            description: 'Rutina para desarrollo muscular',
            screen: 'GMScreen'
        },
        {
            id: 6,
            name: 'Recetas',
            description: 'Ve nuestras recetas favoritas',
            screen: 'ResetasScreen'
        }
    ];

    const handleRoutineSelection = (routine) => {
        navigation.navigate(routine.screen);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* Imagen de fondo */}
                <ImageBackground
                    source={require('../assets/background.jpg')} // Reemplaza con tu imagen
                    style={styles.headerImage}
                    resizeMode="cover"
                >
                    <View style={styles.headerOverlay}>
                        <Text style={styles.headerTitle}>Fitness Trainer</Text>
                        <Text style={styles.headerSubtitle}>Encuentra tu rutina perfecta</Text>
                    </View>
                </ImageBackground>

                {/* Contenedor de rutinas */}
                <View style={styles.routinesContainer}>
                    <Text style={styles.sectionTitle}>Selecciona tu Rutina</Text>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Principiante')}>
                        <Text style={styles.buttonText}>Principiante  </Text>
                        <Text style={styles.buttonText1}>Rutina ideal para iniciar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Intermedio')}>
                        <Text style={styles.buttonText}>Intermedio</Text>
                        <Text style={styles.buttonText1}>Nivel medio de entrenamiento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Avanzado')}>
                        <Text style={styles.buttonText}>Avanzado</Text>
                        <Text style={styles.buttonText1}>Rutina de alto rendimiento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perdida de Peso')}>
                        <Text style={styles.buttonText}>Perdida de Peso</Text>
                        <Text style={styles.buttonText1}>Enfocado en quemar calorías</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ganancia muscular')}>
                        <Text style={styles.buttonText}>Ganancia muscular</Text>
                        <Text style={styles.buttonText1}>Rutina para desarrollo muscular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gallery')}>
                        <Text style={styles.buttonText}>Recetas</Text>
                        <Text style={styles.buttonText1}>Ve nuestras recetas favoritas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('perfil')}>
                        <Text style={styles.buttonText}>Perfil</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    scrollContainer: {
        flexGrow: 1,
    },
    headerImage: {
        width: width,
        height: height * 0.3,
        justifyContent: 'flex-end',
    },
    headerOverlay: {
        paddingVertical: 90,
        paddingHorizontal: 20,
    },
    headerTitle: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    headerSubtitle: {
        color: 'white',
        fontSize: 18,
    },
    routinesContainer: {
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 20,
        paddingHorizontal: 20,
        marginTop: -25,
        minHeight: height * 0.7,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    routineButton: {
        marginBottom: 15,
        padding: 15, // Aumentar el padding para un botón más grande
        backgroundColor: '#007BFF', // Color de fondo del botón
        borderRadius: 5, // Bordes redondeados
        alignItems: 'center', // Centrar el contenido
    },
    routineLink: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white', // Color del texto del enlace
    },
    button: {
        marginBottom: 15,
        padding: 15,
        backgroundColor: '#ffffff', // Fondo blanco
        borderColor: '#000000', // Borde negro
        borderWidth: 1, // Grosor del borde
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 19,
        fontWeight: '700',
        color: '#000000',
    },
    buttonText1: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
    },
});

export default HomeScreen;