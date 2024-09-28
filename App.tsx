/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserProfileContext } from './src/context/UserProfileContext.js';
import RideShare from './src/userHome/RideShare/RideShare.tsx';
import RideType from './src/userHome/RideShare/RideType.tsx';
import BookRide from './src/userHome/RideShare/BookRide.tsx';
import RideShareHome from './src/userHome/RideShare/RideShareHome.tsx';
import RideDetails from './src/userHome/RideShare/RideDetails.tsx';
import CancelRide from './src/userHome/RideShare/CancelRide.tsx';
import CancelBookingUser from './src/userHome/RideShare/CancelBookingUser.tsx';
import CancelBookingDriver from './src/userHome/RideShare/CancelBookingDriver.tsx';
import RideShareVideo from './src/userHome/RideShare/RideShareVideo.tsx';
import ParkingHome from './src/userHome/Parking/ParkingHome.tsx';
import BookParking from './src/userHome/Parking/BookParking.tsx';
import AddParkingLocation from './src/userHome/Parking/AddParkingLocation.tsx';
import PickParking from './src/userHome/Parking/PickParking.tsx';
import ParkingDetail from './src/userHome/Parking/ParkingDetail.tsx';
// import ParkingSlot from './src/userHome/Parking/ParkingSlot.tsx';
import RideHistory from './src/userHome/History/RideHistory.tsx';
import LiveSession from './src/userHome/LiveSession/LiveSession.tsx';
// import SessionSummary from './src/userHome/LiveSession/SessionSummary.tsx';
import EndSession from './src/userHome/LiveSession/EndSession.tsx';
import LocateDryCleaning from './src/DriverHome/LocateDryCleaning.tsx';
import LandingPage from './src/auth/LandingPage.tsx';
import ForgotPassword from './src/auth/ForgotPassword.tsx';
import EmailVerifySuccess from './src/auth/EmailVerifySuccess.tsx';
import EmailVerify from './src/auth/EmailVerify.tsx';
import ForgotPasswordEmail from './src/auth/ForgotPasswordEmail.tsx';
import Personalinfo from './src/auth/Personalinfo.tsx';
import NumberVerifysuccess from './src/auth/NumberVerifysuccess.tsx';
import NumberVerify from './src/auth/NumberVerify.tsx';
import SignUp from './src/auth/SignUp.tsx';
import Login from './src/auth/Login.tsx';
import Home from './src/auth/Home.tsx';
import MarchantHome from './src/HomeSection/MarchantHome.tsx';
import DriverHome from './src/HomeSection/DriverHome.tsx';
import UserHome from './src/HomeSection/UserHome.tsx';
import MyProfile from './src/menu/Myprofile/MyProfile.tsx';
import EditProfile from './src/menu/Myprofile/EditProfile.tsx';
import FareCard from './src/menu/Farecard/FareCard.tsx';
import ContactUs from './src/menu/ContatcUS/ContactUs.tsx';
import ResetPassword from './src/menu/ResetPassword/ResetPassword.tsx';
import SearchPage from './src/menu/Search/Search.tsx';
import Wallet from './src/menu/Wallet/Wallet.tsx';
import NotificationPage from './src/menu/Notification/NotificationPage.tsx';
// import HistoryDetail from './src/menu/Wallet/HistoryDetail.js';
import Deposit from './src/menu/Wallet/Deposit.tsx';
import SelectMethod from './src/menu/Wallet/SelectMethod.tsx';
import Withdraw from './src/menu/Wallet/Withdraw.tsx';
import DepositPayment from './src/menu/Wallet/DepositPayment.tsx';
import AddBank from './src/menu/Wallet/AddBank.tsx';
import DepositMoney from './src/menu/Wallet/DepositMoney.tsx';
import DepositSummary from './src/menu/Wallet/DepositSummary.tsx';
import ChangeCard from './src/menu/Wallet/ChangeCard.tsx';
import DepositSuccess from './src/menu/Wallet/DepositSuccess.tsx';
import WithdrawMoney from './src/menu/Wallet/WithdrawMoney.tsx';
import WithdrawSummary from './src/menu/Wallet/WithdrawSummary.tsx';
import WithdrawSuccess from './src/menu/Wallet/WithdrawSuccess.tsx';
import AddFairCard from './src/menu/Farecard/AddFairCard.tsx';
import AddCard from './src/menu/Wallet/AddCard.tsx';
import { StatusBar, Text } from 'react-native';
import Tips from './src/menu/TipsAndInfo/Tips.tsx';
import UnsafeSports from './src/menu/TipsAndInfo/UnsafeSports.tsx';
import MarkOnMap from './src/menu/TipsAndInfo/MarkOnMap.tsx';
import ContactPublicMetro from './src/menu/TipsAndInfo/ContactPublicMetro.tsx';
import Setting from './src/menu/Setting/Setting.tsx';
import CookiePolicy from './src/menu/Setting/CookiePolicy.tsx';
import PrivacyPolicy from './src/menu/Setting/PrivacyPolicy.tsx';
import ParkingSlot from './src/userHome/Parking/ParkingSlot.jsx';
import SessionSummary from './src/userHome/LiveSession/SessionSummary.tsx';
import HistoryDetail from './src/menu/Wallet/HistoryDetail.tsx';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <UserProfileContext>
      <NavigationContainer>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
        // translucent={true}
        />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen
            name="CancelBookingDriver"
            component={CancelBookingDriver}
          /> */}
          {/* <Stack.Screen name="DateTimePick" component={DateTimePick} /> */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="NumberVerify" component={NumberVerify} />
          <Stack.Screen
            name="NumberVerifysuccess"
            component={NumberVerifysuccess}
          />
          <Stack.Screen name="Personalinfo" component={Personalinfo} />

          <Stack.Screen
            name="ForgotPasswordEmail"
            component={ForgotPasswordEmail}
          />
          <Stack.Screen name="EmailVerify" component={EmailVerify} />
          <Stack.Screen
            name="EmailVerifySuccess"
            component={EmailVerifySuccess}
          />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="FareCard" component={FareCard} />
          <Stack.Screen name="AddFareCard" component={AddFairCard} />
          <Stack.Screen name="ContactUs" component={ContactUs} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="SearchPage" component={SearchPage} />
          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen name="NotificationPage" component={NotificationPage} />
          <Stack.Screen name="HistoryDetail" component={HistoryDetail} />
          <Stack.Screen name="Deposit" component={Deposit} />
          <Stack.Screen name="SelectMethod" component={SelectMethod} />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="Withdraw" component={Withdraw} />
          <Stack.Screen name="DepositPayment" component={DepositPayment} />
          <Stack.Screen name="AddBank" component={AddBank} />
          <Stack.Screen name="DepositMoney" component={DepositMoney} />
          <Stack.Screen name="DepositSummary" component={DepositSummary} />
          <Stack.Screen name="ChangeCard" component={ChangeCard} />
          <Stack.Screen name="DepositSuccess" component={DepositSuccess} />
          <Stack.Screen name="WithdrawMoney" component={WithdrawMoney} />
          <Stack.Screen name="WithdrawSummary" component={WithdrawSummary} />
          <Stack.Screen name="WithdrawSuccess" component={WithdrawSuccess} />
          <Stack.Screen name="UserHome" component={UserHome} />
          <Stack.Screen name="RideShareHome" component={RideShareHome} />
          <Stack.Screen name="RideShare" component={RideShare} />
          <Stack.Screen name="RideType" component={RideType} />
          <Stack.Screen name="BookRide" component={BookRide} />
          <Stack.Screen name="RideDetails" component={RideDetails} />
          <Stack.Screen name="CancelRide" component={CancelRide} />
          <Stack.Screen
            name="CancelBookingUser"
            component={CancelBookingUser}
          />
          <Stack.Screen name="RideHistory" component={RideHistory} />
          <Stack.Screen name="LiveSession" component={LiveSession} />
          <Stack.Screen name="SessionSummary" component={SessionSummary} />
          <Stack.Screen name="EndSession" component={EndSession} />
          <Stack.Screen name="RideShareVideo" component={RideShareVideo} />
          <Stack.Screen name="ParkingHome" component={ParkingHome} />
          <Stack.Screen name="BookParking" component={BookParking} />
          <Stack.Screen name="ParkingSlot" component={ParkingSlot} />
          <Stack.Screen
            name="AddParkingLocation"
            component={AddParkingLocation}
          />
          <Stack.Screen name="PickParking" component={PickParking} />
          <Stack.Screen name="ParkingDetail" component={ParkingDetail} />

          <Stack.Screen name="MarchantHome" component={MarchantHome} />
          <Stack.Screen name="DriverHome" component={DriverHome} />
          <Stack.Screen
            name="LocateDryCleaning"
            component={LocateDryCleaning}
          />
          <Stack.Screen name="Tips" component={Tips} />
          <Stack.Screen name="UnsafeStops" component={UnsafeSports} />
          <Stack.Screen name="MarkOnMap" component={MarkOnMap} />
          <Stack.Screen name="ContactPublicMetro" component={ContactPublicMetro} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="CookiePolicy" component={CookiePolicy} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />

        </Stack.Navigator>
      </NavigationContainer>
    </UserProfileContext>
  );
}

export default App;

// ./gradlew assembleRelease
// ./gradlew clean
