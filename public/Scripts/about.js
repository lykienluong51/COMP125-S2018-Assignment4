(function(content){
   
    let mySentence = "This is my bio";

    function AboutContent() {
        console.log("%c About Content accessed...", "font-weight:bold; font-size: 20px;");
    

        let paragraph = document.getElementById("para");
        
        paragraph.textContent = mySentence;

        
    }

    // properties
    content.AboutContent = AboutContent;

})(content || (content = {}));