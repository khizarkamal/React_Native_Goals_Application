import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput({ addGoalHandler, showModal, modalHandler }) {
    const [goalInput, setGoalInput] = useState('');

    const goalInputHandler = (text) => {
        setGoalInput(text);
    };

    const addGoalItemHandler = () => {
        addGoalHandler(goalInput);
        setGoalInput('');
        modalHandler(false);
    }

    return (
        <Modal
            visible={showModal}
            animationType='slide'
        >
            <View style={styles.inputContainer}>
                <Image style={styles.imageStyles} source={require('../assets/goal.png')}></Image>
                <TextInput value={goalInput} onChangeText={goalInputHandler} style={styles.textInput} placeholder='Your Course Goal'></TextInput>
                <View style={styles.buttonWrapper}>
                    <Button color="#f31281" title='Cancel' onPress={() => modalHandler(false)}></Button>
                    <Button color="#b180f0" title='Add Goal' onPress={addGoalItemHandler}></Button>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: '#5e0acc',
    },
    textInput: {
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#e4d0ff',
        borderRadius: 6,
        backgroundColor: '#e4d0ff',
        padding: 16,
        color: '#120438',
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
    },
    imageStyles: {
        width: 100,
        height: 100,
        margin: 20
    }
})

export default GoalInput;