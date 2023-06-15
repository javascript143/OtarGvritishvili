function enterProposals() {
    let pickUpProposals = document.getElementById("proposal").value;
    pickUpProposals = pickUpProposals.split(". ");

    console.log(pickUpProposals);


    let editProposal = pickUpProposals.map(function(proposali) {
        if(proposali.at(0) === proposali.at(0).toLowerCase()) {
            // return false;
            return proposali.at(0).toUpperCase();
        } else {
            return true;
        }

    });
    console.log(editProposal);
    document.getElementById("result").innerHTML = editProposal.join(". ");
}