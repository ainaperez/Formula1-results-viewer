export function pp1(x) {
	
	if(x === undefined){
		const list = document.getElementsByClassName('media--profile');
		let arr =[];
		for(let i = 0; i<list.length; i++){
            let element = list[i];
            
            
			let student = {
				img : element.getElementsByClassName('media__thumb photo')[0].style.backgroundImage.slice(4, -1).replace(/'"/g, ""),
				name: element.querySelector('.user').innerHTML.trim()
			}
	
			arr.push(student);
			
        }
        
		return arr;

	}else if(x === true){
		const list = document.getElementsByClassName('media--profile on');
		let arr =[];
		for(let i = 0; i<list.length; i++){
            let element = list[i];
            
            
			let student = {
				img : element.getElementsByClassName('media__thumb photo')[0].style.backgroundImage.slice(4, -1).replace(/'"/g, ""),
				name: element.querySelector('.user').innerHTML.trim()
			}
	
			arr.push(student);
			
        }
        
		return arr;
	}else{
		const list = document.getElementsByClassName('media--profile off');
		let arr =[];
		for(let i = 0; i<list.length; i++){
            let element = list[i];
            
            
			let student = {
				img : element.getElementsByClassName('media__thumb photo')[0].style.backgroundImage.slice(4, -1).replace(/'"/g, ""),
				name: element.querySelector('.user').innerHTML.trim()
			}
	
			arr.push(student);
			
        }
        
		return arr;
	}
}

export function pp2() {
	let check = document.querySelector('#cb_enabled');
    check.setAttribute('checked', true);
	let counter = document.querySelector('#js-counter');
	let number = 0;

	
    let decrement = document.querySelector('#btn_decrement');
    let increment = document.querySelector('#btn_increment');
    
    if(increment.hasAttribute('disabled') == false){
        increment.addEventListener('click', function(){
			number++;
			counter.innerHTML = number;
				
		});
           decrement.addEventListener('click', function(){
			number--;
			counter.innerHTML = number;
		 
		});
       }

   check.addEventListener('click', function(){
       if(check.checked === false){
            check.setAttribute('checked', false);
            decrement.setAttribute('disabled', true);	
		    increment.setAttribute('disabled', true);
       }else{
			increment.removeAttribute('disabled');
        	decrement.removeAttribute('disabled');	
           check.setAttribute('checked', true);
       }
    })


}

const exercises = {
	pp1,
	pp2,
};

export default exercises;
