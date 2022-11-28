const calcTotal = () => {
    const amount = document.getElementById('amount').value;
    document.getElementById('total').innerHTML = `Totaal bedrag is€${amount * 15.00}`;
}