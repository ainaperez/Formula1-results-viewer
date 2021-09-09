import apiClient from './api_client';
import driverFactory from './domain/driver.factory';
import Result from './domain/Result';

// TODO: Complete this function to return an array of results
export async function list(year, stage) {
	const dataFromtheApi = await apiClient.list(year, stage);

	return dataFromtheApi.MRData.RaceTable.Races[0].Results.map((rawResult) => {
		// TODO: Create a driver from the raw result from the api
		const driver = driverFactory.create(rawResult.Driver.givenName, rawResult.Driver.familyName, rawResult.Driver.dateOfBirth );
		

		// TODO: Create a Result using the driver and the rawResult from the api
		const position = rawResult.position;
		const constructorName = rawResult.Constructor.name;
		const time = function(){
			if(rawResult.status === 'Finished'){
				return rawResult.Time.time;
			}else{
				return rawResult.status;
			}
		}
		const score = rawResult.points;
		const result = new Result(position, driver.name, constructorName, time(), score);
		

		return result;
	});
}

const model = {
	list,
};

console.log(model)

export default model;
