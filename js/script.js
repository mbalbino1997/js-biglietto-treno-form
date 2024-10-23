document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userName= document.getElementById("name").value;
    const km = parseFloat(document.getElementById("km").value);
    const age = document.getElementById("age").value;
    const ticketPrice = 0.21*km;
    let discount = 0;
    let discountName="Biglietto standard";
    if (isNaN(km) || km<0) {
        alert("L'età e la distanza devono essere numeri maggiori di 0");
    } else {
        if (age==="minorenne") {
            
            discount = ticketPrice*0.2;
            discountName="Sconto minorenni(20%)";
        } else if (age==="over65") {
            
            discount = ticketPrice*0.4;
            discountName="Sconto over 65(40%)"
        } 
        const finalPrice =ticketPrice-discount;
        const finalPriceFormatted = new Intl.NumberFormat('it-IT', {
            style: 'currency', currency: 'EUR',
        }).format(finalPrice);
        
    
        document.getElementById("user").textContent=userName;
        document.getElementById("finalPrice").textContent=finalPriceFormatted;
        document.getElementById("discount").textContent=discountName;
    }

})