/**
 * @format
 */

import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	todoapp: {
		background: '#fff',
		marginLeft: 0,
		marginTop: 130,
		marginRight: 0,
		marginBottom: 40,
		position: 'relative',
		// box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
		...Platform.select({
			ios: {
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.23,
				shadowRadius: 2.62,
			},
			android: {
				elevation: 4,
			},
		}),
	},
	info: {
		// margin: 65px auto 0;
		marginTop: 65,
		marginHorizontal: 'auto',
		marginBottom: 0,
		color: '#bfbfbf',
		fontSize: 10,
		// text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
		...Platform.select({
			ios: {
				textShadow: '0 1px 0 rgba(255, 255, 255, 0.5)',
			},
			android: {
				textShadowColor: 'rgba(255, 255, 255, 0.5)',
				textShadowOffset: {width: 0, height: 1},
				textShadowRadius: 0,
			},
		}),
		textAlign: 'center',
		// alignContent: 'center',
		// borderWidth: 1,
		// borderColor: 'green',
		// borderRadius: 25,
		// justifyContent: 'space-between',
		// height: 'auto',
	},
	info_p: {
		color: '#bfbfbf',
		fontSize: 10,
		// text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
		...Platform.select({
			ios: {
				textShadow: '0 1px 0 rgba(255, 255, 255, 0.5)',
			},
			android: {
				textShadowColor: 'rgba(255, 255, 255, 0.5)',
				textShadowOffset: {width: 0, height: 1},
				textShadowRadius: 0,
			},
		}),
		width: '100%',
		textAlign: 'center',
		lineHeight: 10,
		marginBottom: 10, // TODO:
		// borderWidth: 1,
		// borderColor: 'grey',
		// borderRadius: 25,
	}
});

export default styles;
