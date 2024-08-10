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

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
