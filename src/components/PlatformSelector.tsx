import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import Platform  from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";


const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setselectedPlatformId = useGameQueryStore(s=>s.setPlatformId);
  const selectedPlatformID = useGameQueryStore(s=>s.gameQuery.platformID);
  const selectedplatform = usePlatform(selectedPlatformID);
  if (error) return null;
  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedplatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem onClick={() => setselectedPlatformId(platform.id )} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
