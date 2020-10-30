import { StyleSheet } from 'react-native';

import colors from 'dir-src/assets/colors.js';

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		// justifyContent: 'space-between',
		// alignItems: 'center',
	},
	fotoPerfil: {
		// flex: 1,
	},
	scrollView: {
		width: '100%',
		// marginTop: 32,

	},
	scrollViewHeader: {
		alignItems: 'center'
	},
	scrollViewBody: {
		width: '100%',
		marginTop: 32
	},
	textWhite: {
		marginTop: 16,

		fontSize: 24,
		color: colors.mainTextColor,
		fontWeight: "bold"
	},
	infos: {
		backgroundColor: colors.mainInfoBackgroundColor,
		// backgroundColor: "#212D3A",
		borderRadius: 6,
		width: '100%',
		paddingTop: 13,


	},
	camposInfos: {
		flexDirection: "row",
		alignItems: 'center',

		borderBottomWidth: 1,
		borderColor: colors.mainInfoBorderColor,

		paddingVertical: 13,
		paddingHorizontal: 13,

	},
	icon: {
		// backgroundColor: colors.mainIconColor,
		borderRadius: 24 / 2

	},
	textInfo: {
		color: colors.mainInfoTextColor,
		fontSize: 20,
		marginLeft: 13,
		textAlignVertical: "center"
	},
	fatButton: {
		width: '100%',
		height: 40,

		borderRadius: 6,
		backgroundColor: colors.secondaryButtonBackgroundColor,

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

		marginTop: 32,
	},
	txtFatButton: {
		color: colors.secondaryButtonTextColor,
		fontSize: 18,
		fontWeight: 'bold',
	},
	fatButtonLogout: {
		width: '100%',
		height: 40,

		borderRadius: 6,
		backgroundColor: colors.mainButtonBackgroundColor,

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

		marginTop: 16,
	},
});
