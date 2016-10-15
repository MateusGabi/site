function bootstrap() {


}

function getHeader() {

    var html = "<h1>Giphy Client</h1>"
    return html;
}

function getBody(page) {
    if (page == null)
        return getTrends();
    else
        return page;
}

function getTrends() {


    var xhr = $.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC");


    xhr.done(function (data) {
        console.log("success got data", data);

        var n = data.data.length;

        var html;

        for (var i = 0; i < 10; i++) {
            var source = data.data[i].images.fixed_height.url;

            html += "<div class=\"mdl-card mdl-shadow--4dp\">";
            html += "<div class=\"mdl-card__media\">";
            html += "<center><img src=\"" + source + "\" /></center>";
            html += "</div>";
            html += "<div class=\"mdl-card__supporting-text\">";
            html += "Adicionado em: " + data.data[i].import_datetime;
            html += "<input type=\"hidden\" id=\""+ data.data[i].id +"\" value=\""+ source +"\" />";
            html += "</div>";
            html += "<div class=\"mdl-card__supporting-text\">";
            html += "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" href=\"JavaScript:CopyToClipboard("+ data.data[i].id +")\">Copiar Link</a>";
            html += "</div>";
            html += "</div>";

        }

        return document.getElementById('gc_trends').innerHTML = html;
    });

    return "";
}



function getStatus() {
    return "<img src=\"assets/Giphy Attribution Marks/Static Logos/Small/Light Backgrounds/PoweredBy_200px-White_HorizText.png\"/>";
}

function getVersion() {
    return "0.1.22";
}



function CopyToClipboard(id_element) {
    var input = document.getElementById(id_element);
    var textToClipboard = input.value;

    var success = true;
    if (window.clipboardData) { // Internet Explorer
        window.clipboardData.setData("Text", textToClipboard);
    }
    else {
        // create a temporary element for the execCommand method
        var forExecElement = CreateElementForExecCommand(textToClipboard);

        /* Select the contents of the element 
            (the execCommand for 'copy' method works on the selection) */
        SelectContent(forExecElement);

        var supported = true;

        // UniversalXPConnect privilege is required for clipboard access in Firefox
        try {
            if (window.netscape && netscape.security) {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }

            // Copy the selected content to the clipboard
            // Works in Firefox and in Safari before version 5
            success = document.execCommand("copy", false, null);
        }
        catch (e) {
            success = false;
        }

        // remove the temporary element
        document.body.removeChild(forExecElement);
    }

    if (success) {
        alert("O texto foi armazenado na clipboard!");
    }
    else {
        alert("Seu browser não suporta essa funcionalidade :/");
    }
}

function CreateElementForExecCommand(textToClipboard) {
    var forExecElement = document.createElement("div");
    // place outside the visible area
    forExecElement.style.position = "absolute";
    forExecElement.style.left = "-10000px";
    forExecElement.style.top = "-10000px";
    // write the necessary text into the element and append to the document
    forExecElement.textContent = textToClipboard;
    document.body.appendChild(forExecElement);
    // the contentEditable mode is necessary for the  execCommand method in Firefox
    forExecElement.contentEditable = true;

    return forExecElement;
}

function SelectContent(element) {
    // first create a range
    var rangeToSelect = document.createRange();
    rangeToSelect.selectNodeContents(element);

    // select the contents
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(rangeToSelect);
}