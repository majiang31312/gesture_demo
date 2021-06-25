import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

const Simple_pan = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      /*
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y}
        ],
      ),
      */
      onPanResponderMove: (evt, gestureState) => {
        console.log("in respon!!!!!!!")
       // pan.updatePanPosition(gestureState.moveX, gestureState.moveY)
       rep = 1000
      while(rep--){
        console.log("in resxxpon!!!!!!!"+rep)
      }
        return Animated.event([null, {
          dx: pan.x,
          dy: pan.y,
        }])(evt, gestureState)
      },
      onPanResponderRelease: () => {

        pan.flattenOffset();
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  }
});

export default Simple_pan;