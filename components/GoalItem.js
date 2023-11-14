import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";


const GoalItem = ({ goalText, id, deleteGoal }) => {

    const deleteGoalHandler = () => {
        deleteGoal(id);
    }

    return (
        <Pressable onPress={deleteGoalHandler}>
            <View key={id} style={styles.goalItem}>
                <Text style={styles.goalText}>
                    {goalText}
                </Text>
            </View>
        </Pressable>)
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 16,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    goalText: {
        color: 'white'
    }
});

export default GoalItem;