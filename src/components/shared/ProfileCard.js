import { Box, Flex, Heading, Button, Text } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { useState } from 'react'

import 'swiper/css'

const SlideImage = ({ src }) => {
  return (
    <Box position="relative" h={215}>
      <Image src={src} layout="fill" alt="Photo de projet" objectFit="cover" />
    </Box>
  )
}

const ProfileCard = ({ user }) => {
  const [activeSlide, setActiveSlide] = useState(1)

  return (
    <Box
      maxW="sm"
      borderRadius="md"
      overflow="hidden"
      border="solid"
      borderWidth={1}
      position="relative"
      borderColor="gray.200">
      <Box
        position="absolute"
        zIndex={10}
        bgColor="whiteAlpha.600"
        fontSize={14}
        px={4}
        py={1}
        borderRadius="full"
        fontWeight={600}
        color="white"
        top={3}
        right={3}>
        {activeSlide}/3
      </Box>
      <Swiper
        slidesPerView={1}
        onSlideChange={swiper => setActiveSlide(swiper.activeIndex + 1)}>
        <SwiperSlide>
          <SlideImage src="https://thispersondoesnotexist.com/image" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src="https://thispersondoesnotexist.com/image" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src="https://thispersondoesnotexist.com/image" />
        </SwiperSlide>
      </Swiper>
      <Flex flexDir="column" p={4} gap={4}>
        <Flex justifyContent="space-between">
          <Flex alignItems="center" gap={3}>
            <Box
              w={10}
              h={10}
              borderRadius="full"
              overflow="hidden"
              position="relative">
              <Image
                src="https://thispersondoesnotexist.com/image"
                layout="fill"
                alt="Photo de profil"
                objectFit="cover"
              />
            </Box>
            <Heading size="sm">Tic-tac</Heading>
          </Flex>
          <Heading size="xs">Menuisier</Heading>
        </Flex>
        <Box>
          <Heading size="xs">Localisation</Heading>
          <Text fontSize="sm" color="gray.500">
            Paris XVI
          </Text>
        </Box>
        <Box>
          <Heading size="xs">Services</Heading>
          <Text fontSize="sm" color="gray.500">
            Découpe du bois, sculpture, peinture
          </Text>
        </Box>
        <Button colorScheme="teal" mt={1}>
          <EmailIcon mr={3} /> Envoyer un message
        </Button>
      </Flex>
    </Box>
  )
}

export default ProfileCard
