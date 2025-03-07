import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

import { DroneCommandValues } from '@/constant';

type DroneSliceState = {
	validDroneInstruction: string;
	droneInstruction: string;
	selectedBillboardId: string | null;
	setDroneInstruction: (instruction: string) => void;
	setSelectedBillboardId: (payload: string | null) => void;
	resetInstruction: () => void;
};

const createDroneSlice: StateCreator<
	DroneSliceState,
	[['zustand/devtools', never]],
	[],
	DroneSliceState
> = (set, get) => ({
	droneInstruction: '',
	selectedBillboardId: null,
	validDroneInstruction: '',
	setDroneInstruction: (instruction: string) => {
		const checkCommands = () => {
			const lastValidCommand = get().validDroneInstruction;
			const currentInstruction = get().droneInstruction.concat(instruction); // Combine with current instruction

			// Find the last index of CAMERA command in both the current and last valid instructions
			const currentCameraIndex = currentInstruction.lastIndexOf(
				DroneCommandValues.CAMERA
			);
			const lastCameraIndex = lastValidCommand.lastIndexOf(
				DroneCommandValues.CAMERA
			);

			// If the positions of the last 'CAMERA' command are different, update the current valid instruction
			if (currentCameraIndex !== lastCameraIndex) {
				return currentInstruction;
			}

			// Otherwise, return the last valid command
			return lastValidCommand;
		};

		set((state) => {
			return {
				droneInstruction: state.droneInstruction.concat(instruction),
				validDroneInstruction: checkCommands(),
			};
		});
	},
	setSelectedBillboardId: (payload: string | null) =>
		set(() => ({ selectedBillboardId: payload })),
	resetInstruction: () =>
		set(() => ({
			droneInstruction: '',
			validDroneInstruction: '',
		})),
});

const useDroneStore = create<DroneSliceState>()(
	devtools((...args) => ({
		...createDroneSlice(...args),
	}))
);

export default useDroneStore;
