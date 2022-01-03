import React, { useState } from 'react';
import MenuContext from '../../../context/MenuContext';
import OutsideClickHandle from '../../../hooks/OutsideClickHandle';
import MenuButton from '../../atoms/MenuButton/MenuButton';
import MobileMenuList from '../../atoms/MobileMenuList/MobileMenuList';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const setMenuOpen = () => setIsOpen(!isOpen);
  const ref = OutsideClickHandle(setIsOpen);
  return (
    <MenuContext.Provider
      value={{
        isOpen,
        setMenuOpen,
      }}
    >
      <div ref={ref}>
        <div className="relative z-20">
          <MenuButton menuContext={isOpen} />
        </div>
        <MobileMenuList menuContext={isOpen} />
      </div>
    </MenuContext.Provider>
  );
}

export default MobileMenu;
