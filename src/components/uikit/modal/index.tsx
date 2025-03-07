import { mergedCx } from '@/shared/styles';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
	isOpen: boolean;
	isLoading?: boolean;
	onClose: () => void;
	children: React.ReactNode;
	className?: string;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	isLoading = false,
	onClose,
	children,
	className,
}) => {
	useEffect(() => {
		if (window?.document) {
			document.body.style.overflow = 'hidden';
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.body.style.overflow = 'unset';
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [onClose]);

	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className='fixed inset-0 flex items-center justify-center bg-black/50'>
			<div
				className={mergedCx(
					'bg-white p-6 rounded-lg shadow-lg relative z-50',
					className
				)}
			>
				{/* Close button */}
				<button
					className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer'
					onClick={onClose}
				>
					✕
				</button>
				{children}

				{isLoading && (
					<div className='absolute inset-0 left-0 overflow-auto z-50'>
						<div className='w-auto h-full flex justify-center items-center bg-gray-300 opacity-50'>
							<svg
								className='mr-3 -ml-1 size-5 animate-spin text-slate-700'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
							>
								<circle
									className='opacity-25'
									cx='12'
									cy='12'
									r='10'
									stroke='currentColor'
									strokeWidth='4'
								></circle>
								<path
									className='opacity-75'
									fill='currentColor'
									d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
								></path>
							</svg>
						</div>
					</div>
				)}
			</div>
		</div>,
		document.getElementById('portal-root') as HTMLElement
	);
};

export default Modal;
