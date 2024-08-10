import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TabBarIcon } from '@/components/navigation/TabBarIconNav';
import ReelsIcon from '@/components/navigation/ReelsIcon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <QueryClientProvider client={queryClient}>
            <Tabs
                initialRouteName='index'
                screenOptions={{
                    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                    headerShown: false,
                }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon
                                family={focused ? 'Foundation' : 'Octicons'}
                                name={'home'}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="search"
                    options={{
                        title: 'Buscar',
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon
                                family='Ionicons'
                                name={focused ? 'search' : 'search-outline'}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="add"
                    options={{
                        title: 'Agregar',
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon
                                family='FontAwesome'
                                name={focused ? 'plus-square' : 'plus-square-o'}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="reels"
                    options={{
                        title: 'Reels',
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color }) => (
                            <ReelsIcon color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon
                                family='FontAwesome'
                                name={focused ? 'user-circle' : 'user-circle-o'}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tabs>
        </QueryClientProvider>
    );
}
