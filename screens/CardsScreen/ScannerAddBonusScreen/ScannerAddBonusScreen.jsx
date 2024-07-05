//////// tags
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Vibration } from "react-native";

//////// components
import { Camera } from "expo-camera";
import BarcodeMask from "react-native-barcode-mask";

//////// hooks
import { useDispatch } from "react-redux";

////// styles
import styles from "./style";

////// fns
import { getBonusCard } from "../../../store/reducers/requestSlice";

export const ScannerAddBonusScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { invoice_guid } = route.params;

  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    // navigation.setOptions({ title: `asdas` });
  }, []);

  const showResultModal = async ({ data }) => {
    if (data && !scanned) {
      setScanned(true);

      Vibration.vibrate();
      dispatch(getBonusCard({ navigation, card_bonus: data, invoice_guid }));
      ////// получаю даанные бонусной карты
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted || hasPermission === null) {
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
      <Camera
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
      </Camera>
    </View>
  );
};

export default ScannerAddBonusScreen;
