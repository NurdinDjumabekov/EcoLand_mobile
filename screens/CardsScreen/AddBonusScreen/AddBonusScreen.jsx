/////// tags
import { View, Text, TextInput, Alert } from "react-native";

/////// hooks
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";

//////// components
import { ViewButton } from "../../../customsTags/ViewButton";

//////// fns
import { saleDiscountFN } from "../../../store/reducers/stateSlice";

/////// style
import styles from "./style";

export const AddBonusScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const refInput = useRef(null);

  const [bonuse, setBonuse] = useState("");

  const { obj } = route.params;

  const sendData = () => {
    if (+obj?.bonuse < +bonuse) {
      Alert.alert("Введённая вами сумма больше доступной вам суммы!");
    } else if (bonuse == "") {
      Alert.alert(
        "Поле бонусов не должно быть пустым, если у клиента нет бонусов, то введите 0!"
      );
    } else {
      const { invoice_guid, user_guid } = obj;
      dispatch(saleDiscountFN({ bonuse, user_guid })); ///// state для бонусов
      navigation.navigate("SoldProductScreen", { invoice_guid });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      refInput?.current?.focus();
    }, 200);
  }, []);

  return (
    <View style={styles.addCard}>
      <View style={styles.inputBlock}>
        <Text style={styles.inputTitle}>ФИО клиента</Text>
        <TextInput
          style={styles.inputFio}
          value={obj?.fio?.toString()}
          editable={false}
        />
      </View>
      <View style={styles.inputBlock}>
        <Text style={styles.inputTitle}>Номер карты</Text>
        <View style={styles.numQrCode}>
          <TextInput
            style={styles.inputFioQR}
            value={obj?.number?.toString()}
            editable={false}
          />
        </View>
      </View>
      <View style={styles.inputBlock}>
        <Text style={[styles.inputTitle, styles.blue]}>
          Доступная сумма бонусов
        </Text>
        <View style={styles.numQrCode}>
          <TextInput
            style={[styles.inputFioQR, styles.blue]}
            value={obj?.bonuse?.toString()}
            editable={false}
          />
        </View>
      </View>
      <View style={styles.inputBlock}>
        <Text style={[styles.inputTitle, styles.green]}>
          Количество используемых бонусов
        </Text>
        <View style={styles.numQrCode}>
          <TextInput
            style={[styles.inputFioQR, styles.green]}
            ref={refInput}
            value={bonuse}
            onChangeText={(text) => setBonuse(text)}
            keyboardType="numeric"
            maxLength={9}
            placeholderTextColor={"rgba(66, 67, 68, 0.413)"}
          />
        </View>
      </View>
      <ViewButton styles={styles.addCardBtn} onclick={sendData}>
        Перейти к продаже
      </ViewButton>
    </View>
  );
};
