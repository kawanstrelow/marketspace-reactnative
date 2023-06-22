import { Button as NativeBaseButton, IButtonProps, Text, HStack, Icon } from "native-base";
import { Circle } from "phosphor-react-native";
import { createElement } from "react";

type Props = IButtonProps & {
    title: string;
    variant?: 'gray-dark' | 'blue' | 'gray-light';
    children?: any;
}

export function Button({title, variant = 'gray-dark', children, ...rest} : Props) {
    
    const buttonColor = variant === 'gray-dark' ? 'gray.100' : variant === 'blue' ? 'blue.200' : 'gray.500'
    const textColor = variant === 'gray-dark' ? 'gray.700' : variant === 'blue' ? 'gray.700' : 'gray.200'

    return (
        <NativeBaseButton
            w='100%'
            h={12}
            bg={buttonColor}
            borderWidth={0}
            borderRadius={6}

            _pressed={{
                bg: buttonColor,
            }}  
            {...rest}
            
        >
            <HStack alignItems='center'>
                {children}
                <Text 
                    color={textColor}
                    fontFamily='heading'
                    fontSize='sm'
                    ml={children ? 2 : 0}
                >
                    {title}
                </Text>
            </HStack>
            
                
        </NativeBaseButton>
    )
}