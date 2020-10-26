import { StyleSheet } from 'react-native';

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
		color: "#F2FDFF",
		fontWeight: "bold"
	},
	infos: {
		backgroundColor: "#F2FdfF",
		// backgroundColor: "#212D3A",
		borderRadius: 6,
		width: '100%',
		paddingTop: 13,


	},
	camposInfos: {
		flexDirection: "row",
		alignItems: 'center',

		borderBottomWidth: 1,
		borderColor: '#000',

		paddingVertical: 13,
		paddingLeft: 13,

	},
	icon: {
		backgroundColor: 'blue',
		borderRadius: 24 / 2

	},
	textInfo: {
		color: "#202020",
		fontSize: 20,
		marginLeft: 13
	},
	fatButton: {
		width: '100%',
		height: 40,

		borderRadius: 6,
		backgroundColor: '#fff',

		alignItems: 'center',
		justifyContent: 'center',

		shadowColor: '#000',
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
		fontSize: 18,
		fontWeight: 'bold',
	},
	fatButtonLogout: {
		width: '100%',
		height: 40,

		borderRadius: 6,
		backgroundColor: '#D9C83A',

		alignItems: 'center',
		justifyContent: 'center',

		shadowColor: '#000',
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
