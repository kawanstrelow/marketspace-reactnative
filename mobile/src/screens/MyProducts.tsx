import { Box, CheckIcon, FlatList, HStack, Heading, Image, ScrollView, SectionList, Select, Text, VStack, useTheme } from "native-base";
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
        "is_active": false,
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


export default function MyProducts() {

    const [ products, setProducts ] = useState<ProductDTO[]>(productsExample)
    const [ selectedFilter, setSelectedFilter ] = useState('')

    const { colors } = useTheme()

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

    return (
        <VStack pt={16} px={6}>
            <HStack mb={8} justifyContent='space-between'>
                <Plus size={24} color={colors.gray[600]} />
                <Heading fontSize='md' color='gray.100' fontFamily='heading' >Meus anúncios</Heading>
                <Plus size={24} color={colors.gray[100]} />
            </HStack>

            <HStack justifyContent='space-between' alignItems='center' mb={5}>
                <Text>9 anúncios</Text>
                <Select 
                    selectedValue={selectedFilter} 
                    minWidth="110" 
                    placeholder="Todos" 
                    mt={1} 
                    onValueChange={itemValue => setSelectedFilter(itemValue)}
                >
                    <Select.Item label="Todos" value="todos" color='gray.100' fontSize='sm' /> 
                </Select>
            </HStack>

            <Box>
                         
                <FlatList 
                    data={products}
                    renderItem={({item}) => (
                        <ProductBox data={item} showAvatar={false}/>
                    )}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    numColumns={2}
                />

            </Box>
        </VStack>
    )
}