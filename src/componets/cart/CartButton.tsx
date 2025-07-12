import { useState } from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Drawer from '@mui/material/Drawer';
//
import { CartDrawer } from './CartDrawer';


const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }`;

export const CartButton = () => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };


    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
                <CartDrawer handleDrawerClose={handleDrawerClose} />
            </Drawer>
            <IconButton onClick={toggleDrawer(true)}>
                <ShoppingCartIcon fontSize="medium" color='warning' />
                <CartBadge badgeContent={1} color="primary" overlap="circular" />
            </IconButton>
        </>
    )
}