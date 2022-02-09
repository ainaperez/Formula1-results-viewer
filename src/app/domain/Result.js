/**
 * Implement the result class
 */

export default class Result {
	constructor(position, driver, constructorName, time, score){
        this.position = position;
        this.driver = driver;
        this.constructorName = constructorName;
        this.time = time; 
        this.score = score;
    } 
}
