import { Billboards } from '@/features/billboards';
import { Drone } from '@/features/drone';

export function Layout() {
	return (
		<div className='w-5xl mx-auto bg-gray-200 rounded-2xl p-4'>
			<div className='space-y-4'>
				<Billboards />
				<Drone />
			</div>
		</div>
	);
}
