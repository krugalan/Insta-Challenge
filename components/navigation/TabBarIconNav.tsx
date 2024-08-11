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

export type TabBarIconProps = IconFamilyProps & {
  color?: string;
  style?: any;
  size?: number;
  lightColor?: string;
  darkColor?: string;
};

const DEFAULT_SIZE_ICON = 28;

export function TabBarIcon({ family, name, color, style, size = DEFAULT_SIZE_ICON }: TabBarIconProps) {

  const IconComponent =
    family === 'Ionicons' ? Ionicons
      : family === 'Foundation' ? Foundation
        : family === 'FontAwesome' ? FontAwesome : Octicons;

  return <IconComponent name={name as any} size={size} color={color} style={[{ marginBottom: -3 }, style]} />;
}
