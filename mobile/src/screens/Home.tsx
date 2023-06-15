import { Button } from "@components/Button";
import { Box, HStack, Heading, Image, Text, VStack, useTheme } from "native-base";

import AvatarImg from '@assets/avatarimg.png'

import { House, Tag, SignOut, ArrowRight } from 'phosphor-react-native';


export default function Home() {

    const { colors } = useTheme()

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
                />
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
        </VStack>
    )
}