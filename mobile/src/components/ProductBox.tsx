import { Box, Heading, Image, Pressable, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import TenisImg from '@assets/tenis.png'
import AvatarImg from '@assets/avatarimg.png'

export default function ProductBox() {

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleNavigateToProductDetails() {
        navigation.navigate('Product')
    }

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
                >

                    <Image 
                        source={TenisImg}
                        defaultSource={TenisImg}
                        alt='Tenis'
                        w='100%'
                        h={24}
                        borderRadius={6}
                    />

                    <Image 
                        source={AvatarImg}
                        defaultSource={AvatarImg}
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

                    <Box
                        w={12}
                        h={4}
                        bg='gray.200'
                        borderRadius={999}
                        justifyContent='center'
                        position='absolute'
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
                        color='gray.200'
                        lineHeight='md'
                    >
                        Tênis vermelho
                    </Text>

                    
                    <Heading
                        fontFamily='heading'
                        fontSize='md'
                        color='gray.100'
                        lineHeight='md'
                    >
                        <Heading
                            fontFamily='heading'
                            fontSize='xs'
                            color='gray.100'
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