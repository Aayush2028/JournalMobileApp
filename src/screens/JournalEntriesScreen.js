import { View, Text, FlatList, Button, TouchableHighlight, TextInput, ScrollView, Modal } from "react-native";
import styles from "./Style";
import useJournalService from "../services/JournalService";
import { useEffect, useState } from "react";

const JournalEntriesScreen = (props) => {
    const jwtToken = props.route.params.jwt;
    const { entries, addEntry, deleteById } = useJournalService(jwtToken);

    const [journalEntries, setJournalEntries] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [sentiment, setSentiment] = useState("");
    const [modalState, setModalState] = useState(false);

    useEffect(() => {
        setJournalEntries(entries);
    }, [entries]);

    const handleEntryAddition = async () => {
        setModalState(false);
        const addedEntry = await addEntry({ title, content, sentiment });
        if (addedEntry) {
            setJournalEntries([...journalEntries, addedEntry]);
        }
        setTitle("");
        setContent("");
        setSentiment("");
    };

    const handleEntryDeletion = async (id) => {
        await deleteById(id);
        setJournalEntries(journalEntries.filter((entry) => entry.id !== id));
    };

    return (
      <ScrollView>
        {journalEntries?.length > 0 ? (
          <FlatList 
            keyExtractor={(_, index) => index.toString()}
            data={journalEntries}
            renderItem={({ item, index }) => (
              <View style={{alignItems: 'center'}}>
                <View style={{ width: '90%', borderWidth: 2, borderColor: 'black', marginBottom: 10, borderRadius: 5 }}>
                  <Text style={styles.journalEntrySentiment}>
                    {index}: Journal Sentiment is {item.sentiment}
                  </Text>
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                      <View style={{ flex: 3, margin: 10, borderWidth: 2, borderLeftColor: 'black' }}>
                          <Text style={{textAlign: 'center'}}>Title: {item.title}</Text>
                          <Button title="Content" onPress={() => props.navigation.navigate('ContentScreen', { content: item.content })}/>
                      </View>
                      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-evenly' }}>
                          <TouchableHighlight>
                              <Text style={[styles.journalScreenButton, styles.primary]}>UPDATE</Text>
                          </TouchableHighlight>
                          <TouchableHighlight onPress={() => handleEntryDeletion(item.id)}>
                              <Text style={[styles.journalScreenButton, styles.danger]}>DELETE</Text>
                          </TouchableHighlight>
                      </View>
                  </View>
                </View>
              </View>
            )}
          />
        ) : null}

        <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableHighlight style={styles.addEntryStyle} onPress={() => setModalState(true)}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Add Entry</Text>
            </TouchableHighlight>
        </View>

        <Modal transparent={true} visible={modalState} animationType="slide">
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', padding: 40, borderRadius: 20, shadowColor: 'black', elevation: 5 }}>
                <TextInput 
                    value={title}
                    style={styles.modalInput}
                    onChangeText={(text) => setTitle(text)}
                    placeholder="Enter Title"
                />
                <TextInput 
                    value={content}
                    style={styles.modalInput}
                    onChangeText={(text) => setContent(text)}
                    placeholder="Enter Content"
                />
                <TextInput 
                    value={sentiment}
                    style={styles.modalInput}
                    onChangeText={(text) => setSentiment(text)}
                    placeholder="Enter Sentiment"
                />
                <TouchableHighlight onPress={handleEntryAddition}>
                    <Text style={styles.primary}>Add Entry</Text>
                </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
};

export default JournalEntriesScreen;
