


const checkData =  (form) =>  { 
    const errorMasageBox = form.parentNode.querySelector('.text-field__message'); 
    if((!!form.value)){ 
       
        form.classList.remove("text-field__input--error") 
        errorMasageBox.classList.add('text-field__message--hidden')
        if(form.id==="input--email") { 
            let email = (/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm.test(form.value))
            if (!email){ 
                form.setAttribute('placeholder' , 'email@example/com')
                form.classList.add("text-field__input--error") 
                errorMasageBox.classList.remove('text-field__message--hidden')
                errorMasageBox.innerHTML = "error in email" ; 
                return false
            }
            form.setAttribute('placeholder' , 'Email Address')
            errorMasageBox.innerHTML = "Email Address cannot be empty" ; 
            return true  
        }

        return true 
    }
    else { 
        if(form.id==="input--email") { 
            
            form.setAttribute('placeholder' , 'email@example/com')
        }
        
        form.classList.add("text-field__input--error") 
        errorMasageBox.classList.remove('text-field__message--hidden')
    }
    return false 
}

const getValue = (allForm)=> { 
    
    allForm.forEach(inputForm => {
        checkData(inputForm)  ; 
    });

} 



const signUp__btn = document.querySelector(".signup__btn") ; 

const allForm  = document.querySelectorAll(".text-field__input ");        
signUp__btn.addEventListener('click',() =>  getValue(allForm))

