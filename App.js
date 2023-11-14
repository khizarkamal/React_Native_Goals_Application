import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)



  const addGoalHandler = (goalInput) => {
    if (!goalInput) {
      return
    }
    setGoalList((prevState) => [...prevState, { text: goalInput, id: Date.now() }]);
  }

  const removeGoal = (id) => {
    const updatedGoalList = goalList.filter((goal) => {
      return goal.id !== id;
    });
    setGoalList(updatedGoalList);
  }


  return (
    <>
      <StatusBar style='light'></StatusBar>
      <View style={styles.container}>
        <Button title="Add Goal" color="#a065ec" onPress={() => setModalVisible(true)}></Button>
        <GoalInput showModal={modalVisible} modalHandler={setModalVisible} addGoalHandler={addGoalHandler}></GoalInput>
        <View style={styles.goalsContainer}>
          {goalList.length > 0 ? <FlatList
            data={goalList}
            renderItem={(goalItem) => {
              return <GoalItem deleteGoal={removeGoal} goalText={goalItem.item.text} id={goalItem.item.id}></GoalItem>
            }}
          >
          </FlatList> : <Text style={styles.emptyGoalListText}>No Goal Added Yet. Press to Add Goal</Text>}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
    height: '100%',
  },
  goalsContainer: {
    flex: 5,
    marginTop: 16
  },
  emptyGoalListText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  }
});

