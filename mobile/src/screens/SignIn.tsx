import { ScrollView, VStack, useTheme, Text, Image, Center } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { Controller, useForm } from 'react-hook-form'

import LogoImgSignIn from '@assets/logosignin.png'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import { AuthNavigationRoutesProps } from '@routes/auth.routes'
import { Plus } from 'phosphor-react-native'

type FormData = {
    email: string;
    password: string;
}

export function SignIn() {

    const navigation = useNavigation<AuthNavigationRoutesProps>()

    const { control, handleSubmit, formState: { errors} } = useForm<FormData>()

    function handleNewAccount() {
        navigation.navigate('SignUp')
    }

    return (
        <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
        >

            <VStack 
                bg='gray.600' 
                mt={10}
                pb={12} 
                px={12}
                
                borderBottomLeftRadius={24}
                borderBottomRightRadius={24}
            >
                <Center mt={16}>

                    <Image 
                        source={LogoImgSignIn}
                        defaultSource={LogoImgSignIn}
                        alt='Logo'
                        mb={16}
                    />
                
                </Center>
                
                <Center>
                    <Text color='gray.200' fontSize='sm' mb={4}>
                        Acesse sua conta
                    </Text>

                    <Center>
                        <Controller 
                            control={control}
                            name="email"
                            rules={{required: 'Informe o e-mail.'}}
                            render={({field: {onChange}}) => (
                                <Input
                                    placeholder='E-mail'
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    onChangeText={onChange}
                                    errorMessage={errors.email?.message}
                                    
                                />
                            )}
                        />
                    </Center>

                    <Center>
                        <Controller 
                            control={control}
                            name="password"
                            rules={{required: 'Informe a senha.'}}
                            render={({field: {onChange}}) => (
                                <Input
                                    placeholder='Senha'
                                    secureTextEntry
                                    autoCapitalize='none'
                                    onChangeText={onChange}
                                    errorMessage={errors.email?.message}
                                    
                                />
                            )}
                        />
                    </Center>

                    <Button 
                        mt={8}
                        title='Entrar'
                        variant='blue'
                    />

                </Center>
            </VStack>

            <VStack 
                flex={1} 
                bg='gray.700' 
                pt={10} 
                px={12}
            >
                <Center>
                    <Text mb={4}>
                        Ainda não tem acesso?
                    </Text>
                    <Button 
                        title='Criar uma conta'
                        variant='gray-light'
                        onPress={handleNewAccount}
                    />
                </Center>
            </VStack>
        </ScrollView>
    )
}