import { StyleSheet, StatusBar } from "react-native";

import colors from "dir-src/assets/colors.js";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.mainBackgroundColor,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
	},
	description: {
		color: colors.mainTextColor,
		width: 186,
		height: 56,
		fontWeight: 'bold',
		fontSize: 24,
		lineHeight: 28,
		textAlign: "center",
		marginVertical: 70,
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

