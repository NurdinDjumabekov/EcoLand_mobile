import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

////// SaleScreen
import MainSaleScreen from "./SaleScreen/MainSaleScreen/MainSaleScreen";
import EverySaleProdScreen from "./SaleScreen/EverySaleProdScreen/EverySaleProdScreen";
import ScannerSaleScreen from "./SaleScreen/ScannerSaleScreen/ScannerSaleScreen";
import { SalePointScreen } from "./SaleScreen/SalePointScreen/SalePointScreen";
import { SoldProductScreen } from "./SaleScreen/SoldProductScreen/SoldProductScreen";
import SaleSearchScreen from "./SaleScreen/SaleSearchScreen/SaleSearchScreen";
import { SoldProdHistoryScreen } from "./SaleScreen/SoldProdHistoryScreen/SoldProdHistoryScreen";

////// CardsScreen
import { AddCardScreen } from "./CardsScreen/AddCardScreen/AddCardScreen";
import ScannerCardScreen from "./CardsScreen/ScannerCardScreen/ScannerCardScreen";
import ScannerAddBonusScreen from "./CardsScreen/ScannerAddBonusScreen/ScannerAddBonusScreen";
import { AddBonusScreen } from "./CardsScreen/AddBonusScreen/AddBonusScreen";

////// LoginScreen
import { LoginScreen } from "./LoginScreen/LoginScreen";

////// AllCategScreen
import AllCategScreen from "./AllCategScreen/AllCategScreen";

////// LeftoversScreen
import { LeftoversScreen } from "./LeftoversScreen/LeftoversScreen";

/////// ReturnScreen
import { MyReturnsScreen } from "./ReturnScreen/MyReturnsScreen/MyReturnsScreen";
import { DetailedInvoiceReturn } from "./ReturnScreen/DetailedInvoiceReturn/DetailedInvoiceReturn";

/////// fns
import { changeLocalData } from "../store/reducers/saveDataSlice";

////// components
import { Preloader } from "../common/Preloader/Preloader";
import LogOut from "../components/Header/LogOut/LogOut";
import UserInfo from "../components/Header/UserInfo/UserInfo";

/////// helpers
import { getLocalDataUser } from "../helpers/returnDataUser";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.saveDataSlice);

  useEffect(() => {
    getLocalDataUser({ changeLocalData, dispatch });
  }, []);

  const checkLogin = !data?.seller_guid;

  return (
    <NavigationContainer>
      <Preloader />
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "#fff" } }}
      >
        {checkLogin ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            {/* /////////////////////// Главная страница ///////////////////////*/}
            <Stack.Screen
              name="AllCategScreen"
              component={AllCategScreen}
              options={({ navigation }) => ({
                title: "",
                headerLeft: () => <UserInfo />,
                headerRight: () => <LogOut navigation={navigation} />,
              })}
            />

            <>
              {/* /////////////////////// Остатки ///////////////////////*/}
              {/* ///////////////////////////////////////////////*/}
              <Stack.Screen
                name="Leftovers"
                component={LeftoversScreen}
                options={{ title: "Остатки" }}
              />
            </>

            <>
              {/* //////////////////////// Продажа /////////////////////////*/}
              {/* ///////////////////////////////////////////////*/}
              <Stack.Screen
                name="MainSaleScreen"
                component={MainSaleScreen}
                options={{ title: "Продажи" }}
              />
              <Stack.Screen
                name="SalePointScreen"
                component={SalePointScreen}
                options={{ title: "Выбор товара" }}
              />
              <Stack.Screen
                name="EverySaleProdScreen"
                component={EverySaleProdScreen}
                options={{ title: "Назад" }} ////// страница продажи каждого товара
              />
              <Stack.Screen
                name="SoldProductScreen"
                component={SoldProductScreen} /// список продаваемых товаров
                options={{ title: "Список продаж" }}
              />
              <Stack.Screen
                name="SaleSearchScreen"
                component={SaleSearchScreen}
                options={{ title: "" }} ////// поиск товаров для продажи
              />
              <Stack.Screen
                name="ScannerSaleScreen"
                component={ScannerSaleScreen}
                options={{ title: "Сканер" }} ////// сканер для продажи товара
              />
              <Stack.Screen
                name="SoldProdHistoryScreen"
                component={SoldProdHistoryScreen}
                options={{ title: "" }}
                ////// список проданных товаров каждой накладной
              />
            </>

            <>
              {/* /////////////////////// Cards page  /////////////////////////*/}
              {/* ///////////////////////////////////////////////*/}
              <Stack.Screen
                name="AddCardScreen"
                component={AddCardScreen}
                options={{ title: "Добавление карты" }} ////// добавляю карту для продавца
              />
              <Stack.Screen
                name="ScannerCardScreen"
                component={ScannerCardScreen}
                options={{ title: "Сканер для карты" }} ////// сканер для продажи товара
              />
              <Stack.Screen
                name="ScannerAddBonusScreen"
                component={ScannerAddBonusScreen}
                options={{ title: "Бонусы" }} ////// сканер для бонусов
              />
              <Stack.Screen
                name="AddBonusScreen"
                component={AddBonusScreen}
                options={{ title: "Бонусы" }} ////// добавляю бонусы к продаже
              />
            </>

            <>
              {/* /////////////////////// Возврат /////////////////////// */}
              {/* ///////////////////////////////////////////////*/}
              <Stack.Screen
                name="MyReturnsScreen"
                component={MyReturnsScreen}
                options={{ title: "Возврат товара" }}
              />
              <Stack.Screen
                name="DetailedInvoiceReturn"
                component={DetailedInvoiceReturn}
                options={{ title: "Принятие накладной" }}
              />
            </>
          </>
        )}
      </Stack.Navigator>
      <StatusBar theme="auto" backgroundColor="rgba(47, 71, 190, 0.287)" />
    </NavigationContainer>
  );
};
