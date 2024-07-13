//////// tags
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Vibration } from "react-native";

//////// components
import { Camera } from "expo-camera";
import BarcodeMask from "react-native-barcode-mask";
import { BarCodeScanner } from "expo-barcode-scanner";

//////// hooks
import { useDispatch } from "react-redux";

////// styles
import styles from "./style";

////// fns
import { getBonusCard } from "../../../store/reducers/requestSlice";

export const ScannerAddBonusScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { invoice_guid } = route.params;

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

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
      dispatch(getBonusCard({ navigation, card_bonus: data, invoice_guid }));
      ////// получаю даанные бонусной карты
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

export default ScannerAddBonusScreen;
