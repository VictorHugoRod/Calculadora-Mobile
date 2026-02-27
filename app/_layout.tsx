import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [contador, setContador] = useState(0);

  function somarUm(){
    setContador(contador+1)
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>⌫</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>AC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoOperacao}>
          <Text style={styles.texto}>√</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoOperacao}>
          <Text style={styles.texto}>%</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoOperacao}>
          <Text style={styles.texto}>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoOperacao}>
          <Text style={styles.texto}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoOperacao}>
          <Text style={styles.texto}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>+/-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}>,</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoOperacao}>
          <Text style={styles.texto}>=</Text>
        </TouchableOpacity>
      </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'flex-end',
    padding: 10
  },

  linha: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 5
  },

  botao:{
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#333',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  botaoOperacao:{
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#ffa500',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  texto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  }
})