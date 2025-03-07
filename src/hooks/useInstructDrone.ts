import { useQuery } from '@tanstack/react-query';

import { instructDroneApi } from '@/api/drone-api';
import { TagTypes } from '@/constant';
import useDroneStore from '@/store/store';

export const useSendDroneInstruction = () => {
	const droneInstruction = useDroneStore(
		(state) => state.validDroneInstruction
	);

	const { data, isLoading, isFetching, isError } = useQuery({
		queryKey: [TagTypes.DRONE_INSTRUCT, droneInstruction],
		queryFn: instructDroneApi,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		enabled: !!droneInstruction,
		placeholderData: (previousData) => previousData,
		select: (data) => ({ ...data, billboards: data.billboards.reverse() }),
	});

	return { data, isLoading, isFetching, isError };
};
