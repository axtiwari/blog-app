import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from '../../interfaces/post';
import { HtmlParserService } from '../../services/htmlParser.service';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor( private router: Router,
  private htmlParserService: HtmlParserService) { }

  @Input() postData: IPost;
  imgUrl: string;

  ngOnInit() {
    this.imgUrl = this.htmlParserService.getFirstImgSrc(this.postData.descriptionHtml);
  }

  search(keyword: string): void {
    this.router.navigate(['posts'], { queryParams: { q: keyword } });
  }
}
