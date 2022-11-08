import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import { Card, ListItem, ListItemIcon, MenuItem, MenuList, Typography } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';



const SideMenus =[
  {
    title:"Dashboard",
    icon:<DashboardIcon />,
    path:"/dashboard"
  },
  {
    title:"Products",
    icon:<DashboardIcon />,
    path:"/product"
  },
  {
    title:"Dashboard",
    icon:<DashboardIcon />,
    path:"/sale"
  }, {
    title:"Dashboard",
    icon:<DashboardIcon />,
    path:"/dashboard"
  }

] ;
const Component = (props) => {

const navigate = useNavigate();
const [selectedItemIndex, setSelectItemIndex] = useState(0)

  
  return (
    <Card sx={{ minHeight: "100vh" }}>
      <MenuList>
        {SideMenus?.map((menu,index) => (
          <MenuItem  onClick ={() => navigate(menu.path)} selected={selectedItemIndex === index}>
            <ListItem > {menu. icon}</ListItem>
         
          <Typography variant="inherit" >{menu.title}</Typography>
          
          </MenuItem>
        ))}
      </MenuList>
    </Card>
  );
};

export default Component;
