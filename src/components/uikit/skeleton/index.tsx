import { FunctionComponent } from 'react';

import { mergedCx } from '@/shared/styles';

type RoundSize = 'sm' | 'rounded' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

interface SkeletonProps {
	className?: string;
	rounded?: RoundSize;
}

export const Skeleton: FunctionComponent<SkeletonProps> = (props) => {
	const { rounded = 'md', className } = props;

	const cxClassName = mergedCx(
		'animate-pulse bg-[#dde2e7]',
		{
			[`rounded-${rounded}`]: rounded,
		},
		className
	);

	return <div className={cxClassName} />;
};
