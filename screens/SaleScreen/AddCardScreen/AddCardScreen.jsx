/////// tags
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";

/////// style
import styles from "./style";

/////// hooks
import { useDispatch } from "react-redux";
import { TextInput } from "react-native";
import { useState } from "react";

//////// components
import { ViewButton } from "../../../customsTags/ViewButton";
import MaskInput from "react-native-mask-input";

/////// helpers
import { checNumInput, checkNumUser } from "../../../helpers/Data";

/////// img
import camera from "../../../assets/images/camera.png";

////// fns
import { TieCardWithUser } from "../../../store/reducers/requestSlice";
import { transformNumber } from "../../../helpers/transformNumber";

export const AddCardScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({ fio: "", phone: "", card: "" });

  const onChange = (name, text) => {
    const sanitizedText = text.replace(/[.,]/g, "");
    setData({ ...data, [name]: sanitizedText });
  };

  console.log(data?.phone, "data");

  const sendData = () => {
    if (data.fio?.length < 5) {
      Alert.alert("Введите ФИО клиента");
    } else if (!checkNumUser.test(data.phone)) {
      Alert.alert("Введите корректный номер телефона клиента");
    } else if (data.card?.length !== 9) {
      Alert.alert("Введите корректный номер карты");
    } else {
      const dataSend = { ...data, phone: `0${transformNumber(data?.phone)}` };
      dispatch(TieCardWithUser({ dataSend, navigation }));
    }
  };

  return (
    <View style={styles.addCard}>
      <View style={styles.inputBlock}>
        <Text style={styles.inputTitle}>Введите ФИО клиента</Text>
        <TextInput
          style={styles.inputFio}
          value={data?.fio?.toString()}
          onChangeText={(text) => onChange("fio", text)}
          placeholder="Джумабеков Нурдин"
        />
      </View>
      <View style={styles.inputBlock}>
        <Text style={styles.inputTitle}>Введите номер клиента</Text>
        <MaskInput
          style={styles.inputFio}
          value={data?.phone?.toString()}
          onChangeText={(text) => onChange("phone", text)}
          mask={checNumInput}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputBlock}>
        <Text style={styles.inputTitle}>Введите 9ти значный номер карты</Text>
        <View style={styles.numQrCode}>
          <TextInput
            style={styles.inputFioQR}
            value={data?.card?.toString()}
            onChangeText={(text) => onChange("card", text)}
            keyboardType="numeric"
            maxLength={9}
          />
          <TouchableOpacity style={styles.btnOpenQR}>
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
