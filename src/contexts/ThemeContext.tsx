import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Appearance } from "react-native";

type ThemeMode = "light" | "dark" | "system";

type ThemeContextType = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  mode: "system",
  setMode: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { setColorScheme } = useColorScheme();
  const [mode, setModeState] = useState<ThemeMode>("system");

  useEffect(() => {
    AsyncStorage.getItem("theme").then((saved) => {
      if (saved) applyMode(saved as ThemeMode);
    });
  }, []);

  const applyMode = async (newMode: ThemeMode) => {
    setModeState(newMode);
    await AsyncStorage.setItem("theme", newMode);

    if (newMode === "system") {
      setColorScheme(Appearance.getColorScheme() ?? "light");
    } else {
      setColorScheme(newMode);
    }
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode: applyMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
