var version = "2.9";

/*

 @author Mateus Gabi    [@matgabi17 on Twitter]
 @author Renan Benatti  [@renanbdias on Twitter]
 
 */

//  Valor limite de prints de palavras, ou seja, a Ameda printará entre 0 e 7 palavras;
var e = 4;

// Vetor que armazena as palavras
var w = [
    //[Susbstantivo Comum], [Substantivo Próprio], [adjetivo], [advérbio], [verbo]
    "amor", "Amanda", "amigável", "ante-ontem", "abano",
    "banana", "Bruna", "baixinho", "bastante", "boliche",
    "chuchu", "coração", "Carla", "carinhosa", "carinhosamente",
    "dedo", "Diego", "devagar", "divindade",
    "espelho", "esquerdo", "Eduardo", "estudar",
    "faca", "Fabiana", "fácil", "facilmente", "ficar", "festança",
    "gigante", "goiabada", "Goiás", "gostosa", "gritar",
    "homem", "na Hungria", "hoje", "hospital",
    "indubitável", "igreja", "Iara", "ignorante",
    "jato", "joaninha", "João", "jurássico", "jamais",
    "Keila",
    "limão", "Luísa", "lituano", "liquidificar",
    "namorar", "maneta", "Mateus", "memorável", "muito",
    "navio", "Naiara", "nunca", "natal", "nascer",
    "oligarquia", "Osório",
    "patinho", "Pedro", "de preto",
    "queijo",
    "rua", "Raíssa", "ruiva",
    "salada", "Silvia",
    "tecnologia", "Thiago",
    "urso", "Úrsula", "unha",
    "vegano", "Vitória", "verde", "vencedor",
    "Wellington",
    "xadrez", "Xico",
    "Ygritte",
    "zebra"
];

// em construção! terá dois parâmetros: um inteiro 'i' e um vetor de inteiros 'array'
function contains(_f, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == _f) {
            return true;
        }
    }

    return false;
}

function getPhrasal() {

    var retorno = "";

    // vetor de inteiros que representa os índices de w pertencentes ao retorno;
    var f = new Array();

    for (i = 1; i <= e; i++) {

        // função para encontrar elemento no vetor
        // f será o indice do vetor w

        var _f = parseInt(Math.random() * w.length);

        var b = false;
        if (contains(_f, f)) {
            i--;
        }
        else {
            f.push(_f);
            b = true;
        }

        if (b)
            retorno += " " + w[_f];

    }

    return document.getElementById('frase').innerHTML = "<div class=\"mdl-textfield mdl-js-textfield\"><input id=\"ph\" style=\"text-align:center\" class=\"mdl-textfield__input\" type=\"text\" placeholder=\"Carregando...\" value=\"" + retorno + "\" readonly></div>";
}

// Resultado Inteiro em Milhões
function getStatus() {
    var p = 1;

    // 87 * 86 * 85 * 84
    for (var i = 0; i < e; i++)
        p = p * (w.length - i);

    p = parseInt(p / Math.pow(10, 6));

    return "Nós temos <b>" + w.length + " Palavras</b> disponíveis em mais de <b>" + p + " Milhões</b> de combinações distintas!";

}

// Versão atual da Ameda
function getVersion() {
    return version;
}


function CopyToClipboard() {
    var input = document.getElementById("ph");
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

    // if (success) {
    //     alert("O texto foi armazenado na clipboard!");
    // }
    // else {
    //     alert("Seu browser não suporta essa funcionalidade :/");
    // }
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