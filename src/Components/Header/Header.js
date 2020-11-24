//React && Functional
import React, { useState } from 'react';
import Radium from 'radium';

//Components
import List from '../Lists/List';
import MenuBurger from '../MenuBurger';

//Styles
import { positionate } from '../../Styles/StylesDisplaying';
 
//Render
let Header = (props) => {
    const [openSidebar, openingSidebar] = useState(false);
    const Position = positionate(0, 0, 0, 0);

    const handleOpenSidebar = () => openingSidebar(!openSidebar);

    if(openSidebar) 
        return  <List items={ ['Home', 'Portfolio'] }
                    clicEvent={ handleOpenSidebar }/>
    
    return  <header style={[
                Position.fixed,
                Position.axis,
                { width: '100%'}
            ]}>
                <MenuBurger clicEvent={ handleOpenSidebar }/>
            </header>
};

Header = Radium(Header);

export default Header;