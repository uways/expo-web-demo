import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { commonStyles } from "../commonstyles";

export default function Index() {
  return (
    <View style={commonStyles.container}>
      <Text>Default route</Text>
      <Link push href="/home" style={commonStyles.link}>
        Home
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
