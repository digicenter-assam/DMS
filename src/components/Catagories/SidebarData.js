import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FcIcons.FcHome />,
    cName: 'nav-text'
  },
  {
    title: 'Printing Services',
    path: '/listing/Printing Service',
    icon: <FcIcons.FcPrint />,
    cName: 'nav-text'
  },
  {
    title: 'Electronics',
    path: '/listing/electronic',
    icon: <FcIcons.FcElectronics />,
    cName: 'nav-text'
  },
  {
    title: 'Computer Accoriess',
    path: '/listing/hardware',
    icon: <FcIcons.FcHeadset />,
    cName: 'nav-text'
  },
  {
    title: 'Clothings',
    path: '/listing/clothing',
    icon: <GiIcons.GiClothes />,
    cName: 'nav-text'
  },
  {
    title: 'Web & App Development',
    path: '/Web/',
    icon: <FcIcons.FcTwoSmartphones />,
    cName: 'nav-text'
  }
];