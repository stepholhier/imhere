import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native';

import { useState } from 'react';

import { Participant } from '../../components/Participant/main';


import { styles } from './styles'

export function Home() {

  const [participants, setParticipants] = useState(['Stebans'])


  function handleParticipantAdd(){

    if(participants.includes("Rodrigo")){
      return Alert.alert("Participante existe", "Já existe o participante na lista com este nome")
    }

    setParticipants(prevState => [...prevState, 'Ana']);
  }

  function handleParticipantRemove(name: string){

    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => Alert.alert("Participante deletado!")
      }
    ]);
  }

  return (
    <View style={styles.container}>
    
    <Text style={styles.eventName}>
      Nome do evento
    </Text>
    
    <Text style={styles.eventDate}>
      Terça, 11 de novembro de 2025
    </Text>


    <View style={styles.form}>
    <TextInput 
      style={styles.input} 
      placeholder="Nome do participante"
      placeholderTextColor="#6b6b6b"
    />

    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
      <Text style={styles.buttonText}>
        +
      </Text>
    </TouchableOpacity>
    </View>

    <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({ item }) =>  (
        <Participant 
        key={item}
        name={item}
        onRemove={() => handleParticipantRemove(item)} 
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença!
        </Text>
      )}
    />
    </View>
  );
}