getContractAddress = function(callback) {
    web3.version.getNetwork(function(error, result) {
        if (error != null) {
            
            console.log('Unknown network');
            error = "Failed to load ethereum network and smart contract";

        } else if (result == "1" || result == "2" || result == "3") {

            //solo network
            if (result == "1") {
                db_contract = '0xd0eb41ad1a67741762733a45E465A864F86046E2';            
            }

            //Testnet Setup Morden
            if (result == "2") {
               
            }

            // TestNet Ropsten
            if (result == "3") {
                db_contract = "0x655d77E71c75b8Eb58bAf55Bee5319CAd7B8B12B";              
            }
        } 

        console.log("network id: " + result);

        console.log("db contract: " + db_contract);

        callback(db_contract, error);

    });
};
