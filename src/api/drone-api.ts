import { DroneResponse } from './model';

export const instructDroneApi = async ({
	queryKey,
}: {
	queryKey: [string, string];
}): Promise<DroneResponse> => {
	console.log(queryKey);
	const [, instruction] = queryKey;
	console.log('intruction', instruction);
	const response = await fetch(
		`http://localhost:4001/instruct-drone?instructions=${instruction}`
	);
	console.log('response', response);
	if (!response.ok) {
		throw new Error('Failed to command drone!');
	}
	return response.json();
};
