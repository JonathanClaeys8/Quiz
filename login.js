import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Voer hier je inloglogica uit (bijv. verificatie van gebruikersnaam en wachtwoord)
    };
  
    return (
        
      <View>
        <Text>Quizz - test</Text>
        <TextInput
          placeholder="Userame"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
  }
  
  export default LoginScreen;