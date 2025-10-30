import { Image, Text, View, StyleSheet } from "react-native";
import { FokusButton } from "../components/FokusButton";


export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />
      <View>

        <Text>
          Otimize sua produtividade,{'\n'}
          mergulhe no que importa
        </Text>
        <Image source={require('../assets/images/tela_inicial.png')} />
        <FokusButton title={'Quero iniciar!'} />

      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Aluno.
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  footer: {
    width: '80%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  }
})