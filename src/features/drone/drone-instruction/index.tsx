import { Button } from '@/components/uikit/button';
import useDroneStore from '@/store/store';

export function DroneInstructionDisplay() {
	const currentDroneInstruction = useDroneStore(
		(state) => state.droneInstruction
	);
	const resetInstruction = useDroneStore((state) => state.resetInstruction);

	const onResetHandler = () => {
		resetInstruction();
	};
	return (
		<div className='flex flex-col justify-center mb-8'>
			<p className='text-gray-700 font-bold text-sm'>Current Instruction</p>
			<div className='flex justify-between bg-gray-100 p-2 rounded-xl'>
				<p>{currentDroneInstruction}</p>

				<Button onClick={onResetHandler} disabled={!currentDroneInstruction}>
					Reset
				</Button>
			</div>
		</div>
	);
}
