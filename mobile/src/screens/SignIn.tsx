import { ScrollView, VStack, useTheme, Text, Image, Center, useToast, Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { Controller, useForm } from 'react-hook-form'

import LogoImgSignIn from '@assets/logosignin.png'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import { AuthNavigationRoutesProps } from '@routes/auth.routes'
import { Eye, Plus } from 'phosphor-react-native'
import { useAuth } from '@hooks/useAuth'
import { AppError } from '@utils/AppError'
import { useState } from 'react'

type FormData = {
    email: string;
    password: string;
}

export function SignIn() {

    const [hidePassword, setHidePassword] = useState(true)

    const navigation = useNavigation<AuthNavigationRoutesProps>()
    const { control, handleSubmit, formState: { errors} } = useForm<FormData>()
    const { signIn } = useAuth()
    const toast = useToast()
    const { colors } = useTheme()

    async function handleSignIn({ email, password}: FormData) {

        try {

            await signIn(email, password)

        } catch (error) {
            
            const isAppError = error instanceof AppError
            const title = isAppError ? error.message : 'Não foi possível entrar. Tente novamente mais tarde.'

            toast.show({
                title, 
                placement: 'top',
                bgColor: 'red.500'
            })
        }   

    }
    
    function handleNewAccount() {
        navigation.navigate('SignUp')
    }

    function handlePasswordShow() {
        setHidePassword(!hidePassword)
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
                                    secureTextEntry={hidePassword}
                                    autoCapitalize='none'
                                    onChangeText={onChange}
                                    errorMessage={errors.email?.message}
                                    InputRightElement={(
                                        <Pressable mr={4} onPress={handlePasswordShow}>
                                            <Eye size={20} color={colors.gray[300]} />
                                        </Pressable>
                                    )}
                                />
                            )}
                        />
                    </Center>

                    <Button 
                        mt={8}
                        title='Entrar'
                        variant='blue'
                        onPress={handleSubmit(handleSignIn)}
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