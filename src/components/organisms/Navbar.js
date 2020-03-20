import React from 'react';
import { Flex, Text } from '../atoms';

const Navbar = () => (
  <Flex width="100%" backgroundColor="navbarBg" color="navbarColor" height="40px" justifyContent="center" alignItems="center" fontSize={[2, 3]}>
    <Text color="navbarColor" fontWeight="bold">One stop for your appetite.</Text>
  </Flex>
);

export default Navbar;
