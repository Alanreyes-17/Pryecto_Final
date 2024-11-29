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

const PerdidaDePesoScreen = () => {
    const [selectedRoutine, setSelectedRoutine] = useState(null);

    const weightLossRoutines = [
        {
            id: 1,
            name: 'Rutina de Cardio Intensivo',
            duration: '30-45 minutos',
            difficulty: 'Moderado',
            exercises: [
                {
                    name: 'Correr',
                    description: 'Correr a un ritmo constante para quemar calorías.',
                    image: require('../assets/correr.jpg'),
                    duration: '30 minutos'
                },
                {
                    name: 'Saltar la cuerda',
                    description: 'Ejercicio cardiovascular que quema muchas calorías.',
                    image: require('../assets/CUERDA.webp'),
                    duration: '15 minutos'
                }
            ],
            image: require('../assets/fondo.jpeg')
        },
        {
            id: 2,
            name: 'Entrenamiento de Intervalos',
            duration: '30 minutos',
            difficulty: 'Alto',
            exercises: [
                {
                    name: 'Burpees',
                    description: 'Ejercicio de cuerpo completo que quema muchas calorías.',
                    image: require('../assets/bur.jpeg'),
                    duration: '30 segundos'
                },
                {
                    name: 'Mountain Climbers',
                    description: 'Ejercicio que trabaja el abdomen y quema calorías.',
                    image: require('../assets/background.jpg'),
                    duration: '30 segundos'
                }
            ],
            image: require('../assets/fondo.jpeg')
        },
        {
            id: 3,
            name: 'Circuito de Fuerza y Cardio',
            duration: '45 minutos',
            difficulty: 'Alto',
            exercises: [
                {
                    name: 'Sentadillas con salto',
                    description: 'Ejercicio que combina fuerza y cardio.',
                    image: require('../assets/sentadilla con salto.jpg'),
                    duration: '3 series x 10 repeticiones'
                },
                {
                    name: 'Flexiones',
                    description: 'Ejercicio de fuerza para el tren superior.',
                    image: require('../assets/lagartija.webp'),
                    duration: '3 series x 10 repeticiones'
                }
            ],
            image: require('../assets/fondo.jpeg')
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
            <Text style={styles.title}>Rutinas para Pérdida de Peso</Text>
            <ScrollView>
                {weightLossRoutines.map((routine) => (
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

export default PerdidaDePesoScreen;