// Modules
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

// Contexts
import { useCart } from '../hooks/cart';
import { useTheme } from '../hooks/theme';

// Pages
import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';

// Assets
import Logo from '../assets/logo.png';
import LogoDark from '../assets/logo-dark.png';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  const { products, cleanCart } = useCart();

  const { toogleTheme, theme } = useTheme();

  return (
    <App.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: { backgroundColor: theme.shapesBackgrounds.primary },
      }}
      initialRouteName="Dashboard"
    >
      <App.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => (
            <Image source={theme.title === 'dark' ? LogoDark : Logo} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={toogleTheme}
              style={{
                padding: 12,
                backgroundColor: theme.shapesBackgrounds.secondary,
                borderRadius: 5,
              }}
            >
              <FeatherIcon
                name={theme.title === 'dark' ? 'sun' : 'moon'}
                color={theme.colors.primary}
                size={16}
              />
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            marginRight: 20,
          },
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <App.Screen
        options={{
          headerTransparent: true,
          headerTitle: () => (
            <Image source={theme.title === 'dark' ? LogoDark : Logo} />
          ),
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerRightContainerStyle: {
            marginRight: 25,
          },

          headerBackImage: () => (
            <FeatherIcon color="#a0a0b3" name="chevron-left" size={24} />
          ),
          headerRight: () =>
            products.length !== 0 ? (
              <TouchableOpacity
                onPress={cleanCart}
                style={{
                  padding: 12,
                  backgroundColor: theme.shapesBackgrounds.secondary,
                  borderRadius: 5,
                }}
              >
                <FeatherIcon name="x" color={theme.colors.primary} size={16} />
              </TouchableOpacity>
            ) : (
              <></>
            ),
        }}
        name="Cart"
        component={Cart}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
