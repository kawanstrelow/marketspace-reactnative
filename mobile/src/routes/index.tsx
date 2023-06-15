import { Box, useTheme } from "native-base";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

export function Routes() {

    const { colors } = useTheme()

    const theme = DefaultTheme
    theme.colors.background = colors.gray['600']

    return (
        <Box flex={1} bg='gray.600'>
            <NavigationContainer theme={theme}>
                <AppRoutes />
            </NavigationContainer>
        </Box>        
    )
}