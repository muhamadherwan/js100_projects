// listen for submit
document.querySelector('#loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e){
    e.preventDefault();
    // UI vars
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    // const totalPayment = document.querySelector('#total-payment');
    const totalPayment = document.getElementById('total-payment');

    const totalInterest = document.querySelector('#total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Count monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2); // return 2 decimal place
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    } else {
        showError('Please check your numbers');
    }   
}

// show error
function showError(error){
    // create div
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    
    // get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // insert error div above heading
    card.insertBefore(errorDiv, heading);

    // clear error after 3 seconds
    setTimeout(clearError, 3000);
}

// clear error 
function clearError(){
    document.querySelector('.alert').remove();
}