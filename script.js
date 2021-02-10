function myFunction() {
    const mortgageAmount = document.getElementById("Amount").value
    const interestRate = document.getElementById("interestrate").value
    const payment = monthlyPayment(Number(mortgageAmount), Number(interestRate))
    document.getElementById("monthlymortgagepayment").innerText = `Monthly Mortgage Payment: ${payment}`
  }


function monthlyPayment(p, interestRate) {
   // console.log(typeof p) //prints to the console
    const n = 25*12 
    const i = interestRate/12/100
    let x = p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1)
  return x.toFixed(2);
}