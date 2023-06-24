

import { Box, FlatList, HStack, Heading, Image, ScrollView, SectionList, Text, VStack, View, useTheme, Pressable, Center, Radio, Switch, Checkbox } from "native-base";
import { Controller, useForm } from 'react-hook-form'
import { useNavigation, useRoute } from "@react-navigation/native";

import { House, Tag, SignOut, ArrowRight, ArrowLeft, Barcode, QrCode, Money, CreditCard, Bank, WhatsappLogo, Plus, Power, Trash, Pencil } from 'phosphor-react-native';

import AvatarImg from '@assets/avatarimg.png'
import TenisImg from '@assets/tenis.png'

import { Input } from "@components/Input";
import ProductBox from "@components/ProductBox";
import { Button } from "@components/Button";

import { useState } from "react";

import { ProductDTO } from "@dtos/ProductDTO";
import { FilterInput } from "@components/FilterInput";

import UploadAPictureImg from '@assets/uploadpicture.png'
import { AppNavigatorRoutesProps } from "@routes/app.routes";

type FormData = {
    title: string;
    description: string;
    neworused: string;
    price: string;
    changeaccepted: string;
    payment_methods: string;
}

export default function CreateAd() {

    const { colors } = useTheme()

    const navigation = useNavigation<AppNavigatorRoutesProps>()
    const route = useRoute()

    function handleBackHome() {
        navigation.goBack()
    }

    function handleGoToPreview() {
        navigation.navigate('CreateAdPreview')
    }

    const { control, handleSubmit, formState: { errors} } = useForm<FormData>()



    return (
        <VStack pt={16} px={6} h='100%'>
            <HStack mb={8} justifyContent='space-between'>
                <ArrowLeft size={24} color={colors.gray[100]} />
                <Heading fontSize='md' color='gray.100' fontFamily='heading' >Criar anúncio</Heading>
                <Plus size={24} color={colors.gray[600]} />
            </HStack>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <VStack mb={8}>
                    <Heading fontSize='md' color='gray.200' fontFamily='heading' mb={1}>Imagens</Heading>
                    <Text fontSize='sm' color='gray.300' mb={4}>Escolha até 3 imagens para mostrar o quando o seu produto é incrível!</Text>
                    <Image
                        source={UploadAPictureImg}
                        defaultSource={UploadAPictureImg}
                        alt='Upload a picture'
                    />
                </VStack>

                <VStack mb={8}>
                    <Heading fontSize='md' color='gray.200' fontFamily='heading' mb={1}>Sobre o produto</Heading>
                        <Center mt={1}>
                            <Controller 
                                control={control}
                                name="title"
                                rules={{required: 'Informe o título do anúncio.'}}
                                render={({field: {onChange}}) => (
                                    <Input
                                        placeholder='Título do anúncio'
                                        onChangeText={onChange}
                                        errorMessage={errors.title?.message}
                                    />
                                )}
                            />
                        </Center>
                        <Center mt={1}>
                            <Controller 
                                control={control}
                                name="description"
                                rules={{required: 'Informe a descrição do anúncio.'}}
                                render={({field: {onChange}}) => (
                                    <Input
                                        placeholder='Descrição do produto'
                                        onChangeText={onChange}
                                        errorMessage={errors.description?.message}
                                    />
                                )}
                            />
                        </Center>
                        <Radio.Group name="neworused" mt={1} flexDir='row' w='full'>
                            <Radio value="new" mr={1} color='gray.400' _text={{color: 'gray.300', fontSize: 'sm', fontFamily: 'body', mr: 5}} _pressed={{bg: 'gray.700'}}>
                                Produto novo
                            </Radio>
                            <Radio value="used" mr={1} _text={{color: 'gray.300', fontSize: 'sm', fontFamily: 'body'}} _pressed={{bg: 'gray.700'}}>
                                Produto usado
                            </Radio>
                        </Radio.Group>

                </VStack>

                <VStack>
                    <Heading fontSize='md' color='gray.200' fontFamily='heading' mb={1}>Venda</Heading>
                    <Center mt={1}>
                        <Controller 
                            control={control}
                            name="price"
                            rules={{required: 'Informe o valor do produto.'}}
                            render={({field: {onChange}}) => (
                                <Input
                                    placeholder='Valor do produto'
                                    onChangeText={onChange}
                                    errorMessage={errors.price?.message}
                                    InputLeftElement={
                                        <Text
                                        fontSize='md'
                                        color='gray.100'
                                        pl={4}

                                        >R$
                                        </Text>
                                    }
                                />
                            )}
                        />
                    </Center> 
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
                </VStack>   
                <HStack mt={6} pb={12} justifyContent='space-between'>
                        <Button 
                            variant="gray-light"
                            title="Cancelar"
                            w='48%'
                            h='42px'
                            borderRadius={6}
                            p={0}
                        />
                        <Button 
                            title="Avançar"
                            onPress={handleGoToPreview}
                            w='48%'
                            h='42px'
                            borderRadius={6}
                            p={0}
                        />
                </HStack> 
            </ScrollView>   
           
        </VStack>
    )
}