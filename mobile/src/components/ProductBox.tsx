import { Box, Heading, Image, Pressable, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import TenisImg from '@assets/tenis.png'
import AvatarImg from '@assets/avatarimg.png'
import { ProductDTO } from "@dtos/ProductDTO";

type Props = {
    data: ProductDTO
    showAvatar?: boolean
}

export default function ProductBox({ data, showAvatar = true }: Props) {

    const {
        is_active
    } = data

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleNavigateToProductDetails() {
        navigation.navigate('Product', { data })
    }

    

    const opacity = is_active ? 1 : 0.7

    return (
        <Pressable
            onPress={handleNavigateToProductDetails}
            w='45%'
            h={33}
            mb={6}
        >
            
            <Box
                w='100%'
                h={24}   
                borderRadius={6}
                backgroundColor='gray.100'
            >   
                    <Image 
                        source={TenisImg}
                        defaultSource={TenisImg}
                        opacity={opacity}
                        alt='Tenis'
                        w='100%'
                        h={24}
                        borderRadius={6}
                    />

                    {
                        showAvatar && (
                            <Image 
                                source={AvatarImg}
                                defaultSource={AvatarImg}
                                opacity={opacity}
                                w={6}
                                h={6}
                                borderRadius={999}
                                borderWidth={1}
                                borderColor='gray.700'

                                alt='Avatar'
                                position='absolute'
                                mt={1}
                                ml={1}
                            />  
                        )
                    }
                    

                    {
                        !is_active && (
                            <Heading 
                                textAlign='center' 
                                textTransform='uppercase' 
                                fontFamily='heading'
                                color='white' 
                                fontSize='xs'

                                position='absolute'
                                bottom={1}
                                ml={1}
                            >
                                Anúncio desativado
                            </Heading>
                        )
                    }
                    

                    <Box
                        w={12}
                        h={4}
                        bg='gray.200'
                        borderRadius={999}
                        justifyContent='center'
                        position='absolute'
                        opacity={opacity}
                        top={1}
                        right={1}
                    >
                        <Text>
                            <Heading textAlign='center' color='white' fontSize='2xs'>
                                USADO
                            </Heading>
                        </Text>

                    </Box>
                    
            </Box>
            
            <Box
                    px={0.5}
                    mt={1}
            >
                    <Text
                        fontSize='sm'
                        color={is_active ? 'gray.200' : 'gray.400'}
                        lineHeight='md'
                    >
                        Tênis vermelho
                    </Text>

                    
                    <Heading
                        fontFamily='heading'
                        fontSize='md'
                        color={is_active ? 'gray.100' : 'gray.400'}
                        lineHeight='md'
                    >
                        <Heading
                            fontFamily='heading'
                            fontSize='xs'
                            color={is_active ? 'gray.100' : 'gray.400'}
                            lineHeight='md'
                        >
                            R${' '}
                        </Heading>
                        59,90
                    </Heading>
            </Box>
       
        </Pressable>
    )
}