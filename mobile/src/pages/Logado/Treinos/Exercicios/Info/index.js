import React, { setState } from 'react';
import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	Image,
} from 'react-native';
import Video from 'react-native-video';

import styles from './styles';

export default function Informacoes({ navigation, route }) {

	const [dados, setDados] = React.useState(route.params.exercicio)

	// const dados1 =
	// {
	// 	id: '1',
	// 	nome_exercicio: 'Flexão',
	// 	descricao_exercicio:
	// 		'Coloque-se na posição padrão de flexão, com as mãos levemente mais afastadas que a largura dos ombros e os braços totalmente estendidos. Peça para outra pessoa colocar a anilha sobre as suas costas.',
	// 	qtd_series: '3',
	// 	qtd_repeticoes: '12',
	// }

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerTotal}>
				<View style={styles.headerFaixa}>
					<View style={styles.faixa}>
						<Text style={styles.textoFaixa}>{dados.nome_exercicio}</Text>
						{/* <Text style={styles.textoFaixa}>{dados1.nome_exercicio}</Text> */}
					</View>
				</View>
				<View style={styles.headerInicio}>
					<View style={styles.inicio}>
						<Image style={styles.video}
							source={{uri: dados.video}}
						// source={{uri: {dados.}}}
						/>

						{/* <Text>Video deve estar acima de mim</Text> */}

					</View>

				</View>
				<View style={styles.faixaDetalhes}>
					<Text style={styles.textoFaixaDetalhes}>Detalhes</Text>
				</View>
			</View>

			<ScrollView showsVerticalScrollIndicator={true} style={styles.scrollView}>

				<View style={styles.campoInfoExercicio}>
					{/* <Text style={styles.textoInfoTitulo}>Nome</Text>
          <Text style={styles.textoInfoDesc}>Supino Reto</Text> */}

					<Text style={styles.textoInfoTitulo}>Descrição</Text>
					<Text style={styles.textoInfoDescAbaixo}>
						{/* Pode ser executado deitado, flexionando as pernas e deixando-as 
					alinhadas ao quadril. Após se posicionar, basta erguer o tronco 
					com a força dos músculos do abdômen, nunca chegando tão próximo de 
					encostar os peitos aos joelhos.  */}
						{dados.descricao_exercicio}
					</Text>

					<Text style={styles.textoInfoTitulo}>
						Quantidade de Séries:
            <Text style={styles.textoInfoDescLado}> {dados.qtd_series}</Text>
					</Text>

					<Text style={styles.textoInfoTitulo}>
						Quantidade de Repetições:
            <Text style={styles.textoInfoDescLado}> {dados.qtd_repeticoes}</Text>
					</Text>
					<Text style={styles.textoInfoTitulo}>
						Carga:
            <Text style={styles.textoInfoDescLado}> {dados.qtd_carga}</Text>
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
