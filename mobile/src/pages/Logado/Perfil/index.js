import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import {
	Button,
	Container,
	Header,
	Content,
	Thumbnail,
	StyleProvider,
	getTheme
} from 'native-base';

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IconePerfil = <MCIcons name="account" size={25} color="gray" />;

import material from '../../../../native-base-theme/variables/material';
import styles from './styles';

export default function Perfil({ navigation }) {
	return (
		<StyleProvider style={getTheme(material)}>
			<Container style={styles.container}>
				<View>
					<Avatar
						rounded
						source={{
							uri:
								'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
						}}
						onPress={() => console.log('teste')}
						size={200}
						showAccessory
						accessory={{ style: { backgroundColor: '#000', borderRadius: 50 } }}
						avatarStyle={styles.fotoPerfil}
					/>
				</View>

				<View style={styles.body}>
					<TouchableOpacity style={styles.fatButton}>
						<Text style={styles.txtFatButton}>Minhas informações</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.fatButton}>
						<Text style={styles.txtFatButton}>Perfil</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.fatButtonLogout}
						onPress={() => navigation.popToTop()}>
						<Text style={styles.txtFatButton}>Logout</Text>
					</TouchableOpacity>
				</View>
			</Container>
		</StyleProvider>
	);
}
