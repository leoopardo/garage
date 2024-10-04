import { useColorScheme as _useColorScheme } from 'react-native';

export function useColorScheme() {
  const colorScheme = _useColorScheme();
  return colorScheme || 'light'; // Retorna 'light' como padrão caso o valor seja indefinido
}
