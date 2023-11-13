import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ProfileSelectionScreen() {
  const navigation = useNavigation();

  const handleProfileSelection = (profileType) => {
    // Voer hier acties uit op basis van de gemaakte keuze
    console.log(`Gekozen profiel: ${profileType}`);

    // Navigeer naar een andere pagina op basis van de keuze
    if (profileType === 'speler') {
      navigation.navigate('Spelerscreen');
    } else if (profileType === 'quizmaster') {
      // Voeg hier eventuele logica toe voor de quizmaster
    }
  };

  return (
    <View>
      <Text>Kies je profiel:</Text>
      <Button title="Speler" onPress={() => handleProfileSelection('speler')} />
      <Button title="Quizmaster" onPress={() => handleProfileSelection('quizmaster')} />
    </View>
  );
}

export default ProfileSelectionScreen;
