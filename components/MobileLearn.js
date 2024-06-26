import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";

const imageSource = require("../assets/adaptive-icon.png");

const ButtonPress = () => {
  console.log("Button Pressed");
};

const ImagePressable = () => {
  console.log("Image Pressed");
};
const TextPressable = () => {
  console.log("Text Pressed");
};

export default function MobileLearn() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isActivityIndicationVisibile, setActivityIndicatorVisible] =
    useState(false);
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="green" hidden />
      <ScrollView>
        <Pressable onPress={ImagePressable}>
          <Image source={imageSource} style={styles.imageStyle} />
          <ActivityIndicator
            size="large"
            color="red"
            animating={isActivityIndicationVisibile}
          />
          <View style={styles.loadButton}>
            <Button
              title="Load ON"
              onPress={() => setActivityIndicatorVisible(true)}
            />
            <Button
              title="Load OFF"
              onPress={() => setActivityIndicatorVisible(false)}
            />
          </View>
        </Pressable>

        <Pressable onPress={TextPressable}>
          <Text>
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?"
          </Text>
        </Pressable>
        <Button
          title="Click"
          onPress={() => setIsModalVisible(true)}
          color="red"
          style={styles.buttonStyle}
        />

        <Modal
          visible={isModalVisible}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.styleModal}>
            <Text style={{ color: "white" }}>Hi, Hello from Modal</Text>
            <Button title="Close" onPress={() => setIsModalVisible(false)} />
          </View>
        </Modal>
        <Button
          title="Alert Button"
          onPress={() =>
            Alert.alert("DANGER", "Click OK", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ])
          }
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "red",
    color: "tomato",
  },
  imageStyle: {
    flex: 2,
    height: 300,
    width: 300,
  },
  loadButton: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 10,
    padding: 1,
  },
  styleModal: {
    backgroundColor: "red",
    flex: 1,
    color: "wheat",
    justifyContent: "center",
    alignItems: "center",
  },
});
