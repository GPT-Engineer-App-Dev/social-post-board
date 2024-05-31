import { Container, Text, VStack, Box, Heading, Input, Button, List, ListItem, ListIcon } from "@chakra-ui/react";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handleAddPost = () => {
    if (newPost.trim() !== "") {
      setPosts([...posts, newPost]);
      setNewPost("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl">Public Post Board</Heading>
        <Box width="100%">
          <Input 
            placeholder="Write your post here..." 
            value={newPost} 
            onChange={(e) => setNewPost(e.target.value)} 
            mb={2}
          />
          <Button colorScheme="blue" onClick={handleAddPost}>Add Post</Button>
        </Box>
        <Box width="100%" mt={4}>
          <Heading as="h2" size="lg" mb={2}>Posts</Heading>
          <List spacing={3}>
            {posts.map((post, index) => (
              <ListItem key={index}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                {post}
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;