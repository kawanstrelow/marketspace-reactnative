import { Button as NativeBaseButton, Input as NativeBaseInput, IInputProps, FormControl, Pressable, Icon, HStack, useTheme, Text, Modal, Heading, CircleIcon, Switch, Checkbox } from "native-base";

import { MagnifyingGlass, Sliders, XCircle } from 'phosphor-react-native';
import { useState } from "react";
import { Input } from "./Input";
import { useForm, Controller} from "react-hook-form";
import { Button } from "./Button";
import { LogBox } from "react-native";


type Props = IInputProps & {
    errorMessage?: string | null
}

type FormData = {
    name: string;
    is_new: boolean;
    accept_trade: boolean;
    payment_methods: string[];
}

type paymentMethods = string[];

export function FilterInput({ errorMessage = null, isInvalid, ...rest}: Props) {

    LogBox.ignoreLogs([
        'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320',
    ]);

    const theme = useTheme()

    const [showFilters, setShowFilters] = useState(false);
    const [filterSettings, setFilterSettings] = useState<FormData>({} as FormData)
    const [paymentMethods, setPaymentMethods] = useState<paymentMethods>([])

    const invalid = !!errorMessage || isInvalid

    function handleFilter() {
        console.log('handleFilter!')
    }
        
    function handleOpenFilterConfigs() {
        setShowFilters(true)
        console.log('apertado!')
    }

    function handleTextChange(text: string) {
        setFilterSettings({ ...filterSettings, name: text })
    }

    function handlePressFilterNewProducts() {
        setFilterSettings({ ...filterSettings, is_new: true })
    }

    function handlePressFilterUsedProducts() {
        setFilterSettings({ ...filterSettings, is_new: false })
    }

    function handleAcceptTrade() {
        const oldState = filterSettings.accept_trade
        setFilterSettings({ ...filterSettings, accept_trade: !oldState })
    }

    function handlePaymentMethods(data: string[]) {
        const newPaymentMethods = data
        setPaymentMethods(newPaymentMethods)
        setFilterSettings({ ...filterSettings, payment_methods: newPaymentMethods })
    }

    console.log(filterSettings)

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
                        onChangeText={handleTextChange}

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
                            variant={filterSettings.is_new ? 'blue' : 'gray-light'}
                            onPress={handlePressFilterNewProducts} 
                            title="NOVO"
                            minW='76px'
                            w='auto'
                            h='28px'
                            borderRadius={999}
                            p={0}
                            px={2}
                            mr={2}
                            iconPosition="right"
                        >
                            {filterSettings.is_new && <XCircle size={16} color={theme.colors.gray[600]} />}
                        </Button>
                        <Button 
                            variant={!filterSettings.is_new ? 'blue' : 'gray-light'}
                            onPress={handlePressFilterUsedProducts}
                            title="USADO"
                            minW='76px'
                            w='auto'
                            h='28px'
                            borderRadius={999}
                            p={0}
                            px={2}
                            iconPosition="right"
                        >
                            {!filterSettings.is_new && <XCircle size={16} color={theme.colors.gray[600]} />}
                        </Button>
                    </HStack>
                    <Heading fontFamily='heading' fontSize='sm' color='gray.200' mb={3}>Aceita troca?</Heading>
                    <Switch 
                        size="sm" 
                        onChange={handleAcceptTrade}
                        offTrackColor="gray.500" 
                        onTrackColor="blue.200" 
                        onThumbColor="gray.700"
                        offThumbColor="gray.700"
                    />
                    <Heading fontFamily='heading' fontSize='sm' color='gray.200' mb={3} mt={6}>Meios de pagamento aceitos</Heading>

                    <Checkbox.Group accessibilityLabel="choose values" onChange={handlePaymentMethods} value={paymentMethods}>
                        <Checkbox value="boleto" my={1} _checked={{bgColor: 'blue.200', borderColor: 'blue.200'}}>
                            Boleto
                        </Checkbox>
                        <Checkbox value="pix" my={1} _checked={{bgColor: 'blue.200', borderColor: 'blue.200'}}>
                            Pix
                        </Checkbox>
                        <Checkbox value="cash" my={1} _checked={{bgColor: 'blue.200', borderColor: 'blue.200'}}>
                            Dinheiro
                        </Checkbox>
                        <Checkbox value="card" my={1} _checked={{bgColor: 'blue.200', borderColor: 'blue.200'}}>
                            Cartão de Crédito
                        </Checkbox>
                        <Checkbox value="deposit" my={1} _checked={{bgColor: 'blue.200', borderColor: 'blue.200'}}>
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