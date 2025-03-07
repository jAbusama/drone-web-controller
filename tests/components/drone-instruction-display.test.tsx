import React from 'react';
import { render, screen } from '@testing-library/react';
import { DroneInstructionDisplay } from '../../src/features/drone/drone-instruction';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Drone Instruction Display', () => {
	it('It should render instruction', () => {
		const instruction = '<>x<><x';
		render(
			<DroneInstructionDisplay
				droneInstruction={instruction}
				resetDroneInstruction={() => {}}
			/>
		);

		const paragraph = screen.getByRole('paragraph');

		expect(paragraph).toHaveTextContent(instruction);
	});
});
