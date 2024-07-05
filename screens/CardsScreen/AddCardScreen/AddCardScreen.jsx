/////// tags
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";

/////// style
import styles from "./style";

/////// hooks
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "react-native";
import { useEffect } from "react";

//////// components
import { ViewButton } from "../../../customsTags/ViewButton";
import MaskInput from "react-native-mask-input";

/////// helpers
import { checNumInput, checkNumUser } from "../../../helpers/Data";
import { transformNumber } from "../../../helpers/transformNumber";

/////// img
import camera from "../../../assets/images/camera.png";

////// fns
import { TieCardWithUser } from "../../../store/reducers/requestSlice";
import { dataCardFN } from "../../../store/reducers/stateSlice";

export const AddCardScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { dataCard } = useSelector((state) => state.stateSlice);

  useEffect(() => {
    dispatch(dataCardFN({ fio: "", phone: "", card: "" }));
  }, []);

  const onChange = (name, text) => {
    const sanitizedText = text.replace(/[.,]/g, "");
    dispatch(dataCardFN({ ...dataCard, [name]: sanitizedText }));
  };

  const openCameraQrCard = () => navigation.navigate("ScannerCardScreen");

  const sendData = () => {
    if (dataCard.fio?.length < 5) {
      Alert.alert("Введите ФИО клиента");
    } else if (!checkNumUser.test(dataCard?.phone)) {
      Alert.alert("Введите корректный номер телефона клиента");
    } else if (dataCard.card?.length !== 9) {
      Alert.alert("Введите корректный номер карты");
    } else {
      const dataSend = {
        ...dataCard,
        phone: `0${transformNumber(dataCard?.phone)}`,
      };

      dispatch(TieCardWithUser({ dataSend, navigation }));
    }
  };

  return (
    <View style={styles.addCard}>
      <View style={styles.inputBlock}>
        <Text style={styles.inputTitle}>Введите ФИО клиента</Text>
        <TextInput
          style={styles.inputFio}
          value={dataCard?.fio?.toString()}
          onChangeText={(text) => onChange("fio", text)}
          placeholder="Джумабеков Нурдин"
          placeholderTextColor={"rgba(66, 67, 68, 0.413)"}
        />
      </View>
      <View style={styles.inputBlock}>
        <Text style={styles.inputTitle}>Введите номер клиента</Text>
        <MaskInput
          style={styles.inputFio}
          value={dataCard?.phone?.toString()}
          onChangeText={(text) => onChange("phone", text)}
          mask={checNumInput}
          keyboardType="numeric"
          placeholderTextColor={"rgba(66, 67, 68, 0.413)"}
        />
      </View>
      <View style={styles.inputBlock}>
        <Text style={styles.inputTitle}>Введите 9ти значный номер карты</Text>
        <View style={styles.numQrCode}>
          <TextInput
            style={styles.inputFioQR}
            value={dataCard?.card?.toString()}
            onChangeText={(text) => onChange("card", text)}
            keyboardType="numeric"
            maxLength={9}
            placeholderTextColor={"rgba(66, 67, 68, 0.413)"}
          />
          <TouchableOpacity style={styles.btnOpenQR} onPress={openCameraQrCard}>
            <Image source={camera} style={styles.btnImgQR} />
          </TouchableOpacity>
        </View>
      </View>
      <ViewButton styles={styles.addCardBtn} onclick={sendData}>
        + Прикрепить карту
      </ViewButton>
    </View>
  );
};
