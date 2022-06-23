import { Box, Image, Text } from "@chakra-ui/react";

const Category = () => {
  const property = {
    imageAlt: "Rear view of modern home with pool",
  };

  return (
    <Box display="flex" mt="12px" ml="16px">
      <Box
        width="122px"
        height="99px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mr="10px"
      >
        <Image
          src="./assets/job_pics/large-home-g4446d6391_1280.jpg"
          height="72px"
          width="122px"
          alt={property.imageAlt}
        />

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="27px"
        >
          <Text fontSize="10px" fontWeight="bold">
            Architecte
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
export default Job;
