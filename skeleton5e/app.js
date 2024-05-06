//Event Variables

const mainHeader = document.getElementById('main-header');
const stepDesc = document.getElementById('descriptor'); 
const chooseName = document.getElementById('choose-name');
const nameField = document.getElementById('char-name');

const chooseClass = document.getElementById('choose-type');
const choosePhys = document.getElementById('choice-phys');
const chooseMagic = document.getElementById('choice-magic');
const chooseSupp = document.getElementById('choice-supp');

const physClass = document.getElementById('choose-phys');
const physBarb = document.getElementById('phys-barbarian');
const physFight = document.getElementById('phys-fighter');
const physRogue = document.getElementById('phys-rogue');

const magClass = document.getElementById('choose-magic');
const magSorc = document.getElementById('magic-sorcerer');
const magWar = document.getElementById('magic-warlock');
const magWiz = document.getElementById('magic-wizard');

const supClass = document.getElementById('choose-supp');
const supBard = document.getElementById('supp-bard');
const supCleric = document.getElementById('supp-cleric');
const supDruid = document.getElementById('supp-druid');

const nextSteps = document.getElementById('next-steps');
const charDetails = document.getElementById('char-details');



//Character Variables

let charName;
let charType;
let charClass;

function charSession(){
    nameField.addEventListener('keyup', acceptName);
    choosePhys.addEventListener('click', selectType);
    chooseMagic.addEventListener('click', selectType);
    chooseSupp.addEventListener('click', selectType);

    physBarb.addEventListener('click', selectClass);
    physFight.addEventListener('click', selectClass);
    physRogue.addEventListener('click', selectClass);
    magSorc.addEventListener('click', selectClass);
    magWar.addEventListener('click', selectClass);
    magWiz.addEventListener('click', selectClass);
    supBard.addEventListener('click', selectClass);
    supCleric.addEventListener('click', selectClass);
    supDruid.addEventListener('click', selectClass);


}

function acceptName(e){
    if(e.keyCode == 13){
        if(nameField.value.trim() != ''){
            charName = nameField.value;
            nameField.value = "Registered.";
            nameField.removeEventListener('keyup', acceptName);
            chooseName.style.display="none";
            mainHeader.innerText="Alright, how would someone like " + charName + " fight?";
            descriptor.innerText="It's basically the same as asking how your character would destroy a watermelon, if you think about it hard enough.";
            chooseClass.style.display="flex";
        }

        else{
            alert("Please fill in your character's name.");
        }
    }
}

function selectType(e){
    mainHeader.innerText="We're getting closer'... let's talk about " + charName + "'s class.";
    descriptor.innerText="Now I'm basically asking you what specific type of sword you'd use to slice open that watermelon.";
    chooseClass.style.display="none";
    if(this.id === 'choice-phys'){
        charType = 'phys';
        physClass.style.display="flex";
    }
    else if(this.id === 'choice-magic'){
        charType = 'magic';
        magClass.style.display="flex";
    }
    else{
        charType = 'supp';
        supClass.style.display="flex";
    }

}

function selectClass(e){
    chosenClass = (this.id).slice((this.id).indexOf("-") + 1);
    charClass = chosenClass[0].toUpperCase() + chosenClass.slice(1);
    if(charType === 'phys'){
        physClass.style.display="none";
    }
    else if(charType === 'magic'){
        magClass.style.display="none";
    }
    else{
        supClass.style.display="none";
    }
    mainHeader.innerText="And...done!";
    descriptor.innerText="Except for a couple things that you should go over with your Dungeon Master..., like";
    nextSteps.style.display="inline";
    charDetails.innerHTML="Enjoy playing " + charName + " the " + charClass + "!";
}

sessionStorage.clear()
charSession()
