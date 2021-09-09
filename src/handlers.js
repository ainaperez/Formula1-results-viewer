import { rest } from 'msw';

export const handlers = [
	rest.get('https://ergast.com/api/f1/2019/1/results.json', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(r1));
	}),

	rest.get('https://ergast.com/api/f1/2020/2/results.json', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(r2));
	}),

	rest.get('https://ergast.com/api/f1/drivers/alonso.json', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(r3));
	}),

	...generateHandlers(),
];

function generateHandlers() {
	const driversR1 = [
		{ id: 'bottas', nationality: 'Finnish' },
		{ id: 'hamilton', nationality: 'British' },
		{ id: 'max_verstappen', nationality: 'Dutch' },
		{ id: 'vettel', nationality: 'German' },
		{ id: 'leclerc', nationality: 'Monegasque' },
		{ id: 'kevin_magnussen', nationality: 'Danish' },
		{ id: 'hulkenberg', nationality: 'German' },
		{ id: 'raikkonen', nationality: 'Finnish' },
		{ id: 'stroll', nationality: 'Canadian' },
		{ id: 'kvyat', nationality: 'Russian' },
		{ id: 'gasly', nationality: 'French' },
		{ id: 'norris', nationality: 'British' },
		{ id: 'perez', nationality: 'Mexican' },
		{ id: 'albon', nationality: 'Thai' },
		{ id: 'giovinazzi', nationality: 'Italian' },
		{ id: 'russell', nationality: 'British' },
		{ id: 'kubica', nationality: 'Polish' },
		{ id: 'grosjean', nationality: 'French' },
		{ id: 'ricciardo', nationality: 'Australian' },
		{ id: 'sainz', nationality: 'Spanish' },
	];

	return driversR1.map((driver) => {
		return rest.get(`https://ergast.com/api/f1/drivers/${driver.id}.json`, (req, res, ctx) => {
			return res(ctx.status(200), ctx.json(_generateResponse(driver.nationality)));
		});
	});
}

function _generateResponse(nationality) {
	return {
		MRData: {
			DriverTable: {
				Drivers: [
					{
						nationality,
					},
				],
			},
		},
	};
}
