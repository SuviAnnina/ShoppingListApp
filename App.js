import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = () => {
    setItems([...items, item]);
    setItem("");
  }

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.textInput}
        value={item}
        onChangeText={text => setItem(text)}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Add"
          onPress={() => { handleChange() }}
        />
        <Button
          title="Clear list"
          onPress={() => { setItems([""]) }}
        />

      </View>

      <View style={styles.shoppinglist}>
        <Text style={{ color: '#9e3a08', fontSize: 20 }}>Shopping list</Text>
        <FlatList
          data={items}
          renderItem={({ item }) =>
            <View style={styles.shoppingListItem}>
              <Text>{item}</Text>
            </View>}
        />
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 150,
  },

  textInput: {
    borderColor: 'black',
    borderWidth: 2,
    width: 250,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  shoppinglist: {
    flex: 15,
    width: 330,
    alignItems: 'center',
    backgroundColor: '#f7c5c1',
  },

  shoppingListItem: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
