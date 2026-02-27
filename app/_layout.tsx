import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [valorConta, setValorConta] = useState("0");
  const [operacao, setOperacao] = useState("");

  function adicionaValor(valorParametro: string){
    
    if(valorConta === "0" && operacao === ""){
      setValorConta(valorParametro);
    }else{
      setValorConta(valorConta + valorParametro);
    }

  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.linhaOperacao}>
        <text style={styles.textoOperacao}>{valorConta}</text>
      </View>

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
        <TouchableOpacity style={styles.botao} onPress={() => adicionaValor("7")}> {/*usar função anonima na chamada por causa dos parâmetros*/}
          <Text style={styles.texto}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => adicionaValor("8")}>
          <Text style={styles.texto}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => adicionaValor("9")}>
          <Text style={styles.texto}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoOperacao}>
          <Text style={styles.texto}>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao} onPress={() => adicionaValor("4")}>
          <Text style={styles.texto}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => adicionaValor("5")}>
          <Text style={styles.texto}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => adicionaValor("6")}>
          <Text style={styles.texto}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoOperacao}>
          <Text style={styles.texto}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao} onPress={() => adicionaValor("1")}>
          <Text style={styles.texto}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => adicionaValor("2")}>
          <Text style={styles.texto}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => adicionaValor("3")}>
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

        <TouchableOpacity style={styles.botao} onPress={() => adicionaValor("0")}>
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

  linhaOperacao: {
    flexDirection: 'row-reverse',
    marginBottom: 10
  },

  botao: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#333',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  botaoOperacao: {
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
  },

  textoOperacao: {
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold'
  }
})