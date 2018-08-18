// core module - IIFE
(function () {
    // App variables
    let XHR;
    let hash;
    let paragraphs;


    function insertHTML(sourceURL, destTag) {
        let target = document.querySelector(destTag);

        XHR = new XMLHttpRequest();
        XHR.addEventListener("readystatechange", function () {
            if (this.status === 200) {
                if (this.readyState === 4) {
                    console.log(XHR.responseText);
                    target.innerHTML = XHR.responseText;
                }
            }
        });
        XHR.open("GET", sourceURL);
        XHR.send();
    }

    function loadParagraphs() {

        XHR = new XMLHttpRequest();
        XHR.addEventListener("readystatechange", function () {
            if (this.status === 200) {
                if (this.readyState === 4) {
                    paragraphs = JSON.parse(this.responseText);
                    console.log("Paragraph Data finished loading");

                    console.log(paragraphs);

                    for (const property in paragraphs) {
                        if (paragraphs.hasOwnProperty(property)) {
                            console.log(paragraphs[property]);

                        }
                    }


                }
            }
        });
        XHR.open("GET", "/paragraph.json");
        XHR.send();
    }



    /**
     *  Intialization
     */
    function Start() {
        console.log(
            `%c App Initializing...`,
            "font-weight: bold; font-size: 20px;"
        );

        Contacts = [];

        Main();
    }

    /**
     * This function is the where the main functionality for our
     * web app is happening
     */
    function Main() {
        console.log(`%c App Started...`, "font-weight: bold; font-size: 20px;");

        insertHTML("/Views/partials/header.html", "header");

        setPageContent("/Views/content/home.html");

        insertHTML("/Views/partials/footer.html", "footer");

        if (document.title == "My Projects") {
            loadParagraphs();
        }
    }

    function setPageContent(url) {
        insertHTML(url, "main");
    }

    function Route() {
        // sanitize the url - remove the #
        hash = location.hash.slice(1);

        document.title = hash;

        // change the URL of my page
        history.pushState("", document.title, "/" + hash.toLowerCase() + "/");

        setPageContent("/Views/content/" + hash.toLowerCase() + ".html")
    }



    window.addEventListener("load", Start);

    window.addEventListener("hashchange", Route);
})();
