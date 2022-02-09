# Formula 1 Viewer

## Contact

Hi! I am Aina a front-end developer specialized in HTML, CSS, JAVASCRIPT and React.

Feel free to explore the rest of my Github or my [personal portfolio](https://ainaperez.com/).

You can also contact me through [linkedin](https://www.linkedin.com/in/ainaperezserra/)

Happy reading!

## Goal of the project

The goal of this project was to create a small application to search the results of Formula 1 races.

The base architecture of the project is based in the MVC model (mode - view - controller) and it was provided by my university.
My tasks were to provide the functionality of the application creating the different functions, connecting with the Formula 1 API and passing the tests build with cypress.

There are some scripts to help run the application:

- `npm start` launches a development server on localhost: 3000.
- `npm run test: e2e: watch` Launches a series of end-to-end tests to check the correct performance of the practice, interactively.
- `test: e2e` Launches a series of end-to-end tests to check the correct performance

## Developement process of the project

### PHASE 1: Learning about OOP with constructor functions and classes.

1. **Building the Pilot entity**

   My first step to build the application was to create a Pilot entity with a **constructor function**. The constructor function recieved three parameters: the name, the surnames and date of birth of the pilot.

   The returned objects **only had to have** two properties and one function:

   - `name`: String that represents the full name of the pilot
   - `dateOfBirth`: Date that represents the birth date of the pilot
   - `getYearOfBirth`: Function that returns a number that represents the birth date of the pilot in UTC format.

   ```
   export function DriverFn(givenName, familyName, dateOfBirth) {
       this.name= String(givenName+" "+familyName);
       this.dateOfBirth=new Date (dateOfBirth);
   }
       DriverFn.prototype.getYearOfBirth = function() {
       return Number(this.dateOfBirth.getFullYear());
   };
   ```

   When building that I learned about Object.propotype and its importance when working with constructor functions. [Here](https://dev.to/ainaperez/what-is-prototype-and-how-it-works-in-constructor-functions-43kj) you can read an article I wrote about what I learned.

   As a second step I had to implement the same functionality but with a **class** instead of a constructor function, which is the one used in the final project:

   ```
   export class DriverClass {
       constructor(givenName, familyName, dateOfBirth){
           this.name= String(givenName+" "+familyName);
           this.dateOfBirth=new Date (dateOfBirth);
       }
           getYearOfBirth() {
           return Number(this.dateOfBirth.getFullYear());
   }};
   ```

2. **Use the factory pattern to create Driver Objects.**

   The factory pattern will allow us to create objects of different types using a simple API. In our case we have a `driverFactory` as well as a single `create` method that allows us to create pilots in a simple way without using `new` or worrying about the concrete implementation.

   ```
   export const driverFactory = {
       create(givenName, familyName, dateOfBirth){
           return{
               name: String(givenName+" "+familyName),
               dateOfBirth: new Date(dateOfBirth),
               getYearOfBirth() {
                   return Number(this.dateOfBirth.getFullYear())
           }
       };
   }}
   ```

### PHASE 2: Learning about asynchronous Javascript

As this project works with API calls, it was mandatory to implement asynchronous functions.

1. **Implement a `listResultsCallback` function, using the [XMLHTTPRequest] API(https://developer.mozilla.org/en-US/docs/ Web/API/XMLHttpRequest) from the browser.**

   Being the first time working with asynchronous javascript, we worked with callbacks (at the end, I was working with promises and async functions).
   This function will allow us to obtain the results of an F1 race for a specific season.
   The function receives two parameters:

   - `year`: F1 season from which we will obtain data.
   - `stage`: Course number of the corresponding season from which we will obtain data.

   And a third parameter `callback`. This _callback_ is a function that will execute once we get the results from the server.

   This worked by using [l'API de F1 d'ergast.com](https://ergast.com/mrd/methods/results/), for example, to obtain the results of the first stage of 2020 we have to call the _endpoint_:

   ```
   function listResultsCallback(year, stage, callback) {
       let req = new XMLHttpRequest();
       let url = 'https://ergast.com/api/f1/'+ year +'/'+stage+'/results.json';
       req.open("GET", url);
       req.responseType = 'json';
       req.onload = function(){
           callback(req.response);
       }
       return req.send();

   }
   ```

2. **Create a _wrapper_ of the function utility promises.**

   The second task was to create a wrapper for the previous function using promises.

   The _callbacks_ approach has been for most of the times the most widely used in the JavaScript ecosystem. But it had a lot of related problems. For example, we would encounter problems If we had to ask for the results of two races or if we wanted to create a callback receiving two results.

   The asynchrony based on _callbacks_ becomes more complex as the application grows, producing the phenomenon of **[callack hell](http://callbackhell.com/)**. In order to avoid that promises appeared in JavaScript.

   The goal of the exercise was to implement a `listResultsPromise` function, which works the same as `listResultsCallback`, but instead of receiving a callback as third parameter, it will return a promise.

   ```
   function listResultsPromise(year, stage) {
       let promise = new Promise(function(resolve, reject){
       let req = new XMLHttpRequest();
       let url = 'https://ergast.com/api/f1/'+ year +'/'+stage+'/results.json';
       req.open("GET", url);
       req.responseType = 'json';
       req.onload = function(){
           if(req.status == 200){
           resolve(req.response);
           }else{
           reject("The request was not found");
           }
       }
       req.send();
       });
       return promise;
   }
   ```

3. **Implement the same function using fetch instead of XMLHttpRequest**

   To keep improving with asynchrony, the next step was to re-implement the above function using the browser's `fetch` API.

   The function had to fulfill these requirements:

   - The name of the function has to be `list`
   - It had to return a promise with the list of results
   - I had to use the `fetch` API

   ```
   function list(year, stage) {
       let req = fetch('https://ergast.com/api/f1/'+ year +'/'+stage+'/results.json')
           .then(res => {
               return res.json();
           })
           .then(data => {
               return data;
           });
       return req;
   }
   ```

4. **Simple extra promise exercice**

   To practice promises a bit more I had to implement a function called `list2ResultsCallback (callback)` that receives the _callback_ parameter. This function should ask for the results of two races, reusing the `listResultsCallback` function. As soon as both results are available, the callback function should be called.

   Then implement a `list2ResultsPromise()` function that works the same as `list2ResultsCallback`, but using promises.

   ```
   function list2ResultsCallback(callback) {
       listResultsCallback(2019, 1, function (r1){
           listResultsCallback(2020 , 2 , function (r2){
               callback([r1, r2]);
           })
       })
   }

   function list2ResultsPromise() {
       let a = Promise.all([list(2019, 1), list(2020, 2)])
       .then(resultat => {
           return resultat;
       });

       return a;
   }
   ```

5. **Async await exercise**

   As a bit more advanced exercise with asynchrony I had to Implement a function called `getNationality (driverId)` that took a driver's identifier as a parameter and returned a promise that would be resolved with only one string representing the driver's nationality.

   Then implement a `listNationalities(year, stage)` function that, given a year and a stage of a race, would return a promise that is resolved with an array of strings containing the nationalities of the top 5.

   ```
   export async function getNationality(driverId) {
       let nation =  await fetch('https://ergast.com/api/f1/drivers/'+driverId+'.json')
       let data = await nation.json();
       let nationality = data.MRData.DriverTable.Drivers[0].nationality;

       return nationality;
   }

   export async function listNationalities(year, stage) {
       let data = await fetch('https://ergast.com/api/f1/'+ year +'/'+stage+'/results.json')
       let list = await data.json();
       let arrClassified = list.MRData.RaceTable.Races[0].Results;
       let first5 = arrClassified.slice(0,5);
       let arrNation = [];
       for(let i = 0; i<first5.length; i++){
           var driver = first5[i].Driver.nationality;
           arrNation.push(driver);

       }
       return arrNation;
   }
   ```

### Putting everything together in an MVC architecture

In this last part of the exercise, I had to implement everything learned in an MVC application that would fetch the results and display them in a table format.
To do this last part of the project we were provide with a basic structure that included:

- `index.js` : the entry point of the application. Upload styles and application. This file wasn’t modified.

And several files in the app folder:

- `api_client.js` Where to put the functions in charge of communicating with the server.
- `domain` A folder containing the entities in our application.
- `view.js` Containing the functions responsible for modifying the view and the DOM.
- `model.js` Responsible for building entities based on server responses.
- `controller.js` Connects the view to the model.

1. **Search using the API**

   The aim was to implement a small Formula 1 result finder given a year and a stage. The search process is as follows:

   ! [/img/image1.png] (/img/image1.png)

   1. The user selects a year and a stage, and clicks on _Search_. This causes an API call to retrieve the data. While waiting for the answer, the text _Loading ..._ should be displayed.

   2. When we receive the data from the API, a list with the data is displayed, following this format:

   ! [/img/image2.png] (/img/image2.png)

   If the driver does not finish the race, the "Time" column must show the reason why he left.

   ! [/img/image3.png] (/img/image3.png)

   To implement this, I first completed an async function in the `api_client.js` file that used fetch to get the data from the API. The function accepts two parameters `year` and `stage` that are included dynamically in the fetch request.

   **note 2022:** changed the fetch url from using simple string concatenation to using template literals.

   This function is stored inside the object constant `apiClient`, that is then exported to include it in the `model.js` file (explained further in a minute)
   Secondly, inside domain, I included the Driver class, exported as `DriverClass`, and the `driverFactory` that were created in the beginning of the project. There is also the Result class which receives as parameters the position, the driver, the constructorName, the time and the score.

   Once I had the base elements finished I started implementing the model.

   ***

   In the model I imported the apiClient function, the driver factory and the Result Class.

   The model consists of a single async function that used the previous elements to get create the results.

   First it uses the `apiClient.list` function to retrieve the data from the API. I used the await keyword in order for the program to wait for a response of the data before acting upon it. This data is stored in the `dataFromtheApi` constant.

   In the return statement we act with this data. From the data fetched we navigate to the Races array and from it we get the Results array (this can be consulted on the console).

   I used a map method to get every single raw result.
   Here I used the `driverFactory` and its method create to create a new driver with each of the properties of the `rawResult` as parameters.
   We also get the position of the driver, stored in the constant position, and the constructorName.

   Inside the constant time I used a function to determine if the driver had finished the race or otherwise show why it didn’t finish.
   I also stored the points inside the constant score.
   In the end, we create the constant result, using the class `Result` and passing as parameters the previous variables), and we return it.

   ***

   After finishing the functionality, I moved on to the view.js of the application.

   At first I selected all necessary elements from the DOM, to be able to modify them with the data.

   I created some functions to get the data from the form with `getSelectedYear`, `getSelectedStage` and adding a submit listener to the form. The submit event receives a callback as second parameter, that I set in the controller of the application to be the list function of the model.

   I also created a function to clean the results when a new search is done. The function cleans the previous results and appends the head, through the function `_createTheadElement`, and sets de loader. The loading text is displayed with the function `setLoading`.

   **Note 2022:** fixed a previous error, where the loading text didn’t disappear when the fetching was done. I solved it creating a new removeLoading function and setting its display to none. In the controller I call the function once the fetching is done.

   There’s also a small function to display a text when there’s an error.

   Once the results are fetched, the function addResult is called. The function uses a for loop to go through all the results and creates a table row for each one with the `_createResult` function.

   ***

   The final step was to put everything together in the controller.

   The controller exports a main function init with the `setFormListener` function that receives the function handleSubmit as a parameter. That means, when the form is sent, the handleSubmit function acts as the callback function to be executed.

   The `handleSubmit` function prevents the default behaviour of reseting the form then it is submit.
   Then, it executes the `clearResults` function to clean the table in case there was a previous search. Then, in the variable a we store the function list from the model. That function was async and returned a promise.
   After the data is fetched, the loading is removed and the results are added.
   In the case there’s an error, it is catched with `setError`.

2. View pilot details

   Once we have shown the data, by clicking on the rows in the table, we want to show a modal with the name of the pilot:

   ! [/img/image4.png] (/img/image4.png)

   This modal should close when you click again on the dark area of the screen ** but should remain open when the user clicks on the white area of the mode **.

   As a final add-on to the project, I created the functions `_showModal` and `_hideModal` to be able to show the pilots name in a modal when it is clicked.
