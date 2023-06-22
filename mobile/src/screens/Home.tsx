import { Box, FlatList, HStack, Heading, Image, ScrollView, SectionList, Text, VStack, useTheme } from "native-base";
import { Controller, useForm } from 'react-hook-form'

import { House, Tag, SignOut, ArrowRight, Plus } from 'phosphor-react-native';

import AvatarImg from '@assets/avatarimg.png'

import { Button } from "@components/Button";
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
    {
        "id": "9aecbfe3-51c3-42f0-b7d8-fdb3154947b8",
        "name": "Produto2",
        "description": "Produto2 Description",
        "is_new": true,
        "price": 32000,
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
    {
        "id": "9aecbfe3-51c3-42f0-b7d8-fdb3154947b7",
        "name": "Produto2",
        "description": "Produto2 Description",
        "is_new": true,
        "price": 32000,
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
    {
        "id": "9aecbfe3-51c3-42f0-b7d8-fdb3154947b6",
        "name": "Produto2",
        "description": "Produto2 Description",
        "is_new": true,
        "price": 32000,
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
    {
        "id": "9aecbfe3-51c3-42f0-b7d8-fdb3154947b5",
        "name": "Produto2",
        "description": "Produto2 Description",
        "is_new": true,
        "price": 32000,
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
    {
        "id": "9aecbfe3-51c3-42f0-b7d8-fdb3154947b4",
        "name": "Produto2",
        "description": "Produto2 Description",
        "is_new": true,
        "price": 32000,
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
    {
        "id": "9aecbfe3-51c3-42f0-b7d8-fdb3154947b3",
        "name": "Produto2",
        "description": "Produto2 Description",
        "is_new": true,
        "price": 32000,
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
    {
        "id": "9aecbfe3-51c3-42f0-b7d8-fdb3154947b2",
        "name": "Produto2",
        "description": "Produto2 Description",
        "is_new": true,
        "price": 32000,
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

export default function Home() {

    const [ products, setProducts ] = useState<ProductDTO[]>(productsExample)

    const { colors } = useTheme()

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

    return (
        <VStack pt={16} px={6}>
            <HStack mb={8}>
                <Image 
                    source={AvatarImg}
                    defaultSource={AvatarImg}
                    alt='Avatar'
                    size={12}
                    mr={2}

                />
                <VStack w={32} mr={2}>
                    <Text fontSize='md' color='gray.100'>Boas vindas,</Text>
                    <Heading fontSize='md' color='gray.100' fontFamily='heading' >Maria!</Heading>
                </VStack>
                <Button 
                    title="Criar anúncio"
                    flex={1}
                >
                    <Plus size={16} color={colors.gray[600]} />
                </Button>
            </HStack>

            <Text color='gray.300' fontSize='sm' mb={3}>
                Seus produtos anunciados para venda 
            </Text>

            <Box 
                bg='#e8e4ec' 
                borderRadius={6}
                pl={4}
                pr={5}
                py={3}
                mb={4}
                h={16}
                alignItems='center'
                justifyContent='space-between'
                flexDirection='row'
            >

                <HStack
                    alignItems='center'
                    justifyContent='center'
                >

                    <Tag color={colors.blue[500]} weight="regular" size={22} />
                    
                    <VStack ml={4}>
                        <Heading
                            fontFamily='heading'
                            fontSize='lg'
                            color='gray.200'
                        >
                            4
                        </Heading>
                        <Text
                            fontSize='xs'
                            color='gray.200'    
                        >
                            anúncios ativos
                        </Text>
                    </VStack>

                </HStack>
                <HStack>
                    <Heading
                        fontFamily='heading'
                        color='blue.500'
                        fontSize='xs'
                        mr={2}
                    >
                        Meus anúncios
                    </Heading>
                    <ArrowRight color={colors.blue[500]} size={16}  />
                </HStack>
                
            </Box>

            <Text color='gray.300' fontSize='sm' mb={3}>
                Compre produtos variados
            </Text>

            <Box>

                <FilterInput
                    placeholder='Buscar anúncio'
                    autoCapitalize='none'
                />
                
                <FlatList 
                    data={products}
                    renderItem={({item}) => (
                        <ProductBox data={item} />
                    )}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    numColumns={2}
                />

            </Box>
        </VStack>
    )
}