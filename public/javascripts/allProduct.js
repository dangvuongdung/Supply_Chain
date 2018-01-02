

window.onload = function () {
    getContractAddress(function (db_contract, pro_contract, error) {
        if (error != null) {
            //setStatus("Cannot find network. Please run an ethereum node or use Metamask.", "error");
            console.log(error);
            throw "Cannot load contract address";
        }

        dbContract = web3.eth.contract(abiDatabase).at(db_contract);

        productContract = web3.eth.contract(abiProduct).at(db_contract);
        
        console.log(db_contract);
        console.log(web3.eth.contract(abiDatabase).at(db_contract).getCountProduct.call().toNumber());

        web3.eth.getAccounts(function (err, accs) {
            if (err != null) {
                alert("There was an error fetching your accounts.");
                return;
            }
            accounts = accs;
            account = accounts[1];
        });

        var a = web3.eth.contract(abiDatabase).at(db_contract).getCountProduct.call().toNumber();
        console.log(a);


        var data = [];

        for (i = 0; i < a; i++) {

            var s = web3.eth.contract(abiDatabase).at(db_contract).getAddressProduct.call(i)
            data.push(s);

        }
        console.log(data);


        for (n = 0; n < data.length; n++) {
            $("#wrapper").append(`
            <div class="col-lg-4 col-md-6 mb-4">
                <header class="w3-container w3-light-grey">
                    <h3>Product</h3>
                </header>
            <div class="w3-container">
                <p>${data[n]}</p>
                <hr>
            <img src="img_avatar3.png" alt="Avatar" class="w3-left w3-circle">
                <p>President/CEO at Mighty Schools...</p>
            </div>
            <a href="${data[n]}" class="w3-button w3-block w3-dark-grey">Detail</a>
            </div>
            `)
        }
        //     var auctionSection = document.getElementById("page");
        //     var res = "";
        //     for(n = 0; n < 9; n++) { 


        //    res = res + "<div class='list-group'>" ;
        //    res = res + "<a href='javascript:void(0)' class='list-group-item active'>"; 
        //    res = res + "<h4 class='list-group-item-heading'>" +n+" </h4>" ;
        //    res = res + "<p class='list-group-item-text'>Lorem ipsum dim id est laborum.</p>" ;
        //    res = res + "</a>" ;
        //    res = res + "</div> ";


        // }dbContract



        // var ress="";

        // var paganiation1 = document.getElementById("a");

        // ress = ress + "<nav aria-label=...>";
        // ress = ress + "<ul class=pagination>";
        // ress = ress + "<li id='previous-page'>";
        // ress = ress + "<a href='javascript:void(0)' aria-label=Previous>";
        // ress = ress + "<span aria-hidden=true>&laquo;</span>";
        // ress = ress + "</a>";
        // ress = ress + "</li>";dbContract
        // ress = ress dbContract+ "</ul>";
        // ress = ress + "</nav>";



        //  auctionSection.innerHTML = res;
        //  paganiation1.innerHTML = ress;
    });
}








