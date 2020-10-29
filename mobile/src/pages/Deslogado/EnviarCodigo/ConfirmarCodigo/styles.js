// import { StyleSheet, StatusBar } from "react-native";

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
//   },

//   yellowBox:{
//       width: 320,
//       height: 230,
//       backgroundColor: '#fafafa',
//       borderRadius: 18,
//       paddingHorizontal: 20,
//       paddingVertical: 24,
//       alignItems: "center",
//       marginVertical: 40
//   },

//   DoubleButtons: {
//     width: "100%",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-around",
//     marginBottom: 28,
//   },
//   description: {
//     color: "#212121",
//     width: 282,
//     fontSize: 18,
//     lineHeight: 21,
//     textAlign: "center",
//     marginBottom: 25,
//   },
// });

import { StyleSheet, StatusBar } from "react-native";

import colors from "dir-src/assets/colors.js";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.mainBackgroundColor,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
	},
	yellowBox: {
		width: 320,
		height: 230,
		backgroundColor: colors.mainBoxColor,
		borderRadius: 18,
		paddingHorizontal: 20,
		paddingVertical: 24,
		alignItems: "center",
		marginVertical: 40
	},
	description: {
		color: colors.mainTextBoxColor,
		width: 266,
		fontSize: 24,
		fontWeight: 'bold',
		lineHeight: 28,
		textAlign: "center",
		marginBottom: 16,
	},
	insertText: {
		width: "100%",
		height: 35,
		borderRadius: 6,
		paddingLeft: 10,
		paddingTop: 7,
		paddingBottom: 7,
		fontSize: 18,
		fontWeight: '200',
		backgroundColor: colors.mainInputBackgroundColor,
		color: colors.mainInputText,
		alignItems: "center",
		marginBottom: 16,
	},
	DoubleButtons: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		marginBottom: 28,
	},
	link: {
		color: colors.mainLinkColor,
		fontSize: 18,
		lineHeight: 21,
		textDecorationLine: "underline",
	},
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