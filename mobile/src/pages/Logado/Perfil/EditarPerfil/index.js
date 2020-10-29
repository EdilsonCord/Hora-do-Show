import React, { Component, useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';

import styles from './styles';

const iconSize = 16;

import MCIcon from 'react-native-vector-icons/MaterialIcons';
import colors from 'dir-src/assets/colors';
const rightArrow = <MCIcon name="keyboard-arrow-right" size={iconSize} color={colors.mainTextColor} />
var campo = '';
var valorCampo = '';


export default function EditPerfil({ navigation }) {
	const [modalVisible, setModalVisible] = useState(false);
	const [value, onChangeText] = React.useState('');

	const TextInputNome = () => (
		<TextInput
			style={styles.modalInputText}
			defaultValue={global.user.name}
			placeholderTextColor={colors.mainInputPlaceholder}
			onChangeText={(text) => onChangeText(text)}
			value={value}
			autoFocus={true}
			keyboardType='default'

		/>
	)

	const PickerGender = () => (
		<TextInput
			style={styles.modalInputText}
			defaultValue={global.user.name}
			placeholderTextColor={colors.mainInputPlaceholder}
			onChangeText={(text) => onChangeText(text)}
			value={value}
			autoFocus={true}
			keyboardType='default'

		/>
	)

	const PickerMeta = () => (
		<TextInput
			style={styles.modalInputText}
			defaultValue={global.user.name}
			placeholderTextColor={colors.mainInputPlaceholder}
			onChangeText={(text) => onChangeText(text)}
			value={value}
			autoFocus={true}
			keyboardType='default'

		/>
	)

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}

			>
				<View style={styles.baseModal}>
					<Text style={styles.modalTitle}>Alterando {campo}</Text>
					<TextInputNome />

					<View style={styles.doubleButtons}>
						<TouchableOpacity style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => {
							setModalVisible(!modalVisible);
							Alert.alert('Info', 'Seus dados não foram alterados!')
						}}>
							<Text style={styles.link}>Cancelar</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.bigButton} onPress={() => {
							setModalVisible(!modalVisible);
							Alert.alert('Concluído', 'Seus dados foram alterados!')
						}} >
							<Text style={styles.bigButtonText}>Confirmar</Text>

						</TouchableOpacity>
					</View>
				</View>
			</Modal>

			<TouchableOpacity style={styles.editInfo} onPress={() => {
				campo = "seu nome";
				valorCampo = 'nome';
				setModalVisible(true);
			}}>
				<View style={styles.infoEsquerda}>
					<Text style={styles.infoText}>Seu nome</Text>

				</View>

				<View style={styles.infoDireita}>
					<Text style={styles.infoText}>{global.user.name}</Text>
					{rightArrow}
				</View>
			</TouchableOpacity>

			<TouchableOpacity style={styles.editInfo} onPress={() => {
				campo = "seu gênero";
				valorCampo = 'genero';
				setModalVisible(true);
			}}>
				<View style={styles.infoEsquerda}>
					<Text style={styles.infoText}>Gênero</Text>

				</View>

				<View style={styles.infoDireita}>
					<Text style={styles.infoText}>{global.user.name}</Text>
					{rightArrow}
				</View>
			</TouchableOpacity>

			<TouchableOpacity style={styles.editInfo} onPress={() => {
				campo = "sua data de nascimento";
				valorCampo = 'dtNasc';
				setModalVisible(true);
			}}>
				<View style={styles.infoEsquerda}>
					<Text style={styles.infoText}>Data de Nascimento</Text>

				</View>

				<View style={styles.infoDireita}>
					<Text style={styles.infoText}>{global.user.name}</Text>
					{rightArrow}
				</View>
			</TouchableOpacity>

			<TouchableOpacity style={styles.editInfo} onPress={() => {
				campo = "sua altura";
				valorCampo = 'altura';
				setModalVisible(true);
			}}>
				<View style={styles.infoEsquerda}>
					<Text style={styles.infoText}>Altura</Text>

				</View>

				<View style={styles.infoDireita}>
					<Text style={styles.infoText}>{global.user.name}</Text>
					{rightArrow}
				</View>
			</TouchableOpacity>

			<TouchableOpacity style={styles.editInfo} onPress={() => {
				campo = "seu peso";
				valorCampo = 'peso';
				setModalVisible(true);
			}}>
				<View style={styles.infoEsquerda}>
					<Text style={styles.infoText}>Peso</Text>

				</View>

				<View style={styles.infoDireita}>
					<Text style={styles.infoText}>{global.user.name}</Text>
					{rightArrow}
				</View>
			</TouchableOpacity>

			<TouchableOpacity style={styles.editInfo} onPress={() => {
				campo = "sua meta";
				valorCampo = 'meta';
				setModalVisible(true);
			}}>
				<View style={styles.infoEsquerda}>
					<Text style={styles.infoText}>Meta</Text>

				</View>

				<View style={styles.infoDireita}>
					<Text style={styles.infoText}>{global.user.name}</Text>
					{rightArrow}
				</View>
			</TouchableOpacity>

		</ScrollView>
	);
}
