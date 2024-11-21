import { Image, StyleSheet, TextInput, View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const [data, setData] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleChange = (name: string, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Corrigindo o tipo do evento para GestureResponderEvent
  const handleSubmit = async (event: GestureResponderEvent) => {
    event.preventDefault();
    console.log(data);
    router.push('../BemVindo');  // Certifique-se de que o caminho esteja correto.
  };
  

  return (
    <View style={styles.container}>
      {/* Adicionando o círculo superior */}
      <View style={styles.circle}>
        <View style={styles.innerCircle} />
      </View>

      {/* Inputs e botão */}
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Usuário"
          value={data.email}
          onChangeText={(value) => handleChange('email', value)}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={data.password}
          onChangeText={(value) => handleChange('password', value)}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  innerCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  formContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: '100%',
    borderRadius: 24,
    backgroundColor: 'white',
    marginVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    height: 45,
    width: '50%',
    borderRadius: 24,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
