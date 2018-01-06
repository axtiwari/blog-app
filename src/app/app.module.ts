import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AgmCoreModule } from '@agm/core';
import { UserViewComponent } from './user-view/user-view.component';
import { UserComponent } from './user-view/user/user.component';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { PostComponent } from './common/posts/post/post.component';
import { PostListComponent } from './common/posts/post-list/post-list.component';
import { PersonDataComponent } from './common/posts/post/person-data/person-data.component';
import { SearchComponent } from './common/search/search.component';
import { SliderComponent } from './landing-view/slider/slider.component';
import { HeaderComponent } from './landing-view/header/header.component';
import { BlogsViewSectionComponent } from './landing-view/blogs-view-section/blogs-view-section.component';
import { ContactUsComponent } from './landing-view/contact-us/contact-us.component';
import { FooterComponent } from './landing-view/footer/footer.component';
import { MapComponent } from './landing-view/contact-us/map/map.component';
import { LandingComponent } from './landing-view/landing.component';
import { OnePostViewComponent } from './common/posts/one-post-view/one-post-view.component';
import { CommentComponent } from './common/posts/comment/comment.component';
import { ScrollablePostsComponent } from './common/posts/scrollable-posts/scrollable-posts.component';
import { PostService } from './common/services/posts.service';
import { UserService } from './common/services/user.service';
import { CommentsService } from './common/services/comments.service';
import { CutContentPipe } from './common/pipes/cutContent.pipe';
import { StripHtmlPipe } from './common/pipes/stripHtml.pipe';
import { AccessViewComponent } from './access-view/access-view.component';
import { GoogleSignInButtonComponent } from './access-view/google-sign-in-button/google-sign-in-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    BlogsViewSectionComponent,
    ContactUsComponent,
    FooterComponent,
    PostComponent,
    StripHtmlPipe,
    CutContentPipe,
    MapComponent,
    LandingComponent,
    PostListComponent,
    ScrollablePostsComponent,
    OnePostViewComponent,
    PersonDataComponent,
    UserViewComponent,
    UserComponent,
    PostsViewComponent,
    SearchComponent,
    CommentComponent,
    AccessViewComponent,
    GoogleSignInButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    InfiniteScrollModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgCDaEYlwj4s1tOyP157koAnq4gsDBdzo'
    }),
    RouterModule.forRoot([
      { path: '', component: LandingComponent },
      { path: 'posts', component: PostsViewComponent },
      { path: 'posts/:id', component: OnePostViewComponent},
      { path: 'users/:id', component: UserViewComponent}
  ])
  ],
  providers: [
    PostService,
    UserService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
