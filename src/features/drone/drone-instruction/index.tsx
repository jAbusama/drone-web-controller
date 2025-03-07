import { Button } from '@/components/uikit/button';

type DroneInstrunctionDisplayProps = {
	droneInstruction: string;
	resetDroneInstruction: () => void;
};

export function DroneInstructionDisplay(props: DroneInstrunctionDisplayProps) {
	const { droneInstruction, resetDroneInstruction } = props;

	return (
		<div className='flex flex-col justify-center mb-8'>
			<h2 className='text-gray-700 font-bold text-sm'>Current Instruction</h2>
			<div className='flex justify-between bg-gray-100 p-2 rounded-xl'>
				<p>{droneInstruction}</p>

				<Button onClick={resetDroneInstruction} disabled={!droneInstruction}>
					Reset
				</Button>
			</div>
		</div>
	);
}
