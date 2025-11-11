import { useState } from "react";
import { Keyboard, View } from "react-native";

export default function ViaCep() {
    // CEP
    // ENDERECO
    // CARREGAR
    // ERRO
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState(null);
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");

    const buscarCep = async () => {
        Keyboard.dismiss(); // => Fecha o teclado quando inicia a busca.

        setEndereco(null);
        setLoading(false);
        setErro("");

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            
            if(data.erro) {
                setErro("CEP não encontrado ou inválido!");
            } else {
                setEndereco(data);
            }
        } catch(error) {
            setErro("Falha ao buscar. Verifique sua conexão.")
        }
    }
    return(
        <View></View>
    )
}