
// document.getElementById('btn-login').addEventListener('click',function(event){
//     event.preventDefault;

//     const phonNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;

//     if(phonNumber === '01961849643' && pinNumber === '1234' ){
//         console.log('You are logged in.');
//     }else{
//         alert('Wrong phone number or pin')
//     }
// })

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();

    // get phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    const tempPhone = "01961849643";
    const tempPin = "14131211";

    // validate the phone number
    if(phoneNumber === tempPhone && pinNumber === tempPin){
        console.log('You are logged in')
        window.location.href = '../home.html';
    }else{
        alert('Wrong phone number or pin.');
    }

});

const phone = document.getElementById('phone-number');
phone.classList.remove('hi')
console.log(phone)