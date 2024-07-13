//////// tags
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Vibration } from "react-native";

//////// components
import { Camera } from "expo-camera";
import BarcodeMask from "react-native-barcode-mask";
import { BarCodeScanner } from "expo-barcode-scanner";

//////// hooks
import { useDispatch, useSelector } from "react-redux";

//////// fns
import { dataCardFN } from "../../../store/reducers/stateSlice";

////// styles
import styles from "./style";

export const ScannerCardScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const { dataCard } = useSelector((state) => state.stateSlice);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const showResultModal = async ({ data }) => {
    if (data && !scanned) {
      setScanned(true);

      Vibration.vibrate();
      dispatch(dataCardFN({ ...dataCard, card: data }));
      navigation.navigate("AddCardScreen");
    }
  };

  if (!hasPermission) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Разрешите доступ к камере в настройках вашего устройства!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : showResultModal}
        style={StyleSheet.absoluteFillObject}
      >
        <BarcodeMask
          edgeColor={"rgba(12, 169, 70, 0.9)"}
          edgeRadius={10}
          width={280}
          height={280}
          animatedLineColor={"#f32a2a"}
          animatedLineHeight={2}
          animatedLineWidth={"97%"}
          showAnimatedLine={true}
          outerMaskOpacity={0.7}
          useNativeDriver={false}
          edgeBorderWidth={5}
        />
      </BarCodeScanner>
    </View>
  );
};

export default ScannerCardScreen;
