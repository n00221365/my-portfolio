import {Link} from 'react-router-dom';
import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react"
import { Button } from "./ui/button"


const projectCard = ({project}) => {


    return (
        <Card.Root flexDirection="row" overflow="hidden" maxW="xl">

        <>


        <Box>
      <Card.Body>
        <Card.Title mb="2"><Link to={`/projects/${project.slug}`}>{project.title}</Link></Card.Title>
        <Card.Description>
          {project.description}
        </Card.Description>
        <HStack mt="4">
          <Badge>{project.technologies[0]}</Badge>
          <Badge>{project.technologies[1]}</Badge>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button><Link to={`/projects/${project.slug}`}>View</Link></Button>
      </Card.Footer>
    </Box>
             
        </>
        </Card.Root>

    )
} 

export default projectCard;