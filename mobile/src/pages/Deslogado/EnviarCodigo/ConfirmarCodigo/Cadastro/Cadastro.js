// import React, {useState} from 'react';
// import {
//   View,
//   SafeAreaView,
//   Image,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';

// import { Col, Row, Grid } from 'react-native-easy-grid';
// import { Container, Content, H1, H2, H3, ListItem, List, Left, Right, Radio, getTheme, StyleProvider, Icon, Form, Item, Input, Label, Button, Text } from 'native-base';

// import material from '../../../../../../native-base-theme/variables/materialDark'

// import {RadioButton} from 'react-native-paper';
// import TextInputMask from 'react-native-text-input-mask';
// import {Picker} from '@react-native-community/picker';

// import styles from './styles';

// export default function CadastrarInformacoes({navigation, route}) {
//   const [value, setValue] = React.useState('Definir'); //GENERO
//   const [selectedValue, setSelectedValue] = useState(''); //META
//   //const [email, onChangeEmail] = React.useState(route.params.email);
//   //const [senha, onChangeSenha] = React.useState(route.params.senha);
//   const [name, setName] = React.useState('');

//   async function handleCompleteRegister(e) {
//     e.preventDefault();

//     //CRIAR OUTRA FUNÇÃO NÃO-ASYNC PARA VERIFICAR CAMPOS INVES DE POR AQUI
//     if (name === '') {
//       return alert('Você esqueceu de por seu nome');
//     }

//     fetch('http://10.0.2.2:3333/api/completeRegister', {
//       method: 'post',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: email,
//         password: senha,
//         name: name,
//         meta: selectedValue,
//       }),
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         if ('error' in response) {
//           alert(response.error);
//         } else {
//           console.log(response);
//           navigation.navigate('ContaCriada');
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         navigation.navigate('ContaCriada');
//       });
//   }

//   return (
//     <StyleProvider style={getTheme(material)}>
//       <Container style={{padding: 20}}>
//       <Content>
//         <Image
//         style={{ width: 125, height: 125, margin: 20, alignSelf: "center", tintColor: "#ffe42e"}}
//         source={require('../../../../../assets/perfil.png')}
//         />

//         <H1 style={{alignSelf: "center", color: "#fafafa", textTransform: "uppercase"}}>Completar Perfil</H1>


//           <View style={{backgroundColor: "#fafafa",
//                         borderWidth: 1,
//                         borderRadius: 18, 
//                         paddingHorizontal: 20,
//                         paddingVertical: 24,
//                         marginVertical: 15}}>

//             <Item floatingLabel>
//               <Label>Nome</Label>
//               <Input ></Input>
//             </Item>
//             <Item floatingLabel>
//               <Label>Sobrenome</Label>
//               <Input ></Input>
//             </Item>

//             <Text style={{color: "#575757", marginTop: 15}}>Sexo</Text>
//             <ListItem style={{borderColor: "#fafafa", alignSelf: "center", marginTop: -10}}>
//                 <Text>Masculino   </Text>
//                 <Radio color={"#212121"} />
//                 <Text>  Feminino   </Text>
//                 <Radio color={"#212121"} selected={true}/>
//             </ListItem>



//             <Grid>
//               <Col size={4}>
//                 <Item floatingLabel>
//                   <Label>Altura</Label>
//                   <Input ></Input>
//                 </Item>
//               </Col>
//               <Col size={1}></Col>
//               <Col size={4}>
//                 <Item floatingLabel>
//                   <Label>Peso</Label>
//                   <Input ></Input>
//                 </Item>
//               </Col>
//             </Grid>

//           </View>
//           <Item style={{borderColor: "#212121"}}>
//             <Left>
//               <Button transparent><Text style={{color: "#fafafa"}}>Voltar</Text></Button>
//             </Left>
//             <Right>
//               <Button primary><Text style={{color: "#212121"}}>Confirmar</Text></Button>
//             </Right>
//           </Item>
//         </Content>

//       </Container>

//     </StyleProvider>
//   );
// }

import React, { useState } from 'react';
import {
	View,
	SafeAreaView,
	Image,
	Text,
	TextInput,
	ScrollView,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';

import { RadioButton } from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import { Picker } from '@react-native-community/picker';

import styles from './styles';

export default function CadastrarInformacoes({ navigation, route }) {
	// export default function CadastrarInformacoes({ navigation }) {
	const [value, setValue] = React.useState('Definir'); //GENERO
	const [selectedValue, setSelectedValue] = useState(''); //META
	const [email, onChangeEmail] = React.useState(route.params.email);
	const [senha, onChangeSenha] = React.useState(route.params.senha);
	const [name, setName] = React.useState('');

	async function handleCompleteRegister(e) {
		e.preventDefault();

		//CRIAR OUTRA FUNÇÃO NÃO-ASYNC PARA VERIFICAR CAMPOS INVES DE POR AQUI
		if (name === '') {
			return alert('Você esqueceu de por seu nome');
		}

		fetch('http://10.0.2.2:3333/api/completeRegister', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: senha,
				name: name,
				meta: selectedValue,
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				if ('error' in response) {
					alert(response.error);
				} else {
					console.log(response);
					navigation.navigate('ContaCriada');
				}
			})
			.catch((err) => {
				console.log(err);
				navigation.navigate('ContaCriada');
			});
	}

	return (
		<KeyboardAvoidingView style={styles.container}>
			<View style={styles.header}>

				<Image
					style={{ width: 125, height: 125, marginBottom: 20, alignSelf: "center", tintColor: "#ffe42e" }}
					source={require('dir-src/assets/perfil.png')}
				/>

				<Text style={styles.textoImportante}>FINALIZAR CADASTRO</Text>
			</View>

			<View style={styles.forms}>
				<TextInput
					placeholder="Nome"
					style={styles.insertText}
					onChangeText={(text) => {
						setName(text);
					}}
					name={name}
				/>

				<TextInput placeholder="Sobrenome" style={styles.insertText} />

				<View style={styles.campoSexo}>
					<Text style={styles.textoImportante}>Sexo</Text>

					<RadioButton.Group
						onValueChange={(value) => setValue(value)}
						value={value}>
						<View style={styles.radioButton}>
							<RadioButton value="Masc" />

							<Text style={styles.textoRB}>Masculino</Text>
						</View>
						<View style={styles.radioButton}>
							<RadioButton value="Fem" />

							<Text style={styles.textoRB}>Feminino</Text>
						</View>
					</RadioButton.Group>
				</View>

				<View style={styles.campoDuplo}>
					<TextInputMask
						mask={'[000]'}
						placeholder="Altura (cm)"
						keyboardType={'number-pad'}
						style={styles.insertValuePequeno}
					/>
					<TextInputMask
						mask={'[990],[000]'}
						placeholder="Peso (kg)"
						keyboardType={'decimal-pad'}
						style={styles.insertValuePequeno}
					/>
				</View>

				<View style={styles.campoDuplo}>
					<TextInputMask
						mask={'[00]/[00]/[0000]'}
						placeholder="Data de Nasc."
						keyboardType={'number-pad'}
						style={styles.insertValuePequeno}
					/>

					<View style={styles.campoPicker}>
						<Picker
							selectedValue={selectedValue}
							style={styles.picker}
							onValueChange={(itemValue, itemIndex) =>
								setSelectedValue(itemValue)
							}>
							<Picker.name label="Meta" />
							<Picker.Item label="Definir" value="Definir" />
							<Picker.Item label="Emagrecer" value="Emagrecer" />
							<Picker.Item label="Crescer" value="Crescer" />
						</Picker>
						{/* {DownArrow} */}
					</View>
				</View>
			</View>

			<View style={styles.footer}>
				<TouchableOpacity
					style={styles.fatButton}
					onPress={handleCompleteRegister}>
					<Text style={styles.textoFatButton}>FINALIZAR CADASTRO</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.pop()}>
					<Text style={styles.link}>Voltar</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}