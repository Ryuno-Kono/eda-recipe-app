import { Stack, Center, Divider, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const AppInfo: VFC = memo(() => {
    return (
        <>
            <Center h={'85vh'} p={5}>
                <VStack>
                    <Heading as={'h1'} fontSize={'4xl'}>
                        About this app
                    </Heading>
                    <Divider borderBottomWidth={'30px'} borderBottomColor="transparent" />
                    <Stack align={'flex-start'} spacing={6}>
                        <Stack>
                            <Heading as={'h2'} fontSize={'2xl'}>
                                Description
                            </Heading>
                            <Text fontSize="xl">Recipe search application using EDAMAM recipe search api.</Text>
                            <Text fontSize="xl">Implemented a pseudo-login function using Auth0.</Text>
                            <Text fontSize="xl"> Application UI is built with Chakra UI.</Text>
                        </Stack>
                        <Stack>
                            <Heading as={'h2'} fontSize={'2xl'}>
                                Technology Stack
                            </Heading>
                            <Text fontSize="xl">React, TypeScript</Text>
                            <Text fontSize="xl">Chakra UI, Recoil</Text>
                            <Text fontSize="xl">Atomic Design</Text>
                        </Stack>
                        <Stack>
                            <Heading as={'h2'} fontSize={'2xl'}>
                                External Services
                            </Heading>
                            <Text fontSize="xl">EDAMAM, Auth0, Heroku</Text>
                        </Stack>
                        <Stack>
                            <Heading as={'h2'} fontSize={'2xl'}>
                                Source Code
                            </Heading>
                            <Link color={'teal.500'} href={'https://github.com/Ryuno-Kono/eda-recipe-app'} isExternal>
                                Github <ExternalLinkIcon mx={'2px'} />
                            </Link>
                        </Stack>
                    </Stack>
                </VStack>
            </Center>
        </>
    )
})
