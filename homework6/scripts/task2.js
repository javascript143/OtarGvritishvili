function enterProposals() {
    let pickUpProposals = document.getElementById("proposal").value;
    pickUpProposals = pickUpProposals.split(". ");

    let editProposal = pickUpProposals.map(function(proposali) {

    });
    document.getElementById("result").innerHTML = editProposal.join(". ");
}