import { LoginForm } from './LoginForm'
import { ModalComponent } from '../modal/Modal'
import type { FC } from 'react'

interface LoginFormModalProps {
    open: boolean
    setOpen: (open: boolean) => void
}

export const LoginFormModal: FC<LoginFormModalProps> = ({
    open,
    setOpen
}) => {

    return (
        <ModalComponent open={open} setOpen={setOpen}>
            <LoginForm setOpen={setOpen} />
        </ModalComponent>
    )
}