import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';

import {
	Container, CardItem,
	StyleProvider,
	getTheme
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

const IconePerfil = <Icon name="account" size={24} color="gray" />;

import material from '../../../../../native-base-theme/variables/material'
import styles from './styles';

export default function EditPerfil({ navigation }) {
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
							}}
							onPress={() => console.log('teste')}
							size={150}
							showAccessory
							accessory={{ style: { backgroundColor: '#000', borderRadius: 50 } }}
							avatarStyle={styles.fotoPerfil}
						/>
						<Text style={styles.textWhite}>
							Diego Braga
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
								<Text style={styles.icon}>{IconePerfil}</Text>
								<Text style={styles.textInfo}>Seu Peso: </Text>

							</View>

							<View style={styles.camposInfos}>
								<Text style={styles.icon}>{IconePerfil}</Text>
								<Text style={styles.textInfo}>Sua Meta: </Text>

							</View>

							<View style={styles.camposInfos}>
								<Text style={styles.icon}>{IconePerfil}</Text>
								<Text style={styles.textInfo}>Seu IMC: </Text>

							</View>

							<View style={styles.camposInfos}>
								<Text style={styles.icon}>{IconePerfil}</Text>
								<Text style={styles.textInfo}>Sua Altura: </Text>

							</View>

							<View style={styles.camposInfos}>
								<Text style={styles.icon}>{IconePerfil}</Text>
								<Text style={styles.textInfo}>Sua Idade: </Text>

							</View>
						</View>

					</View >

				</ScrollView>
			</Container>
		</StyleProvider>
	);
}
