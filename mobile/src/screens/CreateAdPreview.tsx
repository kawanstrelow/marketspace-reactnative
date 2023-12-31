

import { Box, FlatList, HStack, Heading, Image, ScrollView, SectionList, Text, VStack, View, useTheme, Pressable, Center } from "native-base";
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

const productsExample = [
    {
        "id": "9aecbfe3-51c3-42f0-b7d8-fdb3154947b9",
        "name": "Luminária Pendente",
        "description": "Essa é a melhor luminária do mundo. Você não vai se arrepender.",
        "is_new": true,
        "price": 45000,
        "accept_trade": true,
        "user_id": "b67ac1c7-54e0-4147-ba55-f98ea52643fe",
        "is_active": true,
        "created_at": "2023-06-18T22:16:09.839Z",
        "updated_at": "2023-06-18T22:16:09.839Z",
        "product_images": [],
        "payment_methods": [
            {
                "key": "pix",
                "name": "Pix"
            }
        ]
    },
    
]

type RouteParamsProps = {
    data: ProductDTO
}

export default function CreateAdPreview() {

    const { colors } = useTheme()

    const navigation = useNavigation()
    const route = useRoute()

    function handleBackHome() {
        navigation.goBack()
    }

    // const { } = route.params as RouteParamsProps

    return (
        <VStack h='full'>
            <VStack 
                bg='blue.200'
                pt={16}
                pb={4}
                 
                px={6} 
                justifyContent='space-between'
            >
                <Center>
                    <Heading
                        color='gray.700'
                        fontFamily='heading'
                        fontSize='md'
                    >Pré visualização do anúncio</Heading>
                    <Text
                        color='gray.700'
                        fontSize='sm'
                    >É assim que seu produto vai aparecer!</Text>
                </Center>
                
                
            </VStack>
            <View 
                w='100%'
                h='280px'
                alignItems='center'
                justifyContent='center'
            >
                
                <Image 
                    source={TenisImg}
                    defaultSource={TenisImg}
                    alt='Item'
                    w='100%'
                    h='280px'
                />

            </View>
            
            <VStack px={6} mt={5}>
                <HStack alignItems='center' mb={6}>
                    <Image 
                        source={AvatarImg}
                        defaultSource={AvatarImg}
                        alt='Avatar'
                        size={6}
                        mr={2}
                    />
                    <Text
                        color='gray.100'
                        fontSize='sm'
                    >
                        Makenna Baptista
                    </Text>
                </HStack>
                <Heading bg='gray.50' w='45px' py='2px' textAlign='center' fontSize='xs' fontFamily='heading' borderRadius='full' mb={2}>NOVO</Heading>

                <HStack alignItems='baseline' textAlign='center' justifyContent='space-between' mb={2}>
                    <Heading color='gray.100' fontSize='lg' fontFamily='heading' >Tênis Nike Air Max</Heading>
                    <Heading color='blue.200' fontSize='lg' fontFamily='heading' >
                        <Heading color='blue.200' fontSize='sm' fontFamily='heading'>R$</Heading>
                        120,00
                    </Heading>
                </HStack>

                <Text color='gray.200' fontSize='sm' mb={6}>
                    Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. 
                    Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.
                </Text>

                <HStack alignItems='center' mb={4}>
                    <Heading fontFamily='heading' fontSize='sm' color='gray.200' mr={2}>Aceita troca?</Heading>
                    <Text fontSize='sm' color='gray.200'>Sim</Text>
                </HStack>

                <VStack mb={6}>
                    <Heading fontFamily='heading' fontSize='sm' color='gray.200' mr={2} mb={2}>Meios de pagamento:</Heading>
                    <HStack>
                        <Barcode size={18} color={colors.gray[100]} />
                        <Text fontSize='sm' color='gray.200' ml={2}>Boleto</Text>
                    </HStack>
                    <HStack>
                        <QrCode size={18} color={colors.gray[100]} />
                        <Text fontSize='sm' color='gray.200' ml={2}>Pix</Text>
                    </HStack>
                    <HStack>
                        <Money size={18} color={colors.gray[100]} />
                        <Text fontSize='sm' color='gray.200' ml={2}>Dinheiro</Text>
                    </HStack>
                    <HStack>
                        <CreditCard size={18} color={colors.gray[100]} />
                        <Text fontSize='sm' color='gray.200' ml={2}>Cartão de Crédito</Text>
                    </HStack>
                    <HStack>
                        <Bank size={18} color={colors.gray[100]} />
                        <Text fontSize='sm' color='gray.200' ml={2}>Depósito Bancário</Text>
                    </HStack>
                </VStack>
                
            
        
                
            </VStack>

            <HStack 
                alignItems='center' 
                justifyContent='space-between' 
                bgColor='gray.700' 
                mb={0} mt='auto' 
                w='full' 
                position='absolute' 
                bottom={0}
                px={6}
                pb={7}
                pt={5}
            >
                        <Button 
                            variant="gray-light"
                            title="Voltar e editar"
                            w='48%'
                            h='42px'
                            borderRadius={6}
                            p={0}
                        >
                            <ArrowLeft size={16} color={colors.gray[200]} />
                        </Button>
                        <Button 
                            variant="blue"
                            title="Publicar"
                            // onPress={}
                            w='48%'
                            h='42px'
                            borderRadius={6}
                            p={0}
                        >
                            <Tag size={16} color={colors.gray[600]} />   
                        </Button>
            </HStack> 
        </VStack>
    )
}