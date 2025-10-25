import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {
  return (
    <View>
      <Text>
        Otimize sua produtividade,
        mergulhe no que importa
      </Text>
      <Link href={{pathname: '/pomodoro'}}>
        Quero iniciar!
      </Link>
    </View>
)}