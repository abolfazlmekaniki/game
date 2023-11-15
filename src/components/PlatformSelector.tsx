import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/usePlatforms";
import usePlatforms from "../hooks/usePlatforms";

interface Props { 
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformID?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformID }: Props) => {
  const { data, error } = usePlatforms();
  const selectedplatform = data?.results.find(p=>p.id===selectedPlatformID);
  if (error) return null;
  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedplatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
