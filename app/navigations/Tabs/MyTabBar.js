import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const MyTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.barContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const TabIcon = options.tabBarIcon;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.barButton}>
            {/* {options.tabBarIcon && options.tabBarIcon()} */}

            <TabIcon />

            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default MyTabBar;

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
    height: '10%',
    marginLeft: 100,
    borderRadius: 10,
  },
  barButton: {
    flex: 1,
    alignItems: 'center',
    borderTopColor: 'red',
    borderTopWidth: 2,
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // SHADOW
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 34,
  },

  AdvanceButtonContainer: {
    position: 'relative',
    alignItems: 'center',
    width: 75,
  },
  buttonbg: { position: 'absolute', top: 0 },
  buttonItself: {
    height: 50,
    width: 50,
    backgroundColor: '#E94F37',
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    top: -22,
    color: 'white',
  },
});
