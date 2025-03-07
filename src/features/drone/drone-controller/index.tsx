// import { Button } from '@/components/uikit/button';

import { Card } from '@/components/uikit/card';
import { ArrowButton } from '@/components/uikit/arrow-button';

import useDroneStore from '@/store/store';
import { DroneCommandValues } from '@/constant';

export function DroneController() {
	const setInstruction = useDroneStore((state) => state.setDroneInstruction);

	const onChangeCommand = (command: DroneCommandValues) => {
		setInstruction(command);
	};

	return (
		<Card title='Drone controller'>
			<div className='h-full flex flex-col justify-center items-center gap-2'>
				<div className='grid grid-cols-3 grid-rows-3 place-items-center gap-2'>
					{/* up button */}
					<div className='col-start-2'>
						<ArrowButton
							className='rotate-180'
							onClick={() => onChangeCommand(DroneCommandValues.UP)}
						/>
					</div>
					<div className='row-start-2 col-start-1'>
						<ArrowButton
							className='rotate-90 '
							onClick={() => onChangeCommand(DroneCommandValues.LEFT)}
						/>
					</div>

					<div className='row-start-2 col-start-3'>
						<ArrowButton
							className='rotate-270'
							onClick={() => onChangeCommand(DroneCommandValues.RIGHT)}
						/>
					</div>
					<div className='row-start-3 col-start-2'>
						<ArrowButton
							onClick={() => onChangeCommand(DroneCommandValues.DOWN)}
						/>
					</div>
				</div>
			</div>
		</Card>
	);
}
