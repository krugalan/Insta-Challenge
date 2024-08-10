import { Link } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

// TODO: Implement feature and components related to RecoverPassword
/**
 * Component for request recover password with an email
 */
export default function RecoverPassword() {
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText>
                Recover Password
            </ThemedText>
            <Link href={'/sign-in'}>
                Sign In
            </Link>
        </ThemedView>
    );
}
