import type { Tourney } from "./types.ts";

export const tourneys: Tourney[] = [
	{
		year: 2022,
		name: "osu! España Christmas Tournament 2",
		acronym: "o!ECT 2",
		format: "1v1",
		teamsOf: "solo",
		range: "10k+",
		links: {
			sheet:
				"https://docs.google.com/spreadsheets/d/1mJXiw7UkRgXalCnlsOCblXnlPHHvmBcaQlia8-Jjsv4/edit?gid=459262030#gid=459262030",
		},
		result: {
			seed: 34,
			stageFinished: "DNQ",
		},
		rounds: [
			{
				name: "Qualifiers",
				mps: ["https://osu.ppy.sh/community/matches/105537965"],
				stats:
					"https://docs.google.com/spreadsheets/d/1mJXiw7UkRgXalCnlsOCblXnlPHHvmBcaQlia8-Jjsv4/edit?gid=704690436#gid=704690436&range=B37:E37",
			},
		],
	},
	{
		year: 2023,
		name: "Dynasty Cup Season 1",
		acronym: "DCS1",
		format: "4v4",
		teamsOf: 8,
		range: "10k - 99.9k",
		links: {
			forum: "https://osu.ppy.sh/community/forums/topics/1706089?n=1",
		},
		teamName: "i love yuri",
		team: [
			{ id: 7930869, username: "Digoco", country: "ES" },
			{ id: 16195397, username: "oshino-", country: "ES" },
			{ id: 18202514, username: "Agatem", country: "ES" },
			{ id: 18918243, username: "Shofty", country: "ES" },
			{ id: 15186865, username: "Minikrimi", country: "ES" },
			{ id: 17125966, username: "Sprinter05", country: "ES" },
		],
		result: {
			seed: 34,
			stageFinished: "DNQ",
		},
		rounds: [
			{
				name: "Qualifiers",
				mps: ["https://osu.ppy.sh/community/matches/106941948"],
			},
		],
	},
	{
		year: 2026,
		name: "5 Digit European Cup Minor League 2026",
		acronym: "5EC26 ML",
		format: "4v4",
		teamsOf: 8,
		range: "10k - 99.9k",
		links: {
			forum: "https://osu.ppy.sh/community/forums/topics/2160276?n=1",
			sheet:
				"https://docs.google.com/spreadsheets/d/144-fwf8eFt6RKKAX91rkb9NVhxf8j03KLqyhiWmLs8g/edit?gid=251284964#gid=251284964",
		},
		teamName: "Spain C",
		team: [
			{ id: 10654153, username: "- Shizuru", country: "ES" },
			{ id: 7930869, username: "Digoco", country: "ES" },
			{ id: 4638940, username: "Sakuya-", country: "ES" },
			{ id: 18296881, username: "Zaik0", country: "ES" },
			{ id: 7063961, username: "supley", country: "ES" },
			{ id: 15227406, username: "darkmichigun", country: "ES" },
			{ id: 18202514, username: "Agatem", country: "ES" },
		],
		result: {
			seed: 32,
			stageFinished: "DNQ",
		},
		rounds: [
			{
				name: "Tryouts",
				mps: ["https://osu.ppy.sh/community/matches/120076761"],
				stats:
					"https://docs.google.com/spreadsheets/d/1y4bWkyuotk7b5zJhrL2UvzkbBdOGqiNHVhFgjX5z51A/edit?gid=1144396753#gid=1144396753",
			},
			{
				name: "Qualifiers",
				mps: ["https://osu.ppy.sh/community/matches/120287783"],
			},
		],
	},
	{
		year: 2026,
		name: "FISH CUP",
		acronym: "FISH",
		format: "2v2",
		teamsOf: 3,
		range: "10k - 99.9k",
		links: {
			forum: "https://osu.ppy.sh/community/forums/topics/2170537?n=1",
			sheet:
				"https://docs.google.com/spreadsheets/d/1t5vr8KgQn18U_SCRmba6Xgzef7a02oNZE2_9u90QLWU/edit?gid=0#gid=0",
		},
		teamName: "Spain Team Cobre A",
		team: [
			{ id: 4638940, username: "Sakuya-", country: "ES" },
			{ id: 18296881, username: "Zaik0", country: "ES" },
			{ id: 18202514, username: "Agatem", country: "ES" },
		],
		result: {
			seed: 149,
			stageFinished: "DNQ",
		},
		rounds: [
			{
				name: "Qualifiers",
				mps: ["https://osu.ppy.sh/community/matches/120485323"],
				stats:
					"https://docs.google.com/spreadsheets/d/1f7672FWv8ysLb9O0VwkZspIL2aP-BLy-QOeSGuaoXew/edit?gid=37113069#gid=37113069&range=B158:P158",
			},
		],
	},
	{
		year: 2026,
		name: "Spanish Showdown 2026",
		acronym: "SS26",
		format: "1v1",
		teamsOf: "solo",
		range: "Open Rank",
		links: {
			forum: "https://osu.ppy.sh/community/forums/topics/2176155?n=1",
			sheet: "https://www.spanishshowdown.es/",
		},
		result: {
			seed: 45,
			stageFinished: "Group Stage",
		},
		rounds: [
			{
				name: "Qualifiers",
				mps: ["https://osu.ppy.sh/community/matches/120635512"],
				stats: "https://www.spanishshowdown.es/stats/qualifiers",
			},
			{
				name: "Group Stage",
				mps: [
					"https://osu.ppy.sh/community/matches/120675186",
					"https://osu.ppy.sh/community/matches/120730337",
					"https://osu.ppy.sh/community/matches/120731278",
				],
				stats: "https://www.spanishshowdown.es/stats/group-stage",
			},
		],
	},
	{
		year: 2026,
		name: "Boss Beatdown",
		acronym: "BB",
		format: "1v3",
		teamsOf: 3,
		range: "Invitational",
		links: {
			sheet:
				"https://docs.google.com/spreadsheets/d/12X7nn-MyshUyH5i1Ui-IJDmwMlhyXckKruFeecpESPg/edit?gid=307472767#gid=307472767",
		},
		teamName: "Team C",
		team: [
			{ id: 14791081, username: "- Izayoi -", country: "ES" },
			{ id: 18202514, username: "Agatem", country: "ES" },
			{ id: 7063961, username: "supley", country: "ES" },
		],
		result: {
			seed: 16,
			stageFinished: "Team - 3rd Place",
		},
		rounds: [
			{
				name: "Qualifiers",
				mps: ["https://osu.ppy.sh/community/matches/120933808"],
			},
			{
				name: "Quals-EX",
				mps: ["https://osu.ppy.sh/community/matches/120934121"],
			},
			{
				name: "Week 1-2",
				mps: ["https://osu.ppy.sh/community/matches/121066280"],
			},
			{
				name: "Week 3-4",
				mps: ["https://osu.ppy.sh/community/matches/121145345"],
			},
			{
				name: "Week 5-6",
				mps: ["https://osu.ppy.sh/community/matches/121190802"],
			},
		],
	},
	{
		year: 2026,
		name: "Tayuno's Standout Cup 4 (Division 2)",
		acronym: "TSC4",
		format: "Changing Format",
		teamsOf: 4,
		range: "10k - 99.9k",
		links: {
			forum: "https://osu.ppy.sh/community/forums/topics/2215404?n=1",
			sheet:
				"https://docs.google.com/spreadsheets/d/10o1dR7MiHP4Zy4gc8MPq8zrI48iPlYHss5dodqIh_5k/edit?gid=0#gid=0",
		},
		teamName: "kirby mejor 5 digitos",
		team: [
			{ id: 18202514, username: "Agatem", country: "ES" },
			{ id: 11394526, username: "sandro114", country: "ES" },
			{ id: 31113401, username: "kirby12", country: "ES" },
			{ id: 7063961, username: "supley", country: "ES" },
		],
		result: {
			seed: 40,
			stageFinished: "DNQ",
		},
		rounds: [
			{
				name: "Qualifiers",
				mps: ["https://osu.ppy.sh/community/matches/121582945"],
				stats:
					"https://docs.google.com/spreadsheets/d/1ci6rA3FehYb48DIu65zdwJyUoUnfWnQUwnAwbjMoX-4/edit?gid=90150122#gid=90150122&range=C47:F47",
			},
		],
	},
];
