/**
 * TODO: Implement the driver factory exposing a .create method
 * with 3 parameters:
 * - givenName
 * - familyName
 * - dateOfBirth
 *
 */

const driverFactory = {
	create(givenName, familyName, dateOfBirth){
        return{
            name: String(givenName+" "+familyName),
            dateOfBirth: new Date(dateOfBirth),
            getYearOfBirth() {
                return Number(this.dateOfBirth.getFullYear())
        }
    };
}
}

export default driverFactory;
