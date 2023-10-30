document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('tipForm');
    const billTotal = document.getElementById('billTotal');
    const tip = document.getElementById('tip');
    const tipPercentage = document.getElementById('tipPercentage');
    const tipAmount = document.getElementById('tipAmount');
    const totalWithTip = document.getElementById('totalWithTip');
    const resetButton = document.getElementById('resetButton');
    const billTotalError = document.getElementById('billTotalError');

    form.addEventListener('input', function () {
        const bill = parseFloat(billTotal.value);
        const tipValue = parseInt(tip.value);
        
        if (!(isNaN(bill) || isNaN(tipValue))) {
            billTotalError.textContent = ''; 
            tipPercentage.value = tipValue + '%';
            const tipAmountValue = (bill * tipValue) / 100;
            tipAmount.value = tipAmountValue.toFixed(2);
            totalWithTip.value = (bill + tipAmountValue).toFixed(2);
        } else {
            billTotalError.textContent = 'Please enter a valid number for Bill Total and Tip.';
            tipPercentage.value = '';
            tipAmount.value = '';
            totalWithTip.value = '';
        }
    });

    resetButton.addEventListener('click', function () {
        billTotal.value = '';
        tip.value = 10;
        tipPercentage.value = '';
        tipAmount.value = '';
        totalWithTip.value = '';
    });
});
