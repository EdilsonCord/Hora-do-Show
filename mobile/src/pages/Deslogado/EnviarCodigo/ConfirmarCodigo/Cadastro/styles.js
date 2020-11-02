// import {StyleSheet, StatusBar} from 'react-native';

// export default StyleSheet.create({


// });

import { StyleSheet, StatusBar } from 'react-native';

import colors from "dir-src/assets/colors.js";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.mainBackgroundColor,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		// paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
	},
	header: {
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		// backgroundColor: 'black',
	},
	textoImportante: {
		color: colors.mainTitleColor,
		fontSize: 24,
		fontWeight: 'bold',
	},
	forms: {
		width: '100%',
		// flex: 1,
		marginVertical: 16,
		// backgroundColor: 'gray',
		justifyContent: 'center',
	},

	campoSexo: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '100%',

		// backgroundColor: 'black',

		marginBottom: 16,
	},
	radioButton: {
		flexDirection: "row",
		alignItems: 'center'
	},
	textoRB: {
		color: colors.mainTextColor,
		fontSize: 18
	},
	insertText: {
		width: '100%',
		height: 35,
		borderRadius: 6,
		paddingLeft: 10,
		paddingTop: 7,
		paddingBottom: 7,
		fontSize: 18,
		backgroundColor: colors.mainInputBackgroundColor,
		color: colors.mainInputText,
		alignItems: 'center',
		marginBottom: 16,
	},

	campoDuplo: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},

	insertValuePequeno: {
		width: '40%',
		height: 35,
		borderRadius: 6,
		paddingLeft: 10,
		paddingTop: 7,
		paddingBottom: 7,
		fontSize: 18,
		backgroundColor: colors.mainInputBackgroundColor,
		color: colors.mainInputText,
		alignItems: 'center',
		marginBottom: 16,
	},

	insertDtNasc: {
		width: '40%',
		height: 35,
		borderRadius: 6,
		paddingHorizontal: 10,
		paddingTop: 7,
		paddingBottom: 7,
		justifyContent: 'center',
		backgroundColor: colors.mainInputBackgroundColor,
		marginBottom: 16,
	},

	insertDtNascText: {
		fontSize: 18,
		color: colors.mainInputText,
		textAlignVertical: 'center'
	},

	campoPicker: {
		width: '40%',
		height: 35,
		borderRadius: 6,
		// paddingHorizontal: 5,
		// paddingVertical: 5,
		backgroundColor: colors.mainInputBackgroundColor,
		marginBottom: 16,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	picker: {
		flex: 1,
		height: 30,
		// fontSize: 10,
		// backgroundColor: 'blue',
		// color: '#000',
	},

	footer: {
		width: '100%',
		// backgroundColor:'green',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		// marginTop: 16,
	},
	fatButton: {
		width: '100%',
		height: 40,
		borderRadius: 6,

		marginBottom: 16,

		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.mainButtonBackgroundColor,

		shadowColor: colors.shadowColor,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	},
	textoFatButton: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.mainButtonTextColor
	},
	link: {
		color: colors.mainLinkColor,
		fontSize: 18,
		textDecorationLine: 'underline',
	},

});