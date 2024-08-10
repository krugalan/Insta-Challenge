import { useSession } from '@/utils/ctx';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedLink } from '@/components/ThemedLink';

// TODO: Implement feature and components related to SignIn
/**
 * Component for SignIn with  Auth2.0 or Google Sign In or Firebase or email and password etc.
 */
export default function SignIn() {
    const { signIn } = useSession();
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText onPress={signIn}>
                Sign In
            </ThemedText>

            <ThemedLink href={'/terms'}>
                Terms and Conditions
            </ThemedLink>

            <ThemedLink href={'/sign-up'}>
                Sign Up
            </ThemedLink>

            <ThemedLink href={'/recover-password'}>
                Recover Password
            </ThemedLink>
        </ThemedView>
    );
}
