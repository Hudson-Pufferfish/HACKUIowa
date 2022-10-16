import { StyleSheet } from 'react-native';
import { BUTTON_COLOR } from '../constants/color.constants';

export const buttonStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: BUTTON_COLOR,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    paddingHorizontal: 80,
    paddingVertical: 6,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});