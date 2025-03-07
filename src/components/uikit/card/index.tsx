import { mergedCx } from '@/shared/styles';
import { ReactNode } from 'react';

type CardProps = {
	children: ReactNode;
	title?: string;
	className?: string;
};

export function Card(props: CardProps) {
	const { title, children, className } = props;
	return (
		<div className={mergedCx('relative bg-gray-100 rounded-lg p-4', className)}>
			{title && (
				<div className='absolute -top-6 -left-0'>
					<p className='text-gray-700 font-bold text-sm'>{title}</p>
				</div>
			)}
			{children}
		</div>
	);
}
