import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Modal, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

import {
	Container, CardItem,
	StyleProvider,
	getTheme
} from 'native-base';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSize = 30;

const IconAlvo = <MCIcon name="target" size={iconSize} color="#ff0000" />
const IconeBalanca = <MCIcon name="scale-bathroom" size={iconSize} color="#0f0faa" />;
const IconeCalculadora = <MCIcon name="calculator-variant" size={iconSize} color="#55ff00" />;

import material from '../../../../native-base-theme/variables/material';
import styles from './styles';

export default function SeuPerfil({ navigation }) {
	const CalculaIMC = () => {
		const imc = parseFloat(global.user.peso) / Math.pow(global.user.altura * 0.01, 2);

		if (imc > 40) {
			return 'Obesidade Grave ';
		} else if (imc > 30) {
			return 'Obesidade';
		} else if (imc > 25) {
			return 'Sobrepeso';
		} else if (imc > 18.5) {
			return 'Normal';
		} else {
			return 'Magreza';
		}
	}

	return (

		<StyleProvider style={getTheme(material)}>
			<Container style={styles.container}>
				<ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>

					<View style={styles.scrollViewHeader}>
						<Avatar
							rounded
							source={{
								uri:
									'https://avatars3.githubusercontent.com/u/50476075?s=460&u=11aba3fef6d20adac7264b36c503396700ac6182&v=4'
								// 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
							}}
							size={150}
							onPress={() => { }}
							showAccessory
							accessory={{ style: { backgroundColor: '#000', borderRadius: 50 } }}
							avatarStyle={styles.fotoPerfil}
						/>
						<Text style={styles.textWhite}>
							{global.user.name + ' ' + global.user.surname}
						</Text>

					</View>

					<View style={styles.scrollViewBody}>
						<Text style={{
							fontSize: 24,
							color: "#F2FDFF",
							fontWeight: "bold",
							marginLeft: 6,
							marginBottom: 6
						}}>Suas informações</Text>

						<View style={styles.infos}>
							<View style={{
								flexDirection: "row",
								alignItems: 'center',

								borderBottomWidth: 1,
								borderColor: '#000',

								paddingBottom: 13,
								paddingLeft: 13,
							}}>
								<Text style={styles.icon}>{IconeBalanca}</Text>
								<Text style={styles.textInfo}>Seu Peso: {global.user.peso} Kg</Text>

							</View>

							<View style={styles.camposInfos}>
								<Text style={styles.icon}>{IconAlvo}</Text>
								<Text style={styles.textInfo}>Sua Meta: {global.user.meta}</Text>

							</View>

							<View style={styles.camposInfos}>
								<Text style={styles.icon}>{IconeCalculadora}</Text>
								<Text style={styles.textInfo}>Seu IMC: <CalculaIMC /></Text>

							</View>

						</View>

						<TouchableOpacity style={styles.fatButton}
							onPress={() => navigation.navigate('EditPerfil')}>
							<Text style={styles.txtFatButton}>Alterar dados</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.fatButtonLogout}
							onPress={() => navigation.popToTop()}>
							<Text style={styles.txtFatButton}>Fazer logout</Text>
						</TouchableOpacity>
					</View >

				</ScrollView>
			</Container>
		</StyleProvider>
	);
}
