import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ImageBackground,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../../components/logo/index";
import styles from "./style";

const DesenvolvedorasSuporte = () => {
  const openGitHubRepo = (url) => {
    Linking.openURL(url);
  };

  return (
    <ImageBackground
      source={require("../../../../assets/background3.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Logo />

        <View style={styles.iconContainer}>
          <Ionicons name="people-outline" size={28} color="white" />
          <Text style={styles.description}>Desenvolvedoras</Text>
        </View>

        <View style={styles.space} />

        <View style={styles.githubContainer}>
          <AntDesign name="github" size={48} color="white" />
        </View>

        <View style={styles.spaced} />

        <TouchableOpacity
          onPress={() => openGitHubRepo("https://github.com/HachiCna")}
        >
          <View style={styles.fieldContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../../../assets/nana.png")}
                style={styles.image}
              />
              <Text style={styles.selectText}>Ana Caroline Mota Diniz</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.whiteLine} />

        <TouchableOpacity
          onPress={() => openGitHubRepo("https://github.com/gabisnotokay")}
        >
          <View style={styles.fieldContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../../../assets/gabizi.png")}
                style={styles.image}
              />
              <Text style={styles.selectText}>Gabriela Aguiar Lima</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.whiteLine} />

        <TouchableOpacity
          onPress={() => openGitHubRepo("https://github.com/isakauaneesc")}
        >
          <View style={styles.fieldContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../../../assets/isabelly.png")}
                style={styles.image}
              />
              <Text style={styles.selectText}>Isabelly Kauane Soares</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default DesenvolvedorasSuporte;
