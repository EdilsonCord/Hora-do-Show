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
	Alert,
	ScrollView,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';

import { RadioButton } from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import { Picker } from '@react-native-picker/picker';

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment"

import styles from './styles';
import colors from 'dir-src/assets/colors.js';

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSize = 18;

const calendario = <MCIcons name="calendar" size={iconSize} color={colors.red} />

export default function CadastrarInformacoes({ navigation, route }) {
	// export default function CadastrarInformacoes({ navigation }) {
	const [sexo, setSexo] = React.useState('Masculino'); //sexo kkkkkk
	const [meta, setMeta] = useState('Emagrecer'); //META
	const [email, onChangeEmail] = React.useState(route.params.email);
	const [senha, onChangeSenha] = React.useState(route.params.senha);
	const [name, setName] = React.useState('');
	const [surname, setSurname] = React.useState('');
	const [peso, setPeso] = React.useState('');
	const [altura, setAltura] = React.useState('');

	const [dtNasc, setDtNasc] = React.useState(parseInt(moment().format('L')));


	// DatePicker functions
	const [show, setShow] = useState(false);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || dtNasc;
		setShow(Platform.OS === 'ios');
		setDtNasc(currentDate);
	};

	const showDatepicker = () => {
		setShow(true);
		// showMode('date');
	};

	const CampoDtNasc = () => {
		var retorno;

		// if (dtNasc == Date())
		if (dtNasc == parseInt(moment().format('L')))
			retorno = 'Data de Nasc.';
		else
			retorno = moment(dtNasc).format("DD/MM/YYYY");
		// retorno = new Date(dtNasc).toLocaleDateString('pt-BR', options);

		return <View style={{ flexDirection: 'row', flexGrow: 1, justifyContent: 'space-between', alignItems: 'center' }}>
			<Text style={styles.insertDtNascText}>{retorno}</Text>
			<Text >{calendario}</Text>

		</View>

	}

	async function handleCompleteRegister(e) {
		e.preventDefault();

		//CRIAR OUTRA FUNÇÃO NÃO-ASYNC PARA VERIFICAR CAMPOS INVES DE POR AQUI
		if (name === '') {
			return Alert.alert('Aviso', 'Você esqueceu de por seu nome');
		} else if (surname === '') {
			return Alert.alert('Aviso', 'Você esqueceu de por seu sobrenome');
		} else if (altura === '') {
			return Alert.alert('Aviso', 'Você esqueceu de por seu altura');
		} else if (peso === '') {
			return Alert.alert('Aviso', 'Você esqueceu de por seu peso');
		} else if (dtNasc === '') {
			return Alert.alert('Aviso', 'Você esqueceu de por sua data de nascimento');
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
				surname: surname,
				sexo: sexo,
				peso: peso,
				altura: altura,
				dtNasc: moment(dtNasc).format("DD/MM/YYYY"),
				meta: meta,
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				if ('error' in response) {
					Alert.alert('Aviso', response.error);
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

				{/* <Text>Data aqui: {dtNasc}</Text> */}

				<Image
					style={{ width: 125, height: 125, marginBottom: 20, alignSelf: "center" }}
					source={require('dir-src/assets/notepad.png')}
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

				<TextInput
					placeholder="Sobrenome"
					style={styles.insertText}
					onChangeText={(text) => {
						setSurname(text);
					}}
					surname={surname} />

				<View style={styles.campoSexo}>
					<Text style={styles.textoImportante}>Sexo</Text>

					<RadioButton.Group
						onValueChange={(value) => setSexo(value)}
						value={sexo}>
						<View style={styles.radioButton}>
							<RadioButton value="Masculino"
							// status={sexo === 'masc' ? 'checked' : 'unchecked'}
							// onPress={() => setSexo('masc')} 
							/>

							<Text style={styles.textoRB}>Masculino</Text>
						</View>
						<View style={styles.radioButton}>
							<RadioButton value="Feminino"
							// status={sexo === 'fem' ? 'checked' : 'unchecked'}
							// onPress={() => setSexo('fem')}
							/>

							<Text style={styles.textoRB}>Feminino</Text>
						</View>
					</RadioButton.Group>
				</View>
				{/* <Text>Valor sexo kkkk: {sexo}</Text> */}
				<View style={styles.campoDuplo}>
					<TextInputMask
						mask={'[000]'}
						placeholder="Altura (cm)"
						keyboardType={'number-pad'}
						style={styles.insertValuePequeno}
						onChangeText={(text) => {
							setAltura(text);
						}}
						altura={altura}
					/>
					<TextInputMask
						mask={'[990],[000]'}
						placeholder="Peso (kg)"
						keyboardType={'decimal-pad'}
						style={styles.insertValuePequeno}
						onChangeText={(text) => {
							setPeso(text);
						}}
						peso={peso}
					/>
				</View>

				<View style={styles.campoDuplo}>
					{/* <TextInputMask
						mask={'[00]/[00]/[0000]'}
						placeholder="Data de Nasc."
						keyboardType={'number-pad'}
						style={styles.insertValuePequeno}
						onChangeText={(text) => {
							setDtNasc(text);
						}}
						dtNasc={dtNasc}
					/> */}
					<TouchableOpacity style={styles.insertDtNasc} onPress={showDatepicker}>
						{CampoDtNasc()}
					</TouchableOpacity>

					{show && (
						<DateTimePicker
							testID="dateTimePicker"
							value={dtNasc}
							mode={'date'}
							display="default"
							onChange={onChange}
						/>
					)}

					{/* <TextInputMaskDate
						placeholder="Data de Nasc."
						style={styles.insertValuePequeno}
						type={'datetime'}
						options={{
							format: 'DD/MM/YYYY'
						}}
						value={dtNasc}
						onChangeText={text => {
							setDtNasc(text)
						}}

					/> */}

					<View style={styles.campoPicker}>
						<Picker
							selectedValue={meta}
							style={styles.picker}
							onValueChange={(itemValue) =>
								setMeta(itemValue)
							}>
							<Picker.Item label="Emagrecer" value="Emagrecer" />
							<Picker.Item label="Definir" value="Definir" />
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