

import { Button, Box, FlatList, HStack, Heading, Image, ScrollView, SectionList, Text, VStack, View, useTheme } from "native-base";
import { Controller, useForm } from 'react-hook-form'

import { House, Tag, SignOut, ArrowRight, ArrowLeft, Barcode, QrCode, Money, CreditCard, Bank, WhatsappLogo } from 'phosphor-react-native';

import AvatarImg from '@assets/avatarimg.png'
import TenisImg from '@assets/tenis.png'

import { Input } from "@components/Input";
import ProductBox from "@components/ProductBox";
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

export default function Product() {

    const { colors } = useTheme()

    return (
        <VStack pt={16} >
            <HStack mb={3} px={6}>
                <ArrowLeft size={24} color={colors.gray[100]} />
            </HStack>
            <Image 
                source={TenisImg}
                defaultSource={TenisImg}
                alt='Item'
                w='100%'
                h='280px'
            />
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

                <HStack alignItems='center' justifyContent='space-between'>
                    <Heading color='blue.200' fontSize='xl' bg={'amber.200'} fontFamily='heading' >
                        <Heading color='blue.200' fontSize='sm' fontFamily='heading'>R$</Heading>
                        120,00
                    </Heading>
                    <Button
                        bgColor='blue.200'
                        h='42px'
                        p={3}
                        alignItems='center'
                        borderRadius={6}
                    >
                        <HStack alignItems='center'>
                            <WhatsappLogo size={16} color={colors.gray[600]} />
                            <Heading fontFamily='heading' color='gray.700' fontSize='sm' ml={2}>Entrar em contato</Heading>
                        </HStack>
                    </Button>
                </HStack>
            </VStack>
            
        </VStack>
    )
}