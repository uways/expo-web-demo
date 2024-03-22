import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { commonStyles } from "../commonstyles";

export default function Home() {
  return (
    <View style={commonStyles.container}>
      <Text>Home</Text>
      <StatusBar style="auto" />
      <View>
        <Link push href="/blog/1" style={commonStyles.link}>
          Blog 1
        </Link>
        <Link push href="/blog/2" style={commonStyles.link}>
          Blog 2
        </Link>
      </View>
    </View>
  );
}
