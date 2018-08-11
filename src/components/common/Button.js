import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const Button = ({ onPress, children }) => {
  // The {onPress} destructred from props.onPress
  // This is the function handed to us from <Button /> in AlbumList
  // Although we called it onPress, it could have been anything like whenPressed
  // So important not to confuse with the RN onPress prop that is required by <ToucableOpacity />
  const { textStyle, buttonStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
});
