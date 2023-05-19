document.getElementById('deposit-button').addEventListener('click', function () {
    // get amount from input filed
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    // console.log(newDepositText);
    const newDepositAmount = parseFloat(newDepositText);
    // set in deposit box . or update display in deposit total.
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;


    // update new balance

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceTotal);
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear deposit input repeat value

    depositInput.value = '';



})

    document.getElementById('withdraw-button').addEventListener('click', function() {
        // get withdraw input
        const withdrawInput = document.getElementById('withdraw-input');
        const withDrawText = withdrawInput.value;
        const withDrawAmount = parseFloat(withDrawText);
        // withdraw update
        const withDrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawText = withDrawTotal.innerText;
        //  console.log(previousWithdrawText);
       const previousWithdrawAmount = parseFloat(previousWithdrawText);
       const newWithdrawTotal = previousWithdrawAmount + withDrawAmount;
       withDrawTotal.innerText = newWithdrawTotal;

    //    update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceTotal);
    const newBalanceTotal = previousBalanceAmount -  withDrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    withdrawInput.value = '';

    
    


        
    })