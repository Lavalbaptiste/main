
function color_bleu() {
    var couleur="bleu";
    get_all_element(couleur) ;
    document.getElementById("img_blue").style.display="inline" ;
    document.getElementById("img_red").style.display="none" ;
    document.getElementById("img_green").style.display="none" ;
    document.getElementById("img_yellow").style.display="none" ;
    document.getElementById("bouton_bleu_presser").style.display="inline";
    document.getElementById("bouton_bleu").style.display="none" ;
    document.getElementById("bouton_rouge").style.display="inline" ;
    document.getElementById("bouton_rouge_presser").style.display="none" ;
    document.getElementById("bouton_jaune").style.display="inline" ;
    document.getElementById("bouton_jaune_presser").style.display="none" ;
    document.getElementById("bouton_vert").style.display="inline" ;
    document.getElementById("bouton_vert_presser").style.display="none" ;
}
function color_rouge() {
    var couleur="rouge";
    get_all_element(couleur);
    document.getElementById("img_blue").style.display="none" ;
    document.getElementById("img_red").style.display="inline" ;
    document.getElementById("img_green").style.display="none" ;
    document.getElementById("img_yellow").style.display="none" ;
    document.getElementById("bouton_bleu_presser").style.display="none";
    document.getElementById("bouton_bleu").style.display="inline" ;
    document.getElementById("bouton_rouge").style.display="none" ;
    document.getElementById("bouton_rouge_presser").style.display="inline" ;
    document.getElementById("bouton_jaune").style.display="inline" ;
    document.getElementById("bouton_jaune_presser").style.display="none" ;
    document.getElementById("bouton_vert").style.display="inline" ;
    document.getElementById("bouton_vert_presser").style.display="none" ;
}
function color_jaune() {
    var couleur="jaune";
    get_all_element(couleur) ;
    document.getElementById("img_blue").style.display="none" ;
    document.getElementById("img_red").style.display="none" ;
    document.getElementById("img_green").style.display="none" ;
    document.getElementById("img_yellow").style.display="inline" ;
    document.getElementById("bouton_bleu_presser").style.display="none";
    document.getElementById("bouton_bleu").style.display="inline" ;
    document.getElementById("bouton_rouge").style.display="inline" ;
    document.getElementById("bouton_rouge_presser").style.display="none" ;
    document.getElementById("bouton_jaune").style.display="none" ;
    document.getElementById("bouton_jaune_presser").style.display="inline" ;
    document.getElementById("bouton_vert").style.display="inline" ;
    document.getElementById("bouton_vert_presser").style.display="none" ;
}
function color_vert() {
    var couleur="vert";
    get_all_element(couleur);
    document.getElementById("img_blue").style.display="none" ;
    document.getElementById("img_red").style.display="none" ;
    document.getElementById("img_green").style.display="inline" ;
    document.getElementById("img_yellow").style.display="none" ;
    document.getElementById("bouton_bleu_presser").style.display="none";
    document.getElementById("bouton_bleu").style.display="inline" ;
    document.getElementById("bouton_rouge").style.display="inline" ;
    document.getElementById("bouton_rouge_presser").style.display="none" ;
    document.getElementById("bouton_jaune").style.display="inline" ;
    document.getElementById("bouton_jaune_presser").style.display="none" ;
    document.getElementById("bouton_vert").style.display="none" ;
    document.getElementById("bouton_vert_presser").style.display="inline" ;
// ikdfhrljgh
}

function get_all_element ( couleur ) {
    var requestURL ='localhost/../products.json'
    var request = new XMLHttpRequest();
    request.open('GET' ,requestURL)
    request.responseType = 'json';
    request.send();
    request.onload=function (){
        var all=request.response ;
        console.log(all)
    }
    console.log(couleur) ;

}


