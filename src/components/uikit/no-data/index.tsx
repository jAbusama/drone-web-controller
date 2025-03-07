import { FunctionComponent } from 'react';

const NoData: FunctionComponent = () => {
	return (
		<div className='bg-background-block w-full mx-auto text-center h-full flex flex-col items-center justify-center'>
			<div className='border border-background-stroke shadow-xs p-3.5 rounded-xl mb-5'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z'
					/>
				</svg>
			</div>
			<p className='mb-2 text-lg font-medium'>No data yet</p>
			<p className='max-w-[350px] text-sm'>
				After you will start sending instruction to the drone then you will see
				the billboards here
			</p>
		</div>
	);
};

export default NoData;
