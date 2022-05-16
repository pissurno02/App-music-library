/* eslint-disable id-blacklist */
/* eslint-disable no-trailing-spaces */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json';
import heavyRotation from '../../assets/mockdata/heavyRotation.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {






  data = [
    {
      title: 'Tocado recentemente',
      albums: recentlyPlayed,
    
    },
    {
      title: 'Mais ouvidas',
      albums: heavyRotation
    },
    {
      title: 'Voltar para',
      albums: jumpBackIn
    },
    {
title: 'next music'
    },
  ];
 
  opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  };
  
  constructor(private router: Router ,public actionsheetCtrl: ActionSheetController) {
    
  }
 
  openAlbum(album) {
    const titleEscaped = encodeURIComponent(album.title);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);
  }
 
  // Helper function for image names
  // eslint-disable-next-line id-blacklist
  dasherize(string) {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    return string.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };

  async presentActionSheet(){
    const actionSheet = await this.actionsheetCtrl.create({
      header: 'Opções',
       buttons:[
           {
               text: 'Register',
               role :'',
               icon:'person' ,
               handler:() =>{
              console.log('botão de registro!');
               }
           },{
              text:'Exit app',
              icon:'exit',
              handler:() =>{
              console.log('botão de sair!');
  }
  
           },{
          text:'Delete account',
          icon:'trash',
          role:'destructive',
          handler:() =>{
              console.log('botão de deletar');
          }
              
           },{
          text:'Close tab',
          icon:'close',
          role:'cancel',
          handler:() =>{
              console.log('cancelar');
          }
  
           }
       ],
       cssClass: 'custom-css',
       animated: true,
      backdropDismiss: true,
      keyboardClose: false,
      mode:'ios'
      });
  
      actionSheet.present();
  
  actionSheet.onWillDismiss().then(() =>{
      console.log('fechando');
  });
  
  
  actionSheet.onDidDismiss().then(() =>{
      console.log('foi fechado');
  });
  
  
  
  
  
  }

}
