import { Controller, useForm } from 'react-hook-form'
import { ScrollView, VStack, useTheme, Text, Image, Center, Heading, Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import LogoImgSignUp from '@assets/logosignup.png'
import AvatarImg from '@assets/avatarimg.png'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import { AuthNavigationRoutesProps } from '@routes/auth.routes'
import { Eye, Plus } from 'phosphor-react-native'
import { useState } from 'react'

type FormData = {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirm_password: string;
}

export function SignUp() {

    const [hidePassword, setHidePassword] = useState(true)
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true)

    const theme = useTheme()
    const { colors } = useTheme()
    const navigation = useNavigation<AuthNavigationRoutesProps>()

    const { control, handleSubmit, formState: { errors} } = useForm<FormData>()

    function handleAlreadyHaveAnAccount() {
        navigation.navigate('SignIn')
    }

    function handlePasswordShow() {
        setHidePassword(!hidePassword)
    }

    function handlePasswordConfirmShow() {
        setHideConfirmPassword(!hideConfirmPassword)
    }

    return (
        <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
        >

            <VStack 
                bg='gray.600' 
                mt={16}
                px={12}
            >
                <Center>
                    
                    <Image 
                        source={LogoImgSignUp}
                        defaultSource={LogoImgSignUp}
                        alt='Logo'
                        mb={3}
                    />
                
                </Center>
                
                <Center>
                    <Heading color='gray.100' fontFamily='heading' fontSize='lg' mb={3}>
                        Boas vindas!
                    </Heading>
                    <Text color='gray.200' fontFamily='body' fontSize='sm' mb={8} textAlign='center'>
                    Crie sua conta e use o espaço para comprar itens variados e vender seus produtos.
                    </Text>

                    <Image 
                        source={AvatarImg}
                        defaultSource={AvatarImg}
                        alt='Avatar Image'
                        mb={4}
                    />

                    <Center>
                        <Controller 
                            control={control}
                            name="name"
                            rules={{required: 'Informe o nome.'}}
                            render={({field: {onChange}}) => (
                                <Input
                                    placeholder='Nome'
                                    onChangeText={onChange}
                                    errorMessage={errors.name?.message}
                                />
                            )}
                        />
                    </Center>

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
                            name="phone"
                            rules={{required: 'Informe o telefone.'}}
                            render={({field: {onChange}}) => (
                                <Input
                                    placeholder='Telefone'
                                    keyboardType='phone-pad'
                                    onChangeText={onChange}
                                    errorMessage={errors.phone?.message}
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

                    <Center>
                        <Controller 
                            control={control}
                            name="confirm_password"
                            rules={{required: 'Confirme a senha.'}}
                            render={({field: {onChange}}) => (
                                <Input
                                    placeholder='Confirmar senha'
                                    secureTextEntry={hideConfirmPassword}
                                    autoCapitalize='none'
                                    onChangeText={onChange}
                                    errorMessage={errors.confirm_password?.message}
                                    InputRightElement={(
                                        <Pressable mr={4} onPress={handlePasswordConfirmShow}>
                                            <Eye size={20} color={colors.gray[300]} />
                                        </Pressable>
                                    )}
                                />
                            )}
                        />
                    </Center>

                    <Button 
                        mt={5}
                        title='Criar'
                    />

                </Center>
            
                <Center mt={12}>
                    <Text mb={4}>
                        Já tem uma conta?
                    </Text>
                    <Button 
                        title='Ir para o login'
                        variant='gray-light'
                        onPress={handleAlreadyHaveAnAccount}

                    />
                </Center>
            </VStack>

        </ScrollView>
    )
}