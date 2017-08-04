import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  gotCharacters = [{ "_id": "5982254badc9b22c98ed313d", "__v": 0, "id": 11, "name": "Petyr Baelish", "email": "petyr@baelishindustries.com", "phone": "123-456-7890", "url": "https://s3.us-east-2.amazonaws.com/enkidoo-training/gotapp/img/petyr.jpg", "notes": "Do not trust anyone." }, { "_id": "59822561adc9b22c98ed313e", "__v": 0, "id": 0, "name": "Ned Stark", "email": "ned@winterfell.com", "phone": "123-456-7890", "url": "https://s3.us-east-2.amazonaws.com/enkidoo-training/gotapp/img/ned.jpg", "notes": "Winter is coming." }, { "_id": "59822561adc9b22c98ed313f", "__v": 0, "id": 1, "name": "Theon Greyjoy", "email": "tgreyjoy@winterfell.com", "phone": "123-456-7890", "url": "https://s3.us-east-2.amazonaws.com/enkidoo-training/gotapp/img/theon.jpg", "notes": "Reluctant to pay iron price." }, { "_id": "59822561adc9b22c98ed3140", "__v": 0, "id": 2, "name": "Samwell Tarly", "email": "starly@castleblack.com", "phone": "123-456-7890", "url": "https://s3.us-east-2.amazonaws.com/enkidoo-training/gotapp/img/samwell.jpg", "notes": "Loyal brother of the watch." }, { "_id": "59822561adc9b22c98ed3141", "__v": 0, "id": 3, "name": "Jon Snow", "email": "jsnow@castleblack.com", "phone": "123-456-7890", "url": "https://s3.us-east-2.amazonaws.com/enkidoo-training/gotapp/img/johnsnow.jpg", "notes": "Knows nothing." }, { "_id": "59822561adc9b22c98ed3142", "__v": 0, "id": 4, "name": "Arya Stark", "email": "waterdancer@winterfell.com", "phone": "123-456-7890", "url": "https://s3.us-east-2.amazonaws.com/enkidoo-training/gotapp/img/arya.jpg", "notes": "Has a list of names." }, { "_id": "59822561adc9b22c98ed3143", "__v": 0, "id": 5, "name": "Jora Mormont", "email": "khaleesifan100@gmail.com", "phone": "123-456-7890", "url": "https://s3.us-east-2.amazonaws.com/enkidoo-training/gotapp/img/jora.jpg", "notes": "Lost in the friend-zone." }, { "_id": "59822561adc9b22c98ed3144", "__v": 0, "id": 6, "name": "Tyrion Lannister", "email": "tyrion@lannister.com", "phone": "123-456-7890", "url": "https://s3.us-east-2.amazonaws.com/enkidoo-training/gotapp/img/tyrion.jpg", "notes": "Currently drunk." }, { "_id": "59822561adc9b22c98ed3145", "__v": 0, "id": 7, "name": "Stannis Baratheon", "email": "onetrueking@dragonstone.com", "phone": "123-456-7890", "url": "https://s3.us-east-2.amazonaws.com/enkidoo-training/gotapp/img/stannis.jpg", "notes": "Nobody expects the Stannish inquisition." }, { "_id": "59822561adc9b22c98ed3146", "__v": 0, "id": 8, "name": "Hodor", "email": "hodor@hodor.com", "phone": "123-456-7890", "url": "https://s3.us-east-2.amazonaws.com/enkidoo-training/gotapp/img/hodor.jpg", "notes": "Hodor? Hodor... Hodor!" }, { "_id": "59822561adc9b22c98ed3147", "__v": 0, "id": 9, "name": "Margaery Tyrell", "email": "mtyrell@highgarden.com", "phone": "123-456-7890", "url": "https://s3.us-east-2.amazonaws.com/enkidoo-training/gotapp/img/margery.jpg", "notes": "Keeper of kings." }, { "_id": "59822561adc9b22c98ed3148", "__v": 0, "id": 10, "name": "Brienne of Tarth", "email": "oathkeeper@gmail.com", "phone": "123-456-7890", "url": "https://s3.us-east-2.amazonaws.com/enkidoo-training/gotapp/img/brienne.jpg", "notes": "Do not cross her." }];

  public currentCharacter = {};
  public filterCharacterTxt = "";

  constructor() { }

  ngOnInit() {
    this.currentCharacter = this.gotCharacters[0];
  }

  selectCharacter(char) {
    if (char) {
      this.currentCharacter = char;

    } else {
      console.log('select null')
    }

  }

  deleteCharacter(char) {

    if(this.gotCharacters.length>1){
  
      console.log(this.gotCharacters.length)
    var deleteIndex = this.gotCharacters.indexOf(char);
    this.gotCharacters.splice(deleteIndex, 1);
    this.currentCharacter = this.gotCharacters[0];
    }else{
      this.gotCharacters = [];
      this.currentCharacter = {};
    } 



  }
}
