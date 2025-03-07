import { mergedCx } from '@/shared/styles';
import { ReactNode } from 'react';

type ButtonProps = {
	children?: ReactNode;
	className?: string;
	onClick?: () => void;
	size?: keyof typeof btnSizes;
	centered?: boolean;
	disabled?: boolean;
	loading?: boolean;
	fullwidth?: boolean;
};

const btnSizes = {
	md: 'px-2.5 py-1.5 text-sm',
	lg: 'px-2.5 py-2 text-md',
} as const;

export function Button(props: ButtonProps) {
	const {
		children,
		className,
		onClick,
		size = 'md',
		centered = false,
		disabled,
		loading,
		fullwidth,
	} = props;

	const cxClassName = mergedCx(
		'flex items-center justify-center gap-x-1.5 rounded-md bg-rose-500  font-semibold text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700',
		btnSizes[size],
		{
			'cursor-not-allowed bg-rose-400': disabled || loading,
			fullwidth,
			'm-auto': centered,
		},
		className
	);
	return (
		<button
			type='button'
			className={cxClassName}
			onClick={onClick}
			disabled={disabled || loading}
		>
			{children}
		</button>
	);
}
