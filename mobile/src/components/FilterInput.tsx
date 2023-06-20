import { Button as NativeBaseButton, Input as NativeBaseInput, IInputProps, FormControl, Pressable, Icon, HStack, useTheme, Text, Modal, Heading, Checkbox, CircleIcon, Switch } from "native-base";

import { MagnifyingGlass, Sliders } from 'phosphor-react-native';
import { useState } from "react";
import { Input } from "./Input";
import { useForm, Controller} from "react-hook-form";
import { Button } from "./Button";


type Props = IInputProps & {
    errorMessage?: string | null
}

type FormData = {
    name: string;
    payment_methods: string[];
}

export function FilterInput({ errorMessage = null, isInvalid, ...rest}: Props) {

    const theme = useTheme()

    const [showFilters, setShowFilters] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

    const invalid = !!errorMessage || isInvalid

    function handleFilter() {
        console.log('handleFilter!')
    }
        
    function handleOpenFilterConfigs() {
        setShowFilters(true)
        console.log('apertado!')
    }

    return (
        <FormControl isInvalid={invalid}>

            <Controller 
                control={control}
                name="name"
                // rules={{required: 'Informe o e-mail.'}}
                render={({field: {onChange}}) => (
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
                        InputRightElement={
                            <HStack mr={4}>
                                <Pressable onPress={handleFilter} ml={3}>
                                    <MagnifyingGlass size={20} color={theme.colors.gray[200]} />
                                </Pressable>
                                <Text color={theme.colors.gray[400]} ml={3}>|</Text>
                                <Pressable onPress={handleOpenFilterConfigs} ml={3}>
                                    <Sliders size={20} color={theme.colors.gray[200]} />
                                </Pressable>
                            </HStack>
                            }
                    />
                )}
            />
         
            <FormControl.ErrorMessage _text={{color: 'red.500'}}>
                {errorMessage}
            </FormControl.ErrorMessage>

            <Modal isOpen={showFilters} onClose={() => setShowFilters(false)} size='full'  >
                <Modal.Content marginBottom={0} marginTop="auto" h='580px' pt={16} px={6} pb={8}>
                <Modal.CloseButton pt={16} />

                <Heading fontSize='lg' color='gray.100' fontFamily='heading' mb={6}>
                        Filtrar anúncios
                </Heading>
                <Modal.Body p={0}>
                    <FormControl>
                    <Heading fontFamily='heading' fontSize='sm' color='gray.200' mb={3}>Condição</Heading>
                    <HStack pb={6}>
                        <Button 
                            title="NOVO"
                            w='76px'
                            h='28px'
                            borderRadius={999}
                            p={0}
                        />
                        <Button 
                            title="USADO"
                            w='76px'
                            h='28px'
                            borderRadius={999}
                            p={0}
                        />
                    </HStack>
                    <Heading fontFamily='heading' fontSize='sm' color='gray.200' mb={3}>Aceita troca?</Heading>
                    <Switch size="sm" color='gray.50' />
                    <Heading fontFamily='heading' fontSize='sm' color='gray.200' mb={3} mt={6}>Meios de pagamento aceitos</Heading>

                    
                            <Checkbox.Group colorScheme="lightBlue" defaultValue={[]} accessibilityLabel="pick an item" onChange={e => console.log(e)}>
                                <Checkbox value="boleto" my="1">
                                    Boleto                                   
                                </Checkbox>
                                <Checkbox value="Writing" my="1">
                                    Pix
                                </Checkbox>
                                <Checkbox value="Gardening" my="1">
                                    Dinheiro
                                </Checkbox>
                                <Checkbox value="Cooking" my="1">
                                    Cartão de Crédito
                                </Checkbox>
                                <Checkbox value="Cooking" my="1">
                                    Depósito Bancário
                                </Checkbox>
                            </Checkbox.Group>
                     
                    <HStack mt={8} justifyContent='space-between'>
                        <Button 
                            variant="gray-light"
                            title="Resetar filtros"
                            w='48%'
                            h='42px'
                            borderRadius={6}
                            p={0}
                        />
                        <Button 
                            title="Aplicar filtros"
                            w='48%'
                            h='42px'
                            borderRadius={6}
                            p={0}
                        />
                    </HStack>
                    
                                
                    </FormControl>
                </Modal.Body>

                </Modal.Content>
            </Modal>
        </FormControl>
    )
}