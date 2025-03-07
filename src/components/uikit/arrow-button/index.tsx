import { mergedCx } from '@/shared/styles';

type ArrowProps = {
	className?: string;
	iconClassName?: string;
	onClick?: () => void;
	arrowType?: ArrowTypes;
	variant?: keyof typeof arrowVariants;
	buttonStyle?: keyof typeof buttonStyles;
};

type ArrowTypes = 'chevron' | 'arrow';

const arrowVariants = {
	primary: 'bg-slate-700 hover:bg-slate-800 focus-visible:outline-slate-900',
	secondary: '',
} as const;

const buttonStyles = {
	circle: 'p-2 rounded-full',
	quare: 'px-2.5 py-4 rounded-lg',
} as const;

export function ArrowButton(props: ArrowProps) {
	const {
		className,
		onClick,
		buttonStyle = 'circle',
		variant = 'primary',
		arrowType = 'chevron',
		iconClassName,
	} = props;

	const clxClassName = mergedCx(
		'text-white shadow-sm focus-visible:outline-offset-2',
		buttonStyles[buttonStyle],
		arrowVariants[variant],
		className
	);

	return (
		<button type='button' className={clxClassName} onClick={onClick}>
			{arrowType === 'chevron' ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className={mergedCx('size-6', iconClassName)}
				>
					<path
						fillRule='evenodd'
						d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z'
						clipRule='evenodd'
					/>
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className={mergedCx('size-6', iconClassName)}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3'
					/>
				</svg>
			)}
		</button>
	);
}
