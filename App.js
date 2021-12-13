import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { auth } from './Firebase';

// Import Screens
import Home from './screens/Home';
import RandHotel from './screens/RandHotel';
import HotelInfo from './screens/HotelInfo';
import RoomList from './screens/RoomList';
import RoomInfo from './screens/RoomInfo';
import Payment from './screens/Payment';
import Summary from './screens/Summary';
import Guests from './screens/Guests';
import PaymentMethod from './screens/PaymentMethod';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import UserProfile from './screens/UserProfile';
import Bookings from './components/Bookings';
import Profile from './components/Profile';
import BookingDetails from './components/BookingDetails';
import EditProfile from './components/EditProfile';

const Stack = createStackNavigator();

const myOptions = {
  headerShown: false,
}

function App() {

  const [user, setUser] = useState('')

  // method to check if the user exists on the firebase auth
  useEffect(() => {
    const unregister = auth.onAuthStateChanged(userExist => {
      if (userExist) {
        setUser(userExist);
      } else {
        setUser('')
        
      }
    })
    return () => {
      unregister();
    }
  }, [])

  return (

    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={myOptions}/>
        <Stack.Screen name='RandHotel' component={RandHotel} options={myOptions}/>
        <Stack.Screen name='HotelInfo' component={HotelInfo} options={myOptions}/> 
        <Stack.Screen name='RoomList' component={RoomList} options={myOptions}/>
        <Stack.Screen name='Guests' component={Guests} options={myOptions}/> 
        <Stack.Screen name='RoomInfo' component={RoomInfo} options={myOptions}/>
        <Stack.Screen name='SignUp' component={SignUp} options={myOptions}/>
        <Stack.Screen name='Login' component={Login} options={myOptions}/>
        <Stack.Screen name='Payment' component={Payment} options={myOptions}/>
        <Stack.Screen name='PaymentMethod' component={PaymentMethod} options={myOptions}/>
        <Stack.Screen name='Summary' component={Summary} options={myOptions}/> 
        <Stack.Screen name='UserProfile' component={UserProfile} options={myOptions}/> 
        <Stack.Screen name='Bookings' component={Bookings} options={myOptions}/>
        <Stack.Screen name='Profile' component={Profile} options={myOptions}/>
        <Stack.Screen name='BookingDetails' component={BookingDetails} options={myOptions}/>
        <Stack.Screen name='EditProfile' component={EditProfile} options={myOptions}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F08080',
  },
});






// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import { auth } from './Firebase';

// // Import Screens
// import Home from './screens/Home';
// import RandHotel from './screens/RandHotel';
// import HotelInfo from './screens/HotelInfo';
// import RoomList from './screens/RoomList';
// import RoomInfo from './screens/RoomInfo';
// import Payment from './screens/Payment';
// import Summary from './screens/Summary';
// import Guests from './screens/Guests';
// import PaymentMethod from './screens/PaymentMethod';
// import SignUp from './screens/SignUp';
// import Login from './screens/Login';
// import UserProfile from './screens/UserProfile';
// import Bookings from './components/Bookings';

// const Stack = createStackNavigator();

// const myOptions = {
//   headerShown: false,
// }

// function App() {

//   const [user, setUser] = useState('')

//   // method to check if the user exists on the firebase auth
//   useEffect(() => {
//     const unregister = auth.onAuthStateChanged(userExist => {
//       if (userExist) {
//         setUser(userExist);
//       } else {
//         setUser('')
        
//       }
//     })
//     return () => {
//       unregister();
//     }
//   }, [])

//   return (

//     <View style={styles.container}>
//       <Stack.Navigator>
//         <Stack.Screen name='Home' component={Home} options={myOptions}/>
//         <Stack.Screen name='RandHotel' component={RandHotel} options={myOptions}/>
//         <Stack.Screen name='HotelInfo' component={HotelInfo} options={myOptions}/> 
//         <Stack.Screen name='RoomList' component={RoomList} options={myOptions}/>
//         <Stack.Screen name='Guests' component={Guests} options={myOptions}/> 
//         <Stack.Screen name='RoomInfo' component={RoomInfo} options={myOptions}/>
//              <Stack.Screen name='SignUp' component={SignUp} options={myOptions}/>
//              <Stack.Screen name='Login' component={Login} options={myOptions}/>
//             <Stack.Screen name='Payment' component={Payment} options={myOptions}/>
//             <Stack.Screen name='PaymentMethod' component={PaymentMethod} options={myOptions}/>
//              <Stack.Screen name='Summary' component={Summary} options={myOptions}/> 
//              <Stack.Screen name='UserProfile' component={UserProfile}/> 
//              <Stack.Screen name='Bookings' component={Bookings}/>
//       </Stack.Navigator>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// export default () => {
//   return (
//     <NavigationContainer>
//       <App />
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
