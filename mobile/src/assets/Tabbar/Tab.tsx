import React, { ReactElement, cloneElement } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { ICON_SIZE } from "./icons/Constants";

interface TabProps {
  children: ReactElement;
  onPress: () => void;
  active: number;
  index: number;
}

const styles = StyleSheet.create({});

export default ({ children, active, index, onPress }: TabProps) => {
  const isActive = active === index;
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <View
        style={{
          width: ICON_SIZE,
          height: ICON_SIZE
        }}
      >
        {cloneElement(children, { active: isActive })}
      </View>
    </TouchableWithoutFeedback>
  );
};
