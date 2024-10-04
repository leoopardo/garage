/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#75389A';
const tintColorDark = '#75389A';

export const Colors = {
  light: {
    text: '#1E1E1E',
    background: '#FDFDFD',
    tint: tintColorLight,
    tintPressed: '#5E2A8A',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    info: '#388e9a',
    error: '#9a3838',
  },
  dark: {
    text: '#FDFDFD',
    background: '#1E1E1E',
    tint: tintColorDark,
    tintPressed: '#5E2A8A',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    info: '#388e9a',
    error: '#9a3838',
  },
};
