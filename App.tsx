import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useRef, useEffect} from 'react';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  ReduceMotion,
  useAnimatedStyle,
} from 'react-native-reanimated';
import SwipeUpSvg from './src/Component/SwipeUpSvg';
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(0);
  const swipe = useSharedValue(0);
  const fling = Gesture.Fling()
    .direction(Directions.UP)
    .onFinalize(e => {
      console.log('On Finalize', e.y);
      if (e.y < -25) {
        swipe.value = withTiming(-1000);
        opacity.value = withTiming(0);
      }
    });

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 1000,
    });
    setTimeout(() => {
      translateY.value = withSpring(-200, {
        duration: 2000,
      });
    }, 1000);
  }, []);

  const svgAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value + 450 + swipe.value}],
  }));

  return (
    <GestureHandlerRootView style={styles.conatiner}>
      <Animated.View
        style={{
          opacity,
          transform: [{translateY}],
        }}>
        <Text style={styles.textMain}>Swipe</Text>
        <Text style={styles.textMain}>News</Text>
      </Animated.View>
      <Animated.View style={{opacity}}>
        <Text>Swipe up to Fetch News</Text>
      </Animated.View>
      <GestureDetector gesture={fling}>
        <Animated.View style={svgAnimatedStyle}>
          <SwipeUpSvg />
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMain: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'red',
    lineHeight: 70,
  },
});
