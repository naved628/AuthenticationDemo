import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              { borderColor: error ? "red" : "#e8e8e8" },
            ]}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              style={styles.input}
            />
          </View>
          {error && (
            <Text style={styles.errorText}>{error.message || "Error"}</Text>
          )}
        </>
      )}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    height: 40,
    justifyContent: "center",
  },
  input: {},
  errorText: {
    color: "red",
    alignSelf: "stretch",
  },
});
export default CustomInput;
