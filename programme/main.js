var puissance4 = [];
var nbColonne = 7;
var nbLigne = 6;
var joueur1 = 'x';
var joueur2 = 'o';

puissance4 = initTabVite(nbLigne,nbColonne,0);
afficherPuissance4(puissance4),joueur1,joueur2;
puissance4[3][3] = 1;
puissance4[4][4] = 2;
afficherPuissance4(puissance4),joueur1,joueur2;

/**
 * permet d'initialiser un tableau de tableau en fonction d'un nombre de ligne et de colonne passé en paramètre
 * @param {number} nbColonne 
 * @param {number} nbLigne 
 * @param {*} car 
 * @returns 
 */
function initTabVite(nbColonne,nbLigne,car = ''){
    var tab = [];
    for(var i=0;i < nbLigne;i++){
        var ligne = [];
        for(var j=0;j < nbColonne; j++){
            ligne.push(car);
        }
        tab.push(ligne);
    }
    return tab;
}
/**
 *Perm et d'afficher un tableau de puissance 4
 * @param {Array<string>} tab 
 * @param {string} joueur1 
 * @param {string} joueur2 
 */

function afficherPuissance4(tab,joueur1,joueur2){
    for(var i=0; i < tab.length; i++){
        var ligne = "";
        for(var j=0; j < tab[i].length; j++){
            ligne += '| '
            if(tab[i][j] === 0){
                ligne += '_'
            } else if(tab[i][j] === 1){
                ligne += joueur1
            } else if(tab[i][j] === 2){
                ligne += joueur2;
            }
            ligne += ' |'
        }
        console.log(ligne)
    }
}
