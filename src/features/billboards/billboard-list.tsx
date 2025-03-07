import { Billboard } from '@/api/model';
import NoData from '@/components/uikit/no-data';
import useDroneStore from '@/store/store';

type CapturedBillboardProps = {
	capturedBillboards: Billboard[];
	isLoading: boolean;
};
export function BillboardList(props: CapturedBillboardProps) {
	const { capturedBillboards: billboards, isLoading = false } = props;

	const setSelectedBillboard = useDroneStore(
		(state) => state.setSelectedBillboardId
	);

	const onClickBillboard = (id: string) => {
		setSelectedBillboard(id);
	};

	return (
		<div className='relative h-64 transition-all bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl overflow-hidden'>
			{billboards.length === 0 && <NoData />}

			<ul
				role='list'
				className='overflow-y-auto h-full divide-y divide-gray-100'
			>
				{billboards.map((billboard) => (
					<li
						key={billboard.id}
						className='relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6'
					>
						<div className='flex min-w-0 gap-x-4'>
							<img
								alt={billboard.billboardText}
								src={billboard.image}
								className='size-12 flex-none rounded-full bg-gray-50'
							/>
							<div className='min-w-0 flex-auto'>
								<p className='text-sm/6 font-semibold text-gray-900'>
									<button
										onClick={() => onClickBillboard(billboard.id)}
										className='cursor-pointer'
									>
										<span className='absolute inset-x-0 -top-px bottom-0' />
										{billboard.advertiser}
									</button>
								</p>
								<p className='mt-1 flex text-xs/5 text-gray-500'>
									{billboard.billboardText}
								</p>
							</div>
						</div>

						<div className='flex shrink-0 items-center gap-x-4'>
							<div className='flex flex-col items-end'>
								<div>
									<span className='text-xs mx-2 font-medium text-gray-600'>
										No. of photos taken:
									</span>
									<p className='inline text-md font-medium text-gray-800'>
										{billboard.photosTaken}
									</p>
								</div>
								<div>
									<span className='text-xs mx-2 font-medium text-gray-600'>
										Address:
									</span>
									<address className='inline mt-1 text-xs/5 text-gray-500'>
										{billboard.address}
									</address>
								</div>
							</div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 20 20'
								strokeWidth={1.5}
								stroke='currentColor'
								aria-hidden='true'
								className='size-5 flex-none text-gray-400'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='m8.25 4.5 7.5 7.5-7.5 7.5'
								/>
							</svg>
						</div>
					</li>
				))}
			</ul>

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
	);
}
