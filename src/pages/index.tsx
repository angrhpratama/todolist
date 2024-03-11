import { DeleteIcon } from "@chakra-ui/icons"
import { Box, Button, Center, Checkbox, Heading, Input, List, ListItem, Text } from "@chakra-ui/react"


function Todolist() {
    return (
        <form>
            <Box
                borderRadius='25'
                width='100%'
                bg='tomato'
                p='3'
                color='white'
                textAlign='center'
            >
                <Text as='kbd' fontSize='35px'>
                    <Heading>
                        To do list
                    </Heading>
                </Text>
            </Box>
            <Center>
                <Box
                    mt='25'
                    width='15cm'
                    // height='70'
                    borderWidth='2px'
                    borderRadius='lg'
                    overflow='hidden'
                    bg='orange.100'
                    borderColor='black'
                >
                    <Heading fontSize='medium' mt='2'>
                        <Center>
                    Add your list here!!!☺️
                        </Center>
                    </Heading>
                    <List spacing={3} mt='3'>
                        <ListItem>
                            <Checkbox colorScheme='green' defaultChecked ml='5'>
                                makan
                            </Checkbox>
                        </ListItem>
                        <ListItem>
                            <Checkbox colorScheme='green' defaultChecked ml='5'>
                                minum
                            </Checkbox>
                        </ListItem>
                        <ListItem>
                            <Checkbox colorScheme='green' defaultChecked ml='5'>
                                mandi
                            </Checkbox>
                        </ListItem>
                        <ListItem>
                            <Checkbox colorScheme='green' defaultChecked ml='5'>
                                coding
                            </Checkbox>
                        </ListItem>
                        <Center>
                            <DeleteIcon />
                        </Center>
                        <Input height='8' borderColor='black' />
                    </List>
                    <Center>
                        <Button colorScheme='orange'>Add To</Button>
                    </Center>
                </Box>
            </Center >
        </form >
    )
}

export default Todolist