function copyToClip(str) {
    function listener(e) {
        e.clipboardData.setData("text/html", str);
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
};

function calculate() {
    var bill = Math.ceil(document.getElementById("Bill").value);
    var months = document.getElementById("months").value;
    var ticketNumber = document.getElementById("ZD").value;
    var amount = Math.ceil(bill*months);
    var can = `We feel where you're coming from, and we want to do everything we can to empower your business/organization to remain active during this difficult time.</br>I've gone ahead and applied three months of credit worth ${amount}.00 USD to the account to cover those costs for your current plan. You are responsible for paying the costs incurred above the credit.`;
    var outputContainer = document.getElementById("amount");
    var canContainer = document.getElementById("can");
    var mcaContainer = document.getElementById("mca");
    var mcaNote = `ZD:${ticketNumber} Covid-19 Assistance`;
    copyToClip(amount);
    outputContainer.innerHTML = amount;
    canContainer.innerHTML = can;
    mcaContainer.innerHTML = mcaNote;
};

document.getElementById("calculate").addEventListener("click", calculate)