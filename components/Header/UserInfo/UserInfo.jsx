////// tags
import { View, Text } from "react-native";

////// helpers
import { getLocalDataUser } from "../../../helpers/returnDataUser";

////// hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

////// components
import { changeLocalData } from "../../../store/reducers/saveDataSlice";

////style
import styles from "./style";

const UserInfo = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.saveDataSlice);

  useEffect(() => {
    getLocalDataUser({ changeLocalData, dispatch });
  }, []);

  return (
    <View style={styles.parentBlock}>
      <View>
        <Text style={styles.userRole} numberOfLines={1} ellipsizeMode="tail">
          {data?.point_name}
        </Text>
        <Text style={styles.userName} numberOfLines={1} ellipsizeMode="tail">
          {data?.seller_fio}
        </Text>
      </View>
    </View>
  );
};

export default UserInfo;
