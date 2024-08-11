import { Pressable } from "react-native";
import { TabBarIcon, TabBarIconProps } from "./navigation/TabBarIconNav";

type WithPressableIconProps = TabBarIconProps & {
    actionPress: () => void;
};

function withPressableIcon(Component: React.ComponentType<TabBarIconProps>) {
    return function WrappedComponent({ actionPress, ...props }: WithPressableIconProps) {
        return (
            <Pressable onPress={actionPress}>
                <Component {...props} />
            </Pressable>
        );
    };
}

export const PressableTabBarIconHOC = withPressableIcon(TabBarIcon);