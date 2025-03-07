import { DroneCameraController } from './drone-camera/camera-controller';
import { DroneController } from './drone-controller';
import { DroneInstructionDisplay } from './drone-instruction';

export function Drone() {
	return (
		<div className='p-4'>
			<div className='mx-auto'>
				<DroneInstructionDisplay />
				<div className='grid grid-cols-2 gap-4'>
					<DroneController />
					<DroneCameraController />
				</div>
			</div>
		</div>
	);
}
