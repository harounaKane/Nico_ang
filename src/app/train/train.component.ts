import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  trainData;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève").subscribe(
      (value) => this.trainData = value
    );
    /*
 Parce que ça, en fait, va nous renvoyer un élément qui s'appelle un observable. Donc, vous pouvez le voir ici, c'est un observable qui est renvoyé, et cet observable, pour pouvoir observer la valeur qu'il va nous renvoyer, eh bien, nous allons utiliser la méthode subscribe qui permet de s'abonner à cet élément pour recevoir, en fait, la valeur qui aura été émise.
    */
  }

}
