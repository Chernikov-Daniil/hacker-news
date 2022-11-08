export type hackerNews = {
	id: number;
	by?: string;
	type?: string;
	title?: string;
	time?: number;
	text?: string;
	url?: string;
	kids?: number[];
	score?: number;
	descendants?: number;
	deleted?: boolean;
	dead?: boolean;
	parent?: number;
	parts?: number[];
};

export type Comment = {
	id: number;
	by: string;
	kids?: number[];
	parent: number;
	text: string;
	time: number;
	type: string;
};
