import { useSendDroneInstruction } from '@/hooks/useInstructDrone';
import { BillboardList } from './billboard-list';

export function Billboards() {
	const { data, isLoading, isFetching } = useSendDroneInstruction();

	return (
		<div className='p-4'>
			<h1 className='font-bold text-xl'>Captured Billboards</h1>
			<div>
				<BillboardList
					capturedBillboards={data?.billboards || []}
					isLoading={isLoading || isFetching}
				/>
			</div>
		</div>
	);
}
