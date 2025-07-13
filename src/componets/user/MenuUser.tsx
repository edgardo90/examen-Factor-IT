import type { FC } from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { AccountCircle } from '@mui/icons-material';
import ShoppingCartCheckoutTwoToneIcon from '@mui/icons-material/ShoppingCartCheckoutTwoTone';
//
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import EventIcon from '@mui/icons-material/Event';
import { specialDates } from '../../data/specialDates'
//
import { clearLocalStorage , getUserLocalStorage } from '../../utils/userLocalStorge';
//
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, } from '../../redux/store';
import { SET_CART, UPDATE_SPECIAL_DAY_TO_CART } from '../../redux/cart/cartSlice';
import {useLocation , useNavigate} from 'react-router-dom';

interface MenuUserProps {
    anchorEl: HTMLElement | null;
    handleClick: (event: React.MouseEvent<HTMLElement>) => void;
    handleClose: () => void;
    open: boolean
}

export const MenuUser: FC<MenuUserProps> = ({
    anchorEl,
    handleClick,
    handleClose,
    open
}) => {

    const navigate = useNavigate();

    const cartState = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()

    const handleDateChange = (date: 'Normal' | 'Reyes Magos' | 'Día del Niño' | 'Cyber Monday' | 'Navidad' | '') => {
        dispatch(UPDATE_SPECIAL_DAY_TO_CART(date ));
    }

    const handleLogout = () => {
        dispatch(
            SET_CART()
        );
        clearLocalStorage();
        navigate('/')
    }

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Menu">
                    <div onClick={handleClick}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <AccountCircle fontSize="small" className="mr-1 mb-1" />
                        Mi Cuenta
                    </div>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={(e) => {
                    e.stopPropagation();
                    navigate('/user/myprofile');
                }}>
                    <Avatar /> Perfil
                </MenuItem>
                <MenuItem onClick={(e) => {
                    // e.stopPropagation();
                    console.log(getUserLocalStorage());
                    navigate('/user/mypurchases')
                }}>
                    <ShoppingCartCheckoutTwoToneIcon className='mr-2' /> 
                    Mis Compras
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <EventIcon fontSize="small" />
                    </ListItemIcon>
                    <FormControl fullWidth size="small" sx={{ ml: 1 }}>
                        <InputLabel id="date-select-label">Fecha especial</InputLabel>
                        <Select
                            labelId="date-select-label"
                            value={cartState.specialDay}
                            label="Fecha especial"
                            onChange={(e) => handleDateChange(e.target.value)}
                            onClick={(e) => {
                                e.stopPropagation();// Evito que el menú se cierre
                            }}
                        >
                            {specialDates.map((date) => (
                                <MenuItem key={date} value={date}>
                                    {date}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => handleLogout()}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Cerrar Sesion
                </MenuItem>
            </Menu>
        </>
    )
}