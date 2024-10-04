import { Button, Image, StyleSheet, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Steps } from "@/components/Steps";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { useState } from "react";

export default function HomeScreen() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const theme = useColorScheme();

  const steps = [
    {
      image: require("@/assets/images/start-img.png"),
      title: "Controle totalmente os seus veículos",
      subtitle:
        "Com o garage você pode controlar tudo sobre os seus veículos de forma simples e rápida.",
      next: {
        title: "Começar o tour",
        onPress: () => {
          setCurrentStep((prev) => prev + 1);
        },
      },
    },
    {
      image: require("@/assets/images/step-1.png"),
      title: "Cadastre seus veículos",
      subtitle:
        "Cadastre os veículos da sua garagem e as informações detalhadas de suas ultimas manutenções.",
      next: {
        title: "Próximo",
        onPress: () => {
          setCurrentStep((prev) => prev + 1);
        },
      },
    },
    {
      image: require("@/assets/images/step-2.png"),
      title: "Receba lembretes",
      subtitle:
        "Geraremos lembretes personalizados para o seu veículo com as datas mais apropriadas para manutenção de acordo com o histórico e o modelo do seu veículo.",
      next: {
        title: "Próximo",
        onPress: () => {
          setCurrentStep((prev) => prev + 1);
        },
      },
    },
    {
      image: require("@/assets/images/step-3.png"),
      title: "Reduza seus gastos com imprevistos.",
      subtitle:
        "Nossos lembretes e diagnósticos de ruídos por IA evitarão imprevistos mecânicos nos seus veículos.",
      next: {
        title: "Ir para a minha garagem",
        onPress: () => {
          setCurrentStep(0);
        },
      },
    },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image source={steps[currentStep].image} style={styles.reactLogo} />
      }
    >
      <Steps current={currentStep} steps={steps.length - 1} />
      <View style={styles.titleContainer}>
        <ThemedText style={styles.title} type="title">
          {steps[currentStep].title}
        </ThemedText>
        <ThemedText style={styles.subtitle} type="default">
          {steps[currentStep].subtitle}
        </ThemedText>
      </View>
      <Button
        title={steps[currentStep].next.title}
        onPress={steps[currentStep].next.onPress}
      />
      <View
        style={{
          ...styles.footerBotonsContainer,
          justifyContent: currentStep >= 1 ? "space-between" : "center",
        }}
      >
        {currentStep >= 1 && (
          <Button
            color={Colors[theme as "dark" | "light"].background}
            title="Voltar"
            onPress={() => setCurrentStep((step) => step - 1)}
          />
        )}
        <Button title="Pular" />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: "90%",
    textAlign: "center",
  },
  subtitle: {
    width: "110%",
    textAlign: "center",
    opacity: 0.8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  nextButton: {
    width: "100%",
    padding: 16,
    backgroundColor: Colors.light.tint,
    height: 48,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  footerBotonsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 16,
  },
});
