// /* eslint-disable prettier/prettier */
// import React, { Component } from 'react';
// import { View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

// import {
// 	Container,
// 	Content,
// 	H1,
// 	H2,
// 	H3,
// 	getTheme,
// 	StyleProvider,
// 	Icon,
// 	Form,
// 	Item,
// 	Input,
// 	Label,
// 	Button,
// 	Text,
// } from 'native-base';

// import styles2 from './styles';
// import LinearGradient from 'react-native-linear-gradient'; // import LinearGradient

// // import material from '../../../../native-base-theme/variables/material';
// import material from 'HoraDoShow/native-base-theme/variables/material';
// import styles from './styles';

// // export default class MainScreen extends Component {
// export default function MainScreen({ navigation }) {
// 	const [email, onChangeEmail] = React.useState('');
// 	const [senha, onChangeSenha] = React.useState('');

// 	async function handleRegister(e) {
// 		e.preventDefault();

// 		fetch('http://10.0.2.2:3333/api/authenticate', {
// 			method: 'post',
// 			headers: {
// 				Accept: 'application/json',
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				email: email,
// 				password: senha,
// 			}),
// 		})
// 			.then((response) => response.json())
// 			.then((response) => {
// 				if ('error' in response) {
// 					alert(response.error);
// 				} else {
// 					global.user = response.user;
// 					navigation.navigate('MainSuccessScreen');
// 				}
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	}

// 	return (
// 		<StyleProvider style={getTheme(material)}>
// 			<Container style={styles.container}>
// 				<LinearGradient
// 					colors={['#263341', '#212d3a']}
// 					style={styles.linearGradient}>
// 					<Image
// 						style={styles2.selfCenter}
// 						source={require('dir-src/assets/logoOficial282x166.png')}
// 					/>

// 					<Form>
// 						<Item stackedLabel>
// 							<Label>Seu email</Label>
// 							<Input
// 								onChangeText={(text) => onChangeEmail(text)}
// 								email={email}
// 								defaultValue="diego.cstbraga@gmail.comm"
// 							/>
// 						</Item>

// 						<Item stackedLabel>
// 							<Label>Sua senha</Label>
// 							<Input
// 								defaultValue="senha@1233"
// 								onChangeText={(text) => onChangeSenha(text)}
// 								senha={senha}
// 								secureTextEntry={true}
// 							/>
// 						</Item>
// 					</Form>

// 					{/* <Button
// 						transparent
// 						light
// 						onPress={() => navigation.navigate('SendRecoveryCodeScreen')}>
// 						<Text>Esqueci minha senha</Text>
// 					</Button> */}
// 					<View style={styles.layerLink}>
// 						<TouchableOpacity
// 							onPress={() => navigation.navigate('SendRecoveryCodeScreen')}>
// 							<Text style={styles.link}>Esqueci minha senha</Text>
// 						</TouchableOpacity>
// 					</View>

// 					<Button
// 						style={{ alignSelf: 'center', marginBottom: 10 }}
// 						primary
// 						onPress={handleRegister}>
// 						<Text>Entrar</Text>
// 					</Button>

// 					<Button
// 						style={{ marginBottom: 10 }}
// 						bordered
// 						block
// 						full
// 						primary
// 						onPress={() => navigation.navigate('SendCodeScreen')}>
// 						<Icon type="Zocial" name="email" />
// 						<Text>Cadastra-se com email</Text>
// 					</Button>

// 					<Text style={styles2.txtEntrar}> Entrar com: </Text>

// 					<Button
// 						style={styles2.btn}
// 						iconLeft
// 						bordered
// 						full
// 						info
// 						onPress={() => {
// 							Alert.alert('Aviso', 'Recurso atualmente indisponível');
// 							// navigation.navigate('CadastrarInformacoesTeste');
// 						}}>
// 						<Icon type="FontAwesome" name="facebook" />
// 						<Text>FACEBOOK</Text>
// 					</Button>

// 					<Button
// 						style={styles2.btn}
// 						iconLeft
// 						bordered
// 						full
// 						danger
// 						onPress={() => {
// 							// Alert.alert('Aviso', 'Recurso atualmente indisponível');
// 							navigation.navigate('CadastrarInformacoes');
// 						}}>
// 						<Icon type="FontAwesome" name="google" />
// 						<Text>google</Text>
// 					</Button>
// 				</LinearGradient>
// 			</Container>
// 		</StyleProvider>
// 	);
// }

import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	Alert,
} from 'react-native';

import styles from './styles';
import colors from 'dir-src/assets/colors.js'

// export default class MainScreen extends Component {
export default function MainScreen({ navigation }) {
	const [email, onChangeEmail] = React.useState('');
	const [senha, onChangeSenha] = React.useState('');

	async function handleRegister(e) {
		e.preventDefault();

		fetch('http://10.0.2.2:3333/api/authenticate', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: senha,
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				if ('error' in response) {
					Alert.alert('Erro ao fazer Login!', response.error);
				} else {
					global.user = response.user;
					navigation.navigate('MainSuccessScreen');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<View style={styles.container}>
			<Image source={require('../../../assets/logoOficial282x166.png')} />

			<TextInput
				style={styles.input}
				defaultValue="diego.cstbraga@gmail.comm"
				placeholder="Insira seu email aqui"
				placeholderTextColor={colors.mainInputPlaceholder}
				onChangeText={(text) => onChangeEmail(text)}
				email={email}
			/>

			<TextInput
				style={styles.input}
				defaultValue="senha1233"
				secureTextEntry={true}
				placeholder="Sua senha"
				placeholderTextColor={colors.mainInputPlaceholder}
				onChangeText={(text) => onChangeSenha(text)}
				senha={senha}
			/>

			<View style={styles.layerLink}>
				<TouchableOpacity
					onPress={() => navigation.navigate('SendRecoveryCodeScreen')}>
					<Text style={styles.link}>Esqueci minha senha</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity style={styles.botao} onPress={handleRegister}>
				<Text style={styles.botaoText}>Entrar</Text>
			</TouchableOpacity>

			<View style={styles.grupoOu}>
				<View style={styles.horizontalLine} />

				<Text style={styles.textoOu}>ou</Text>

				<View style={styles.horizontalLine} />
			</View>

			<TouchableOpacity
				style={styles.botaoCadastro}
				onPress={() => navigation.navigate('SendCodeScreen')}>
				<Text style={styles.botaoText}>CADASTRE-SE GRÁTIS</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.botaoFacebook}
				onPress={() => {
					Alert.alert('Aviso', 'Recurso atualmente indisponível');
					// navigation.navigate('CadastrarInformacoesTeste');
				}}>
				<Image source={require('../../../assets/FacebookIcon.png')} />
				<Text style={{ color: colors.mainTextColor, fontSize: 18, fontWeight: 'bold', flexGrow: 1, textAlign: 'center' }}>
					ENTRAR COM O FACEBOOK
        		</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.botaoGoogle}
				onPress={() => {
					Alert.alert('Aviso', 'Recurso atualmente indisponível');
				}}>
				<Image source={require('../../../assets/GoogleIcon.png')} />

				<Text style={{
					color: colors.mainTextColor, fontSize: 18, fontWeight: 'bold', flexGrow: 1, textAlign: 'center'
				}}>
					ENTRAR COM O GOOGLE
				</Text>

			</TouchableOpacity>
		</View>
	);
}