document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userName= document.getElementById("name").value;
    const km = parseFloat(document.getElementById("km").value);
    const age = document.getElementById("age").value;
    const ticketPrice = 0.21*km;
    console.log(ticketPrice)
    let discount = 0;
    if (isNaN(km) || km<0) {
        console.log("L'età e la distanza devono essere numeri maggiori di 0");
    } else {
        if (age==="minorenne") {
            console.log("I minorenni hanno diritto ad uno sconto del 20%");
            discount = ticketPrice*0.2;
        } else if (age==="over65") {
            console.log("Gli over 65 hanno diritto ad uno sconto del 40%");
            discount = ticketPrice*0.4;
        } else if(age==="maggiorenne") {
            console.log("Non hai diritto allo sconto");
        
        }
        const finalPrice =ticketPrice-discount;
        const finalPriceFormatted = new Intl.NumberFormat('it-IT', {
            style: 'currency', currency: 'EUR',
        }).format(finalPrice);
        console.log('Il prezzo finale da pagare per il biglietto è: '+ finalPriceFormatted);
    }
        

})