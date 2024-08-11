import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Foundation from '@expo/vector-icons/Foundation';
import Octicons from '@expo/vector-icons/Octicons';
import { FontAwesome } from '@expo/vector-icons';

type IoniconsNames = keyof typeof Ionicons.glyphMap;
type FoundationNames = keyof typeof Foundation.glyphMap;
type OcticonsNames = keyof typeof Octicons.glyphMap;
type FontAwesomeNames = keyof typeof FontAwesome.glyphMap;

type IconFamilyProps =
  | { family: 'Ionicons'; name: IoniconsNames }
  | { family: 'Foundation'; name: FoundationNames }
  | { family: 'Octicons'; name: OcticonsNames }
  | { family: 'FontAwesome'; name: FontAwesomeNames };

type TabBarIconProps = IconFamilyProps & {
  color: string;
  style?: any;
  onPress?: () => void
  size?: number
};

export function TabBarIcon({ family, name, color, style, onPress, size = 28 }: TabBarIconProps) {
  const IconComponent =
    family === 'Ionicons' ? Ionicons
      : family === 'Foundation' ? Foundation
        : family === 'FontAwesome' ? FontAwesome : Octicons;

  return <IconComponent onPress={onPress} name={name as any} size={size} color={color} style={[{ marginBottom: -3 }, style]} />;
}
