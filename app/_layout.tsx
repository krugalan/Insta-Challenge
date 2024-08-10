import { Slot, SplashScreen } from 'expo-router';
import { SessionProvider } from '@/utils/ctx';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

export default function Root() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <SessionProvider>
            <Slot />
        </SessionProvider>
    );
}
