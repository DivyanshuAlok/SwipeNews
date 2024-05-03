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

const timeOut = 50;
const commonDuration = 500;

type Props = {};

const SwipeUpSvg = (props: Props) => {
  const translateY = useSharedValue(0);
  const translateY2 = useSharedValue(0);
  const translateY3 = useSharedValue(0);

  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withSpring(-20, {duration: commonDuration}),
        withTiming(0, {duration: commonDuration}),
      ),
      -1,
    );
    setTimeout(() => {
      translateY2.value = withRepeat(
        withSequence(
          withSpring(-20, {duration: commonDuration}),
          withTiming(0, {duration: commonDuration}),
        ),
        -1,
      );
      setTimeout(() => {
        translateY3.value = withRepeat(
          withSequence(
            withSpring(-20, {duration: commonDuration}),
            withTiming(0, {duration: commonDuration}),
          ),
          -1,
        );
      }, timeOut);
    }, timeOut);
  }, []);

  const AnimatedStyleLayer1 = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));
  const AnimatedStyleLayer2 = useAnimatedStyle(() => ({
    transform: [{translateY: translateY2.value - 20}],
  }));
  const AnimatedStyleLayer3 = useAnimatedStyle(() => ({
    transform: [{translateY: translateY3.value - 40}],
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
