import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '../../app/article.service';

const ARTICLE_URI ="http://newsapi.org/v2/everything?q=cricket&from=2020-08-02&sortBy=publishedAt&apiKey=68cd49e37e4c43caa8bfc5632371c490";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ArticleService]
})
  
export class HomePage {
loadArticle;
  constructor(public navCtrl: NavController, private article: ArticleService) {
         this.loadArticleList();
  }

  public loadArticleList(){
    this.article.getTopHeadlines().subscribe(data=>{
    this.loadArticle=data;
    console.log(this.loadArticle.json());
    })
   
   }
}
