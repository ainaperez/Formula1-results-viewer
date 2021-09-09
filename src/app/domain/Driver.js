/**
 * TODO: Implement the driver class
 */
export default class DriverClass {
	constructor(givenName, familyName, dateOfBirth){
        this.name= String(givenName+" "+familyName);
        this.dateOfBirth=new Date (dateOfBirth);
    }
        getYearOfBirth() {
        return Number(this.dateOfBirth.getFullYear());
}};

