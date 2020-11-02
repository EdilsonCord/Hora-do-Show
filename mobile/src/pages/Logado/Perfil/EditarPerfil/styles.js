import { StyleSheet } from 'react-native';

import colors from 'dir-src/assets/colors.js';

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: colors.mainBackgroundColor,
		// justifyContent: 'space-between',
		// alignItems: 'center',
	},
	containerModal: {
		height: '100%',
		justifyContent: 'center'
	},
	editInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
		paddingBottom: 10,
		borderBottomWidth: 2,
		borderColor: colors.mainTextColor
	},
	infoText: {
		color: colors.mainTextColor,
		fontSize: 18,
		marginRight: 10,
		textAlign: "right"
	},
	infoDireita: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	baseModal: {
		backgroundColor: colors.mainInfoBackgroundColor,
		margin: 20,
		borderRadius: 20,
		padding: 30,
		alignItems: "center",

	},
	modalTitle: {
		color: colors.mainTextColor,
		fontSize: 24,
		textAlign: 'center'
	},
	modalInputText: {
		marginTop: 16,
		width: '100%',
		height: 35,

		borderRadius: 6,
		paddingLeft: 10,
		paddingVertical: 7,

		color: colors.mainInputText,
		alignItems: 'center',

		backgroundColor: colors.mainInputBackgroundColor,
		fontSize: 18,
	},

	insertDtNasc: {
		marginTop: 16,
		width: '100%',
		height: 35,

		borderRadius: 6,
		paddingHorizontal: 10,
		// paddingVertical: 7,

		color: colors.mainInputText,
		justifyContent: 'space-between',

		backgroundColor: colors.mainInputBackgroundColor,
		fontSize: 18,
	},

	insertDtNascText: {
		fontSize: 18,
		color: colors.mainInputText,
		textAlignVertical: 'center'
	},
	doubleButtons: {
		marginTop: 16,
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	link: {
		color: colors.mainLinkColor,
		fontSize: 18,
		lineHeight: 21,
		textDecorationLine: "underline",
	},
	bigButton: {
		backgroundColor: colors.mainEditButtonSucesso,
		flexGrow: 1,
		height: 40,
		borderRadius: 8,

		justifyContent: 'center',
		alignItems: 'center'
	},
	bigButtonText: {
		color: colors.mainButtonTextColor,
		fontSize: 18,
		fontWeight: "bold",
	},
});
