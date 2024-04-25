import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SvgXml} from 'react-native-svg';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const swipe = `<svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path  d="m5 8 7-7 7 7" />
</svg>`;

type Props = {};

const SwipeUpSvg = (props: Props) => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withSpring(-30, {duration: 500}),
        withTiming(0, {duration: 500}),
      ),
      -1,
    );
  }, []);

  const AnimatedStyleLayer1 = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));
  const AnimatedStyleLayer2 = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value - 20}],
  }));
  const AnimatedStyleLayer3 = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value - 40}],
  }));

  return (
    <>
      <Animated.View id="layer 1" style={AnimatedStyleLayer1}>
        <SvgXml
          xml={swipe}
          scaleX={2}
          scaleY={2}
          width={45}
          height={45}
          stroke={'red'}
        />
      </Animated.View>
      <Animated.View id="layer 2" style={AnimatedStyleLayer2}>
        <SvgXml
          xml={swipe}
          scaleX={2}
          scaleY={2}
          width={45}
          height={45}
          stroke={'red'}
        />
      </Animated.View>
      <Animated.View id="layer 3" style={AnimatedStyleLayer3}>
        <SvgXml
          xml={swipe}
          scaleX={2}
          scaleY={2}
          width={45}
          height={45}
          stroke={'red'}
        />
      </Animated.View>
    </>
  );
};

export default SwipeUpSvg;

const styles = StyleSheet.create({});
