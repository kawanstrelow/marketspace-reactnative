import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
    title: string;
    variant?: 'gray-dark' | 'blue' | 'gray-light';
}

export function Button({title, variant = 'gray-dark', ...rest} : Props) {
    
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
            <Text 
                color={textColor}
                fontFamily='heading'
                fontSize='sm'
            >
                {title}
            </Text>
        </NativeBaseButton>
    )
}