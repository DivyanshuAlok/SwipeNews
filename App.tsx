import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useRef, useEffect} from 'react';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {SvgXml} from 'react-native-svg';

const swipe = `<svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path  d="m5 8 7-7 7 7" />
  <path  d="m5 14 7-7 7 7" />
  <path  d="m5 20 7-7 7 7" />
</svg>`;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  const fadeInOpacity = useSharedValue(0);
  const moveTop = useSharedValue(0);

  // const fadeIn = useRef(new Animated.Value(0)).current;
  // // const moveTop = useRef(new Animated.Value(0)).current;
  // const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    fadeInOpacity.value = withTiming(1, {
      duration: 1000,
    });
    moveTop.value = withSpring(-200);
  }, []);

  return (
    <View style={styles.conatiner}>
      <Animated.View
        style={{
          opacity: fadeInOpacity,
          transform: [{translateY: moveTop}],
        }}>
        <Text style={styles.textMain}>Swipe</Text>
        <Text style={styles.textMain}>News</Text>
      </Animated.View>
      <Animated.View>
        <SvgXml
          xml={swipe}
          scaleX={2}
          scaleY={2}
          width={50}
          height={50}
          stroke={'red'}
        />
      </Animated.View>
    </View>
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
