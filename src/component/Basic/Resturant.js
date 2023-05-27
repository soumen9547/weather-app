import React from 'react';
import './style.css';
import { useState } from 'react';
import menuApi from '../menuApi';
import { Menucard } from './Menucard';
import { Navbar } from './Navbar';
const uniqueList = [
    ...new Set(
      menuApi.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];
console.log(uniqueList);



export const Resturant = () => {
  const [menuData, setMenuData] = useState(menuApi);
  const [menuList,setMenuList] = useState(uniqueList);
  const filterIteam = (category) => {
    if (category === "All") {
        setMenuData(menuApi);
        return;
      }
    const updatedList = menuApi.filter((ele) => ele.category === category);
    setMenuData(updatedList);
  };

  return (
    <>
    <Navbar filterIteam={filterIteam} menuList={menuList}/>
      <Menucard menuData={menuData} />
    </>
  );
};
