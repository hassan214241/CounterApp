import React from "react";
import { useState } from "react";
import { View, Text, Button } from "react-native";
import { increment, decNumber } from "../redux/action/counter";
import { useSelector, useDispatch } from "react-redux";

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          title="INCREMENT"
          color="#841584"
          onPress={() => dispatch(increment())}
        />
        <Text></Text>
        <Text style={{ fontSize: 60 }}>{count}</Text>
        <Text></Text>
        <Button
          title="DECREMENT"
          color="#841584"
          onPress={() => dispatch(decNumber())}
        />
      </View>
    </View>
  );
};
