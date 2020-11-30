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

export default function Alimento({ navigation, route }) {

   const [dados, setDados] = React.useState(route.params.alimento)

   const dados1 =
   {
      id: '1',
      nome_Alimento: 'Maçã',
      imagem: require('dir-src/assets/Maçã.png'),
      kcal_Alimento: '100',
      descricao_Alimento: 'A maçã é o pseudofruto pomáceo da macieira, árvore da família Rosaceae. É um dos pseudofrutos de árvore mais cultivados, e o mais conhecido dos muitos membros do género Malus que são usados ​​pelos seres humanos.',
      tipoAlimento: 'Fruta'
   }


   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.headerTotal}>
            <View style={styles.headerFaixa}>
               <View style={styles.faixa}>
                  <Text style={styles.textoFaixa}>{dados.nome_Alimento}</Text>
               </View>
            </View>
            <View style={styles.headerInicio}>
               <View style={styles.inicio}>
                  <Image style={styles.imagem} source={{ uri: dados.imagem }} />

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
               <Text style={styles.textoInfoDescAbaixo}>{dados.descricao_Alimento}


                  {/* {dados.descricao_exercicio} */}
               </Text>

               <Text style={styles.textoInfoTitulo}>
                  Calorias:
            <Text style={styles.textoInfoDescLado}> {dados.kcal_Alimento} kCal a cada 100g</Text>
               </Text>

               <Text style={styles.textoInfoTitulo}>
                  Tipo do Alimento:
            <Text style={styles.textoInfoDescLado}> {dados.tipoAlimento} </Text>
               </Text>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
}
