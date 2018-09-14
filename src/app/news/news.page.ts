import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getData('everything?q=bitcoin&from=2018-08-14&sortBy=publishedAt')
      .subscribe( data => console.log(data))
  }

}
