import type { FC, ReactNode } from 'react'
import { Modal, Box } from '@mui/material'
import type { SxProps } from '@mui/system'
import type { Theme } from '@mui/material'

interface ModalComponentProps {
	open: boolean
	setOpen: (open: boolean) => void
	styleModal?: SxProps<Theme>
	children: ReactNode
}

export const ModalComponent: FC<ModalComponentProps> = ({
	open,
	setOpen,
	styleModal,
	children
}) => {
	const style: SxProps<Theme> = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 'auto',
		maxHeight: '90vh',
		overflow: 'auto',
		bgcolor: 'background.paper',
		boxShadow: 2,
		minWidth: '330px'
	}

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<Box sx={styleModal ? styleModal : style}>{children}</Box>
		</Modal>
	)
}
