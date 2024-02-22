import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cabecalho = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Cabeçalho</Text>
      </View>
      <View style={styles.navigation}>
        <Text>Home</Text>
        <Text>Projetos</Text>
        <Text>Sobre</Text>
        <Text>Blog</Text>
        <Text>Contato</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 20,
    flexDirection: 'column', // Alterado de 'row' para 'column'
    justifyContent: 'flex-start', // Alterado de 'space-between' para 'flex-start'
    alignItems: 'flex-start', // Alterado de 'space-between' para 'flex-start'
    position: 'absolute',
    alignItems: 'center',
    top: 10,
    left: 0,
    right: 0,
  },
  
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  
  navigation: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 30,
  },
});

export default Cabecalho;
