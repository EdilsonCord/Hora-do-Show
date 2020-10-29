import React, { Component } from 'react';
import {
	SafeAreaView,
	View,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';

import styles from './styles';
import colors from 'dir-src/assets/colors.js';

export default function GenerateNewPasswdScreen({ navigation, route }) {

	const [email, onChangeEmail] = React.useState(route.params.email);
	const [senha, onChangeSenha] = React.useState('');
	const [senha2, onChangeSenha2] = React.useState('');
	const [token, onChangeToken] = React.useState('');

	async function handleRegister(e) {
		e.preventDefault();

		console.log("senha1: " + senha)
		console.log("senha2 " + senha2)
		if (!(senha === senha2)) {
			alert("Senhas não coincidem!");
			return
		}

		fetch('http://10.0.2.2:3333/api/reset_password', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				token: token,
				password: senha
			})
		}).then((response) => response.json())
			.then(response => {
				if ("error" in response) {
					alert(response.error)
				} else {

					console.log("é isso mesmo")
					navigation.navigate('GenerateNewPasswdSuccessScreen')
				}
			}).catch(err => {
				console.log("ué")
				navigation.navigate('GenerateNewPasswdSuccessScreen')
			});

	}

	return (
		<SafeAreaView style={styles.container}>
			<Image
				style={{ marginBottom: 10 }}
				source={require('dir-src/assets/ShieldCheck.png')}
			/>
			<View style={styles.yellowBox}>
				<Text style={styles.description}>Registre sua nova senha</Text>

				<TextInput
					style={styles.insertText}
					keyboardType="default"
					placeholder="Token recebido pelo email"
					placeholderTextColor={colors.mainInputPlaceholder}

					secureTextEntry={true}
					onChangeText={(text) => onChangeToken(text)}
					token={token}
				/>
				<TextInput
					style={styles.insertText}
					keyboardType="default"
					placeholder="Senha nova"
					secureTextEntry={true}
					placeholderTextColor={colors.mainInputPlaceholder}

					onChangeText={(text) => onChangeSenha(text)}
					senha={senha}
				/>

				<TextInput
					style={styles.insertText}
					keyboardType="default"
					placeholder="Confirme sua senha"
					secureTextEntry={true}
					placeholderTextColor={colors.mainInputPlaceholder}

					onChangeText={(text) => onChangeSenha2(text)}
					senha2={senha2}
				/>
			</View>

			<View style={styles.DoubleButtons}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Text style={styles.link}>Voltar</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.action} onPress={handleRegister}>
					<Text style={styles.actionText}>Confirmar</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
