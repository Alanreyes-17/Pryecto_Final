import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IntermedioScreen = () => {
    const [selectedRoutine, setSelectedRoutine] = useState(null);

    const advancedRoutines = [
        {
            id: 1,
            name: 'Entrenamiento de Fuerza Intermedio',
            duration: '45-60 minutos',
            difficulty: 'Intermedio',
            exercises: [
                {
                    name: 'Sentadillas',
                    description: 'Ejercicio para fortalecer las piernas y glúteos',
                    image: require('../assets/sentadilla2.webp'), // Imagen original
                    duration: '4 series x 8-10 repeticiones'
                },
                {
                    name: 'Press Militar',
                    description: 'Fortalecimiento de hombros y brazos',
                    image: require('../assets/press-militar.jpeg'), // Imagen original
                    duration: '4 series x 8-10 repeticiones'
                }
            ],
            image: require('../assets/gym3.jpg') // Imagen original
        },
        {
            id: 2,
            name: 'Circuito de Resistencia',
            duration: '30-45 minutos',
            difficulty: 'Intermedio',
            exercises: [
                {
                    name: 'Flexiones',
                    description: 'Ejercicio para fortalecer el pecho y tríceps',
                    image: require('../assets/lagartija.webp'), // Imagen original
                    duration: '3 series x 10-15 repeticiones'
                },
                {
                    name: 'Plancha',
                    description: 'Ejercicio para fortalecer el core',
                    image: require('../assets/plancha.webp'), // Imagen original
                    duration: '3 series x 30-60 segundos'
                }
            ],
            image: require('../assets/gym3.jpg') // Imagen original
        },
        {
            id: 3,
            name: 'Entrenamiento de HIIT Intermedio',
            duration: '20-30 minutos',
            difficulty: 'Intermedio',
            exercises: [
                {
                    name: 'Saltos de Tijera',
                    description: 'Ejercicio cardiovascular para aumentar la resistencia',
                    image: require('../assets/saltos-en-tijera.jpg'), // Imagen original
                    duration: '30 segundos'
                },
                {
                    name: 'Mountain Climbers',
                    description: 'Ejercicio para fortalecer el core y mejorar la resistencia',
                    image: require('../assets/escalada-de-montaña.webp'), // Imagen original
                    duration: '30 segundos'
                }
            ],
            image: require('../assets/gym3.jpg') // Imagen original
        }
    ];

    const openRoutineDetails = (routine) => {
        setSelectedRoutine(routine);
    };

    const closeRoutineDetails = () => {
        setSelectedRoutine(null);
    };

    const renderRoutineModal = () => {
        if (!selectedRoutine) return null;

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={!!selectedRoutine}
                onRequestClose={closeRoutineDetails}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={closeRoutineDetails}
                        >
                            <Icon name="close" size={24} color="#333" />
                        </TouchableOpacity>

                        <Image
                            source={selectedRoutine.image}
                            style={styles.routineImage}
                            resizeMode="cover"
                        />

                        <Text style={styles.routineName}>
                            {selectedRoutine.name}
                        </Text>

                        <View style={styles.routineDetailsContainer}>
                            <View style={styles.detailRow}>
                                <Icon name="time-outline" size={20} color="#666" />
                                <Text style={styles.detailText}>
                                    Duración: {selectedRoutine.duration}
                                </Text>
                            </View>

                            <View style={styles.detailRow}>
                                <Icon name="fitness-outline" size={20} color="#666" />
                                <Text style={styles.detailText}>
                                    Dificultad: {selectedRoutine.difficulty}
                                </Text>
                            </View>
                        </View>

                        <Text style={styles.routineDescription}>
                            Ejercicios de la rutina:
                        </Text>

                        <ScrollView horizontal style={styles.exercisesScrollView}>
                            {selectedRoutine.exercises.map((exercise, index) => (
                                <View key={index} style={styles.exerciseCard}>
                                    <Image
                                        source={exercise.image}
                                        style={styles.exerciseImage}
                                        resizeMode="cover"
                                    />
                                    <Text style={styles.exerciseName}>{exercise.name}</Text>
                                    <Text style={styles.exerciseDescription}>{exercise.description}</Text>
                                    <Text style={styles.exerciseDuration}>{exercise.duration}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rutinas Intermedio</Text>
            <ScrollView>
                {advancedRoutines.map((routine) => (
                    <TouchableOpacity
                        key={routine.id}
                        style={styles.routineCard}
                        onPress={() => openRoutineDetails(routine)}
                    >
                        <Image
                            source={routine.image}
                            style={styles.routineImageCard}
                            resizeMode="cover"
                        />
                        <Text style={styles.routineCardName}>{routine.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            {renderRoutineModal()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    routineCard: {
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
    },
    routineImageCard: {
        width: '100%',
        height: 200,
    },
    routineCardName: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    routineImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    routineName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    routineDetailsContainer: {
        marginVertical: 10,
        alignItems: 'flex-start',
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    detailText: {
        marginLeft: 5,
        fontSize: 16,
    },
    routineDescription: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    exercisesScrollView: {
        width: '100%',
        marginVertical: 10,
    },
    exerciseCard: {
        width: 150,
        marginRight: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
    },
    exerciseImage: {
        width: '100%',
        height: 100,
        borderRadius: 8,
    },
    exerciseName: {
        fontWeight: 'bold',
        marginTop: 5,
    },
    exerciseDescription: {
        fontSize: 12,
        textAlign: 'center',
    },
    exerciseDuration: {
        fontSize: 12,
        color: '#666',
    },
});
export default IntermedioScreen;