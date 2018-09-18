import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  articles: Object;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService
      .getData('everything?q=bitcoin&from=2018-08-18&sortBy=publishedAt')
      .subscribe( (data: Article) => {
        this.articles = data.articles
        console.log(this.articles)
      } )
  }

  onSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single'])
  }

}

interface Article {
  articles?: string;
  title: string;
  description: string;
  urlToImage: string;
}
