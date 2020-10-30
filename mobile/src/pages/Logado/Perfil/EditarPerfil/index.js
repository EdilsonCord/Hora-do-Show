import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import TextInputMask from 'react-native-text-input-mask';

import styles from './styles';

const iconSize = 16;

import MCIcon from 'react-native-vector-icons/MaterialIcons';
import colors from 'dir-src/assets/colors';
const rightArrow = <MCIcon name="keyboard-arrow-right" size={iconSize} color={colors.mainTextColor} />
var campo = '';
var valorCampo = '';

export default function EditPerfil({ navigation }) {
	const [selectedValue, setSelectedValue] = useState(''); //META
	const [name, editName] = useState('');
	const [surname, editSurname] = useState('');
	const [peso, editPeso] = useState('');
	const [altura, editAltura] = useState('');
	const [dtNasc, editDtNasc] = useState('');

	const [modalVisible, setModalVisible] = useState(false);

	const TextInputNome = () => (
		<TextInput
			style={styles.modalInputText}
			defaultValue={global.user.name}
			onChangeText={(text) => editName(text)}
			name={name}

			autoCapitalize='words'
			autoFocus={true}
			keyboardType='default'

		/>
	);

	const TextInputSobrenome = () => (
		<TextInput
			style={styles.modalInputText}
			defaultValue={global.user.surname}
			onChangeText={(text) => editSurname(text)}
			surname={surname}

			autoCapitalize='words'
			autoFocus={true}
			keyboardType='default'

		/>
	)

	const TextInputDtNasc = () => (
		<TextInputMask
			mask={'[00]/[00]/[0000]'}
			// placeholder="Data de Nasc."
			defaultValue={global.user.dtNasc}
			keyboardType={'number-pad'}
			autoFocus={true}
			style={styles.modalInputText}
			onChangeText={(text) => {
				editDtNasc(text);
			}}

			dtNasc={dtNasc}
		/>
	)

	const TextInputAltura = () => (
		<TextInputMask
			mask={'[000]'}
			// placeholder="Altura (cm)"
			defaultValue={global.user.altura}
			keyboardType={'number-pad'}
			autoFocus={true}
			style={styles.modalInputText}
			onChangeText={(text) => {
				editAltura(text);
			}}
			altura={altura}
		/>
	)

	const TextInputPeso = () => (
		<TextInputMask

			mask={'[990],[000]'}
			// placeholder="Peso (kg)"
			defaultValue={global.user.peso}
			keyboardType={'decimal-pad'}
			autoFocus={true}
			style={styles.modalInputText}
			onChangeText={(text) => {
				editPeso(text);
			}}
			peso={peso}
		/>
	)

	const PickerGender = () => (
		<Picker
			selectedValue={selectedValue}
			style={styles.modalInputText}
			onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
		>
			<Picker.Item label="Masculino" value="macho" />
			<Picker.Item label="Feminino" value="femea" />
		</Picker>
	)


	const PickerMeta = () => (
		<Picker
			selectedValue={selectedValue}
			style={styles.modalInputText}
			onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
		>
			<Picker.Item label="Definir" value="definir" />
			<Picker.Item label="Emagrecer" value="emagrecer" />
			<Picker.Item label="Crescer" value="crescer" />
		</Picker>

	)

	const TipoInput = () => {
		switch (valorCampo) {
			case 'nome':
				return TextInputNome();

			case 'sobrenome':
				return TextInputSobrenome();

			case 'sexo':
				return PickerGender();

			case 'dtNasc':
				return TextInputDtNasc();

			case 'altura':
				return TextInputAltura();

			case 'peso':
				return TextInputPeso();

			case 'meta':
				return PickerMeta();

			default:
				return <View></View>
		}
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}

			>
				<View style={styles.containerModal}>

					<View style={styles.baseModal}>
						<Text style={styles.modalTitle}>Alterando {campo}</Text>
						{TipoInput()}

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
				campo = "seu sobrenome";
				valorCampo = 'sobrenome';
				setModalVisible(true);
			}}>
				<View style={styles.infoEsquerda}>
					<Text style={styles.infoText}>Seu sobrenome</Text>

				</View>

				<View style={styles.infoDireita}>
					<Text style={styles.infoText}>{global.user.surname}</Text>
					{rightArrow}
				</View>
			</TouchableOpacity>

			<TouchableOpacity style={styles.editInfo} onPress={() => {
				campo = "seu sexo";
				valorCampo = 'sexo';
				setModalVisible(true);
			}}>
				<View style={styles.infoEsquerda}>
					<Text style={styles.infoText}>Seu sexo</Text>

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
					<Text style={styles.infoText}>{global.user.dtNasc}</Text>
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
					<Text style={styles.infoText}>{global.user.altura} cm</Text>
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
					<Text style={styles.infoText}>{global.user.peso} Kg</Text>
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
					<Text style={styles.infoText}>{global.user.meta}</Text>
					{rightArrow}
				</View>
			</TouchableOpacity>

		</ScrollView>
	);
}
