import { StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Link } from 'expo-router';


export type ThemedLinkProps = {
  href: any;
  lightColor?: string;
  darkColor?: string;
  children?: React.ReactNode | undefined;
};

export function ThemedLink({
  href,
  lightColor,
  darkColor,
  ...rest
}: ThemedLinkProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Link style={[{ color }]} href={href}{...rest} />
  );
}
