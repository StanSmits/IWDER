function voegCommentToe(buttonID){
    if (buttonID == null) { return console.error("Er is geen buttonID meegegeven"); }

    node = document.querySelectorAll(".commentSection")[buttonID - 1];
    commentName = document.querySelectorAll(".comment-name-input")[buttonID-1].value;
    commentText = document.querySelectorAll(".comment-text-input")[buttonID-1].value;

    if (commentName == "" || commentText == "") {
        alert("Er is iets niet ingevuld");
        return;
    }

    const newSection = document.createElement("section");
    newSection.className = "comments";

    const newImage = document.createElement("img");
    newImage.className = "comment-avatar";
    newImage.src = "assets/img/profile_picture.jpeg";
    newImage.alt = "avatar";

    const newHeader = document.createElement("header");
    newHeader.className = "comment-header";
    newHeader.innerText = commentName;

    const newParagraph = document.createElement("p");
    newParagraph.className = "comment-text";
    newParagraph.innerText = commentText;

    node.appendChild(newSection);
    newSection.appendChild(newImage);
    newSection.appendChild(newHeader);
    newSection.appendChild(newParagraph);

    document.querySelectorAll(".comment-name-input")[buttonID-1].value = "";
    document.querySelectorAll(".comment-text-input")[buttonID-1].value = "";
}