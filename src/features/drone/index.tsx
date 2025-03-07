import useDroneStore from '@/store/store';
import { DroneCameraController } from './drone-camera/camera-controller';
import { DroneController } from './drone-controller';
import { DroneInstructionDisplay } from './drone-instruction';

export function Drone() {
	const currentDroneInstruction = useDroneStore(
		(state) => state.droneInstruction
	);
	const resetInstruction = useDroneStore((state) => state.resetInstruction);

	const onResetInstructionHandler = () => {
		resetInstruction();
	};
	return (
		<div className='p-4'>
			<div className='mx-auto'>
				<DroneInstructionDisplay
					droneInstruction={currentDroneInstruction}
					resetDroneInstruction={onResetInstructionHandler}
				/>
				<div className='grid grid-cols-2 gap-4'>
					<DroneController />
					<DroneCameraController />
				</div>
			</div>
		</div>
	);
}
