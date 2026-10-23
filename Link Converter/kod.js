
function generateLink() {
    let liveChessUrl = document.getElementById("liveChessUrl").value;
    let round = document.getElementById("round").value;

    let tournamentId = liveChessUrl.split("#")[1];

    let newLink =
        "https://view-livechesscloud-pgn.vercel.app/api/" +
        tournamentId +
        "/download/" +
        round +
        "#games.pgn";

    document.getElementById("newLink").innerHTML =
        '<a href="' + newLink + '" target="_blank">' +
        newLink +
        '</a>';
}

function copyLink() {
    let link = document.getElementById("newLink").innerText;

    navigator.clipboard.writeText(link);
}