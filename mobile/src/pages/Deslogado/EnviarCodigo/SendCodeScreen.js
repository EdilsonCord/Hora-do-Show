// import React from 'react';
// import {
// 	SafeAreaView,
// 	View,
// 	Image,
// 	TextInput,
// 	TouchableOpacity,
// } from 'react-native';

// import { Container, Separator, Content, getTheme, StyleProvider, Icon, Form, Item, List, ListItem, Input, Label, Button, Text } from 'native-base';
// import material from '../../../../native-base-theme/variables/material'

// import styles from './styles';
// import api from "../../../services/api";
// import axios from "axios";
// const instance = axios.create();

// export default function SendCodeScreen({ navigation }) {


// 	const [value, onChangeText] = React.useState('');


// 	async function handleRegister(e) {
// 		e.preventDefault();

// 		fetch('http://10.0.2.2:3333/api/pre_register', {
// 			method: 'post',
// 			headers: {
// 				'Accept': 'application/json',
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				email: value,
// 			})
// 		}).then((response) => response.json())
// 			.then(response => {
// 				if ("error" in response) {
// 					alert(response.error)
// 				} else {
// 					console.log(response)
// 					navigation.navigate('ConfirmCodeScreen', { email: value })
// 				}
// 			}).catch(err => {
// 				console.log(err)
// 				navigation.navigate('ConfirmCodeScreen', { email: value })
// 			});

// 		navigation.navigate('ConfirmCodeScreen', { email: value })
// 	}

// 	return (
// 		<StyleProvider style={getTheme(material)}>
// 			<Content>
// 				<Container style={styles.container}>
// 					<Image
// 						style={{ marginBottom: 25 }}
// 						source={require('dir-src/assets/Aviao.png')}
// 					/>

// 					<Text style={styles.title}>CÓDIGO DE CONFIRMAÇÃO</Text>

// 					<Text style={styles.description}>
// 						Insira seu e-mail na caixa de seleção abaixo. Enviaremos um código para
// 						que você possa prosseguir com o cadastro!
//       </Text>

// 					<Item>
// 						<Input onChangeText={(text) => onChangeText(text)}
// 							value={value} placeholder='E-mail' />
// 					</Item>

// 					<View style={styles.DoubleButtons}>
// 						<Button transparent light onPress={() => navigation.goBack()}>
// 							<Text>Voltar</Text>
// 						</Button>

// 						<Button block primary onPress={handleRegister}>
// 							<Text>Enviar</Text>
// 						</Button>

// 					</View>

// 					<Image source={require('../../../assets/logooficial.png')} />

// 				</Container>
// 			</Content>
// 		</StyleProvider>
// 	);
// }

import React from 'react';
import {
	View,
	Image,
	Text,
	TextInput,
	TouchableOpacity, KeyboardAvoidingView, Alert
} from 'react-native';

import { Container, Content, getTheme, StyleProvider, Icon, Form, Item, List, ListItem, Input, Label, Button } from 'native-base';
import material from '../../../../native-base-theme/variables/material'

// import FatButton from "dir-src/Components/FatButton.js";
import colors from "dir-src/assets/colors.js";

import styles from './styles';

import api from "../../../services/api";
import axios from "axios";
const instance = axios.create();

export default function SendCodeScreen({ navigation }) {


	const [value, onChangeText] = React.useState('');


	async function handleRegister(e) {
		e.preventDefault();

		fetch('http://10.0.2.2:3333/api/pre_register', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: value,
			})
		}).then((response) => response.json())
			.then(response => {
				if ("error" in response) {
					Alert.alert("Aviso", response.error)
				} else {
					console.log(response)
					navigation.navigate('ConfirmCodeScreen', { email: value })
				}
			}).catch(err => {
				console.log(err)
				navigation.navigate('ConfirmCodeScreen', { email: value })
			});

		// navigation.navigate('ConfirmCodeScreen', { email: value })
	}

	return (
		<StyleProvider style={getTheme(material)}>
			<Content>
				<Container style={styles.container}>
					<Image
						style={{ marginBottom: 25 }}
						source={require('dir-src/assets/Aviao.png')}
					/>

					<Text style={styles.title}>CÓDIGO DE CONFIRMAÇÃO</Text>

					<Text style={styles.description}>
						Insira seu e-mail na caixa de seleção abaixo. Enviaremos um código para
						que você possa prosseguir com o cadastro!
     				</Text>

					<TextInput
						style={styles.insertText}
						keyboardType="email-address"
						placeholder="E-mail"
						placeholderTextColor={colors.mainInputPlaceholder}

						textContentType='emailAddress'
						onChangeText={(text) => onChangeText(text)}
						value={value}
					/>

					<View style={styles.DoubleButtons}>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<Text style={styles.link}>Voltar</Text>
						</TouchableOpacity>

						{/* <FatButton>
						</FatButton> */}
						<TouchableOpacity style={styles.action} onPress={handleRegister}>
							<Text style={styles.actionText}>Enviar</Text>
						</TouchableOpacity>
					</View>

					<Image source={require('dir-src/assets/logooficial.png')} />
				</Container>
			</Content>
		</StyleProvider>
	);
}