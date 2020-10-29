import React, { Component } from 'react';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from "dir-src/assets/colors.js";

export default class FatButton extends Component {
	// static propTypes = {
	// 	containerStyle: PropTypes.style,
	// 	style: PropTypes.style,
	// 	autoFocus: PropTypes.bool,
	// 	editable: PropTypes.bool,
	// 	textColor: PropTypes.string,
	// 	onChangeText: PropTypes.func,
	// 	value: PropTypes.string,
	// 	placeholder: PropTypes.string,
	// 	onPress: PropTypes
	// }

	render() {
		return (
			<TouchableOpacity style={styles.action} onPress={handleRegister}>
				<Text style={styles.actionText}>Enviar</Text>
			</TouchableOpacity>

		)

	}
}

const styles = StyleSheet.create({
	action: {
		backgroundColor: colors.mainButtonBackgroundColor,
		borderRadius: 6,
		width: 132,
		height: 29,
		justifyContent: "center",
		alignItems: "center",

		shadowColor: colors.shadowColor,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	},
	actionText: {
		color: colors.mainButtonTextColor,
		fontSize: 18,
		fontWeight: "bold",
	},
});
