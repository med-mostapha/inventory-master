import { Redirect } from "expo-router";

export default function Index() {
  const hasSeenOnboarding = true;

  if (!hasSeenOnboarding) {
    return <Redirect href="/(onboarding)" />;
  }

  return <Redirect href="/(tabs)" />;
}
