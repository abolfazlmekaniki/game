import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface props{
    children:string;
}
const ExpandableText = ({children}:props) => {

    const [expanded,setExpanded]=useState(false);
    const limit = 300;

    if(!children) return null
    if(children.length<limit) return <Text>{children}</Text>;

    const summery = expanded?children:children.slice(0,limit)+'... ';


  return (

    <Text>{summery}<Button marginLeft={1} size='xs' fontWeight='bold' colorScheme="yellow" onClick={()=>setExpanded(!expanded)}>{expanded?'Show less':'Show more'}</Button></Text>
  )
}

export default ExpandableText