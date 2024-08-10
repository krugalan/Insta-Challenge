import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { useSession } from '@/utils/ctx';
import { useColorScheme } from '@/hooks/useColorScheme';

export const unstable_settings = {
    initialRouteName: '(root)',
};

export default function AppLayout() {
    const colorScheme = useColorScheme();
    const { session, isLoading } = useSession();

    // TODO: Uncomment and refactor when Auth is implemented
    // if (isLoading) {
    //     return <Text>Loading...</Text>;
    // }

    // if (!session) {
    //     return <Redirect href="/sign-in" />;
    // }

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Slot />
        </ThemeProvider>
    )
}
