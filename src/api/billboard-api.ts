import { GetBillboardResponse } from './model';

export const getBillboardApi = async ({
	queryKey,
}: {
	queryKey: [string, string | null];
}): Promise<GetBillboardResponse> => {
	const [, id] = queryKey;

	const response = await fetch(`http://localhost:4001/get-billboard?id=${id}`);
	if (!response.ok) {
		throw new Error('Failed to command drone!');
	}
	return response.json();
};
