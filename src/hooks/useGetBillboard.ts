import { getBillboardApi } from '@/api/billboard-api';
import { TagTypes } from '@/constant';
import useDroneStore from '@/store/store';
import { useQuery } from '@tanstack/react-query';

export const useGetBillboardDetails = () => {
	const billboardId = useDroneStore((state) => state.selectedBillboardId);

	const { data, isLoading, isFetching, isError } = useQuery({
		queryKey: [TagTypes.GET_BILLBOARD, billboardId],
		queryFn: getBillboardApi,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		// initialData: { billboard: null, success: false },
		enabled: !!billboardId,
		placeholderData: (prev) => prev,
		staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes
	});

	return { data, isLoading, isFetching, isError };
};
