// let question = {
//     num_req : 1,
//     req : "quel est la capital du Burundi",
//     true_resp : "Bujumbura"
// }

let questions = new Array({
    num_req : 1,
    req : "quel est la capital du Burundi",
    true_resp : "Bujumbura",
    false_resps: ['Kinshansa', 'Dar es salam', 'Kigali', 'Nairobi']
}, 
{
    num_req : 2,
    req : "parmi ces sites web, lequel est le veritable de Skynet ?",
    true_resp : "skynet-burundi.bi",
    false_resps: ['skynet.bi', 'talent4startup.com', 'skynet-burundi.com', 'tous sont fausses']
},
{
    num_req : 3,
    req : "que vaut le carré de 2 moins 1 :",
    true_resp : "3",
    false_resps: [5, 4, 7, 'pas de bonne reponse']
},
{
    num_req : 4,
    req : "Digital Africa est partenaire de Skynet [ Vrai ou Faux] :",
    true_resp : "Vrai",
    false_resps: [ 'faux']
},
{
    num_req : 5,
    req : "quel est la capital de France",
    true_resp : "Paris",
    false_resps: ['Paris Saint-Germain', 'Parico', 'Londres', 'Marseilles']
},
{
    num_req : 6,
    req : "HTML est un language de programmation, vrai ou faux",
    true_resp : "Faux",
    false_resps: ['Faux']
},
{
    num_req : 7,
    req : "comment declarer et initialiser correctement en javascript, une variable:",
    true_resp : "let num = 8",
    false_resps: ['let var = 12', 'let return = 45', 'let num = 8', 'aucune bonne reponse']
},
{
    num_req : 8,
    req : "quel est la propriete css permettant de cacher un element",
    true_resp : "display: none",
    false_resps: ['hidden', 'display:block', 'item:delete', 'toutes les reponses sont bonnes']
},
{
    num_req : 9,
    req : "4 * 1 = 8 \n  4 * 2 = 12 \n 4 * 3 = 16 \n 4 * 4 = 20 \n 4 * 5 = ?",
    true_resp : "30",
    false_resps: ['20', '45', '25', '40']
},
{
    num_req : 10,
    req : "la memoire qui stocke les donnees de maniere temporaire est:",
    true_resp : "RAM",
    false_resps: ['ROM', 'HDD', 'SSD', 'Flash']
},
{
    num_req : 11,
    req : "quel est la capital du Burundi 11",
    true_resp : "Bujumbura",
    false_resps: ['Kinshansa', 'Dar es salam', 'Kigali', 'Nairobi']
},
{
    num_req : 12,
    req : "quel est la capital du Burundi 12",
    true_resp : "Bujumbura",
    false_resps: ['Kinshansa', 'Dar es salam', 'Kigali', 'Nairobi']
},
{
    num_req : 13,
    req : "quel est la capital du Burundi 13",
    true_resp : "Bujumbura",
    false_resps: ['Kinshansa', 'Dar es salam', 'Kigali', 'Nairobi']
},
{
    num_req : 14,
    req : "quel est la capital du Burundi 14",
    true_resp : "Bujumbura",
    false_resps: ['Kinshansa', 'Dar es salam', 'Kigali', 'Nairobi']
},
{
    num_req : 15,
    req : "quel est la capital du Burundi 15",
    true_resp : "Bujumbura",
    false_resps: ['Kinshansa', 'Dar es salam', 'Kigali', 'Nairobi']
});

questions_posees = new Array();

console.log(questions.length);

const element = questions[1]

console.log(element.false_resps[1]);

function assertion(id){
 let true_resp = questions[id].true_resp;
 let false_resps = questions[id].false_resps 

 let assert =[true_resp];
 false_resps.forEach(element => {
    assert.push(element);
 });

    return assert
}

/* function getRandomInt2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1)) + min;
}

function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
} */


function shuffle(array) {
    let currentIndex = array.length;

    // while there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        //And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

function check_response(e) {
    let input_checked = e.target;
    let num_req_posee = document.getElementById('num_req').value
    let reponse_choisie = input_checked.value;
    let question_posee = null;

    questions.forEach(element => {
        
        if(element.num_req == num_req_posee){
            question_posee = element;
        }
    });

    if(reponse_choisie == question_posee.true_resp){
        return true;
    }
    else{
        return false;
    }


    //let response = 
    /*
    let num_req
    let quest 
    while(true){
        let old_array = questions;
        let new_array = shuffle(old_array);
        num_req = 0;
        
        if(addQuestion_posees(quest)){
            console.log("les questions redondees");
        }
        else{
            quest = new_array[num_req];
            break;
        }
    }
    */
}

function addQuestion_posees(req) {
    questions_posees.push(req);

    /* if (questions.indexOf(req) == -1) {
       return true; 
    } else {
    questions_posees.push(req);
       return false; 
    } */
}
var counter_true = 0;
var counter_max = 0;

function ask_req() {
    let rep_final = document.getElementById('rep_final').value;
    console.log("----hjhhhhhh-----"+rep_final);
    if(rep_final == 'true'){

        console.log("debut de if");
        counter_true = counter_true + 1;

        console.log("nombre de points recus"+counter_true);

        counter_max = counter_max + 1;
    }
    else{
        counter_max = counter_max + 1;
    }
    
    

    let container = document.getElementById('container');

    let div_rep = document.getElementById('all_radio')
    container.removeChild(div_rep);

    let old_array = questions;
    let new_array = shuffle(old_array);
    let num_req = 0;
    let quest = new_array[num_req]
    addQuestion_posees(quest);
    

    
    
    let new_div_rep = document.createElement('div');
    new_div_rep.id = 'all_radio';
    console.log("after get num_req");
    console.log('num_req____________'+num_req);

    container.appendChild(new_div_rep);

    let req = document.getElementById('id_req')
    //let test = questions.splice()
    console.log(quest);
    let input_num_req = document.getElementById('num_req');
    input_num_req.value = quest.num_req;
    req.textContent = quest.req;
    console.log('question___________'+quest.req);

    let ass = shuffle(assertion(num_req));
    
    ass.forEach(element => {
    let input = document.createElement('input')
    input.type = "radio"
    input.name = "reponse"
    input.value = element
    console.log("asssertion _____"+element);
    input.addEventListener('click', function(e){
        console.log("reponse choisie ======"+check_response(e));
        rep_final = check_response(e);
        let a = document.getElementById('rep_final');
        a.value = rep_final
        console.log("-----ok--"+a.value);

    }, false)
    let label = document.createElement('label')
    label.textContent = element

    new_div_rep.appendChild(input)
    new_div_rep.appendChild(label)

    
    console.log('taille-------------'+questions_posees.length);
    });
    

    if (counter_max == 10) {
        let div_req = document.getElementById('div_req');
    div_req.classList.toggle('hidden')

        let result = document.getElementById('resultat')
        result.classList.toggle('hidden')

        let span = document.getElementById('point')
        span.textContent = (counter_true * 10) + "%";


    }
    
}

function get_started(){
    console.log("debut get_started________");
    let home = document.getElementById('home');
    home.classList.toggle('hidden')

    let div_req = document.getElementById('div_req');
    div_req.classList.toggle('hidden')
    

    

    ask_req();

    console.log("kkkkkkk-----------");

}

