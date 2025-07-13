import { useState } from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Drawer from '@mui/material/Drawer';
//
import { CartDrawer } from './CartDrawer';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../redux/store'
//
import { getUserLocalStorage } from '../../utils/userLocalStorge';
import { LoginFormModal } from '../login/LoginFormModal';



const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }`;

export const CartButton = () => {

    const cartState = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);

    const [openModal, setOpenModal] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        if (!getUserLocalStorage()) {
            setOpenModal(true)
            return
        }
        setOpen(newOpen);
    };


    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <>
            <LoginFormModal open={openModal} setOpen={setOpenModal} /> 
            <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
                <CartDrawer handleDrawerClose={handleDrawerClose} />
            </Drawer>
            <IconButton onClick={toggleDrawer(true)}>
                <ShoppingCartIcon fontSize="medium" color='warning' />
                <CartBadge badgeContent={cartState.products.length} color="primary" overlap="circular" />
            </IconButton>
        </>
    )
}