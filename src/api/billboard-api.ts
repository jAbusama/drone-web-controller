import { BASE_URL } from './api';
import { GetBillboardResponse } from './model';

export const getBillboardApi = async ({
	queryKey,
}: {
	queryKey: [string, string | null];
}): Promise<GetBillboardResponse> => {
	const [, id] = queryKey;

	const response = await fetch(`${BASE_URL}/get-billboard?id=${id}`);
	if (!response.ok) {
		throw new Error('Failed to command drone!');
	}
	return response.json();
};
