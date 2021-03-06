
// Input section variables
let inputCompany = document.getElementById('company');
let phone = document.getElementById('phone');
let address = document.getElementById('address');
let date = document.getElementById('date');
let pay = document.getElementById('pay');
let websiteInput = document.getElementById('website');
let roleInput = document.getElementById('role');
let button = document.getElementById('submit');
let colResults = document.getElementById('col-results');
let inputForm = document.getElementById('inputcontact');

// All information Array
let companyInfo = [];

inputForm.addEventListener('submit', function(e){

    event.preventDefault();

    var companyText = inputCompany.value ;
    var phoneText = phone.value ;
    var addressText = address.value ;
    var dateText = date.value ;
    var payText = pay.value;
    var websiteText = website.value;
    var roleText = roleInput.value;

if(companyText === ' ' && phoneText === ' ' && addressText === ' ' && dateText === ' ' && payText === ' ' && websiteText === ' ' && roleText === ' ' ){
    button.addEventListener('click',function(){

    });
} else {
    addItems(companyText,phoneText,addressText,dateText,payText,websiteText,roleText);
    
    inputCompany.value = '';
    phone.value = '';
    address.value = '';
    date.value = '';
    pay.value = '';
    website.value = '';
    role.value = '';

}

});

function addItems(companyText,phoneText,addressText,dateText,payText,websiteText,roleText) {

    const div = document.createElement('div');
    div.classList.add('company-sec')
    div.innerHTML = ` <div class="company-sec">
    <h2>${companyText}</h2> <span class="pay">${payText}</span>
        <div class="row">
                <div class="col-md-4">
                    <div class="result-sec">
                        <p>Phone:</p>
                        <span id="result">${phoneText}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="result-sec">
                        <p>Website:</p>
                        <span id="result">${websiteText}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="result-sec">
                        <p>Date Applied:</p>
                         <span id="result">${dateText}</span>
                    </div>
                </div>
        </div>
        <div class="row">
        <div class="col-md-12">
                <div class="result-sec">
            <p>Address</p>
            <span id="address">${addressText} </span>
            </div>
        </div>
    </div>
        <div class="row role">
            <div class="col-md-12">
                <div class="result-sec">
                        <p>Role</p>
                        <span id="role">${roleText}</span>
                </div>
            </div>
        </div>
</div> `;

colResults.appendChild(div);
}
cool studd