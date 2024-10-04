import { StyleSheet, useColorScheme, View } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

export function Steps({
  steps,
  current,
}: {
  steps: number;
  current: number;
}) {
  const theme = useColorScheme() ?? "light";
  
  const getStepSize = (index: number) => {
    const middleIndex = Math.floor((steps - 1) / 2);
    const distanceFromMiddle = Math.abs(index - middleIndex);
    if (steps % 2 === 0 && (index === middleIndex || index === middleIndex + 1)) {
      return 32;
    }
    return 32 - distanceFromMiddle * 8;
  };

  return (
    <ThemedView style={styles.stepsContainer}>
      {new Array(steps).fill(null).map((_, index) => {
        const stepSize = getStepSize(index);
        return (
          <View
            key={index}
            style={{
              ...styles.step,
              width: stepSize,
              height: stepSize / 2, // altura proporcional
              backgroundColor:
                index + 1 === current
                  ? Colors[theme as "dark" | "light"].tint
                  : styles.stepInactive.backgroundColor,
            }}
          />
        );
      })}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  stepsContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  step: {
    borderRadius: 8,
  },
  stepInactive: {
    backgroundColor: Colors.light.icon,
  },
});
