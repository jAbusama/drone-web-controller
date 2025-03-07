export type DroneResponse = {
	success: boolean;
	instruction: '';
	billboards: Billboard[];
};

export type GetBillboardResponse = {
	success: boolean;
	billboard: Billboard | null;
};

export type Billboard = {
	id: string;
	x: number;
	y: number;
	photosTaken: number;
	advertiser: string;
	address: string;
	billboardText: string;
	image: string;
};
