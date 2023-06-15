import { Input as NativeBaseInput, IInputProps, FormControl } from "native-base";

type Props = IInputProps & {
    errorMessage?: string | null
}

export function Input({ errorMessage = null, isInvalid, ...rest}: Props) {

    const invalid = !!errorMessage || isInvalid

    return (
        <FormControl isInvalid={invalid}>
            <NativeBaseInput 
                bg='gray.700'
                h={12}
                w='100%'
                px={4}
                py={4}
                mb={4}
                borderWidth={0}
                borderRadius={6}
                fontSize='md'
                color='gray.200'
                fontFamily='body'

                placeholderTextColor='gray.400'
                isInvalid={invalid}
                
                _focus={{
                    borderWidth: 1,
                    borderColor: 'gray.300'
                }}
                {...rest}
            />
            <FormControl.ErrorMessage _text={{color: 'red.500'}}>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    )
}