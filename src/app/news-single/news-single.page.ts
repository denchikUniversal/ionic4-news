import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news.service';
import { NavController } from '@ionic/angular';
import { NewsPage } from '../news/news.page';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
  article;
  constructor(private newsService: NewsService, public navCtrl: NavController) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
    console.log(this.newsService.currentArticle)
  }

  goBack() {
    this.navCtrl.goBack();
  }

}
