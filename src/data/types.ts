interface Player {
	id: number;
	username: string;
	country: string;
}

interface TourneyBase {
	year: number;
	name: string;
	acronym: string;

	format: string;
	range: string;

	links: {
		forum?: string;
		sheet?: string;
	};

	result: {
		seed: number;
		stageFinished: string;
	};

	rounds: {
		name: string;
		mps?: string[];
		stats?: string;
	}[];
}

interface TourneySolo extends TourneyBase {
	teamsOf: "solo";
}

interface TourneyTeam extends TourneyBase {
	teamsOf: number;
	teamName: string;
	team: Player[];
}

export type Tourney = TourneySolo | TourneyTeam;
