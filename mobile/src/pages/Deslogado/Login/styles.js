// import { StyleSheet, StatusBar } from 'react-native';
// import { ceil } from 'react-native-reanimated';

// import colors from 'dir-src/assets/colors.js';

// export default StyleSheet.create({
// 	container: {
// 		minWidth: '100%',
// 		flex: 1,
// 		flexDirection: 'column',
// 		justifyContent: 'center',
// 	},
// 	linearGradient: {
// 		width: "100%",
// 		height: "100%",
// 		padding: 20,
// 		paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
// 	},

// 	content: {
// 		justifyContent: 'center'
// 	},

// 	layerLink: {
// 		marginTop: 10,
// 		paddingLeft: 10,
// 		width: '100%',
// 		alignItems: 'flex-start',
// 	},

// 	link: {
// 		color: colors.mainLinkColor,
// 		fontSize: 14,
// 		textDecorationLine: 'underline',
// 	},

// 	btn: {
// 		marginBottom: 10,
// 	},

// 	btnFace: {
// 		margin: 5,
// 		backgroundColor: '#3949ab',
// 	},

// 	selfCenter: {
// 		alignSelf: "center"
// 	},

// 	txtEntrar: {
// 		marginVertical: 10,
// 		alignSelf: "center",
// 		textTransform: "uppercase",
// 	},

// });

import { StyleSheet, StatusBar } from 'react-native';
import { ceil } from 'react-native-reanimated';
import colors from 'dir-src/assets/colors.js'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.mainBackgroundColor,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
	},

	input: {
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

	layerLink: {
		marginTop: 10,
		paddingLeft: 10,
		width: '100%',
		alignItems: 'flex-start',
	},

	link: {
		color: colors.mainLinkColor,
		fontSize: 14,
		textDecorationLine: 'underline',
	},

	botao: {
		marginTop: 31,
		backgroundColor: colors.mainButtonBackgroundColor,
		width: '100%',
		height: 40,
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'center',

		shadowColor: colors.shadowColor,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	},

	botaoText: {
		color: colors.mainButtonTextColor,
		fontSize: 18,
		fontWeight: 'bold',
	},

	grupoOu: {
		marginTop: 13,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	horizontalLine: {
		backgroundColor: colors.mainHorizontalLine,
		height: 1.5,
		width: '40%',
	},

	textoOu: {
		color: colors.mainTextColor,
		fontSize: 18,
	},

	botaoCadastro: {
		marginTop: 16,
		width: '100%',
		height: 40,
		backgroundColor: colors.secondaryButtonBackgroundColor,
		color: colors.secondaryButtonTextColor,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 6,

		shadowColor: colors.shadowColor,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	},

	botaoFacebook: {
		width: '100%',
		marginTop: 16,
		paddingVertical: 4,
		paddingHorizontal: 20,
		backgroundColor: colors.mainFacebookButtonColor,
		borderRadius: 6,
		flexDirection: 'row',
		justifyContent: "flex-start",
		alignItems: 'center',

		shadowColor: colors.shadowColor,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	},

	botaoGoogle: {
		width: '100%',
		marginTop: 16,
		paddingVertical: 4,
		paddingHorizontal: 20,
		backgroundColor: colors.mainGoogleButtonColor,
		borderRadius: 6,
		flexDirection: 'row',
		justifyContent: "flex-start",
		alignItems: 'center',

		shadowColor: colors.shadowColor,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	},
});