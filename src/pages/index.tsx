import { DeleteIcon } from "@chakra-ui/icons"
import { Box, Button, Center, Checkbox, Heading, Input, List, ListItem, Text } from "@chakra-ui/react"

function Todolist() {
    // const [input, setText] = useState<string>('');

    return (
        <form>
            <Center>
                <Box
                    borderRadius='25'
                    width='80%'
                    bg='tomato'
                    p='2'
                    color='white'
                    textAlign='center'
                    mt='6'
                >
                    <Text as='kbd' fontSize='25px'>
                        <Heading>
                            To do list
                        </Heading>
                    </Text>
                </Box>
            </Center>
            <Center>
                <Box
                    mt='25'
                    width='15cm'
                    height='9cm'
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
                            <DeleteIcon mt='7' />
                        </Center>
                        <Center>
                            <Input
                                height='8'
                                borderColor='black'
                                width='12cm'
                            >
                            </Input>
                        </Center>
                    </List>
                    <Center>
                        <Button
                            bg='tomato'
                            mt='3'
                            color='white'
                        >
                            Add To
                        </Button>
                    </Center>
                </Box>
            </Center >
        </form >
    )
}

export default Todolist