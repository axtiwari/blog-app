import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { AppComponent } from './app.component';
import { SliderComponent } from './landing/slider/slider.component';
import { HeaderComponent } from './landing/header/header.component';
import { BlogsViewSectionComponent } from './landing/blogs-view-section/blogs-view-section.component';
import { ContactUsComponent } from './landing/contact-us/contact-us.component';
import { FooterComponent } from './landing/footer/footer.component';
import { PostService } from './posts/posts.service';
import { PostComponent } from './posts/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { StripHtmlPipe } from './posts/post/stripHtml.pipe';
import { CutContentPipe } from './posts/post/cutContent.pipe';
import { UserService } from './posts/user.service';
import { MapComponent } from './landing/contact-us/map/map.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AgmCoreModule } from '@agm/core';
import { LandingComponent } from './landing/landing.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PersonDataComponent } from './posts/post/person-data/person-data.component';
import { ScrollablePostsComponent } from './scrollable-posts/scrollable-posts.component';
import { OnePostViewComponent } from './scrollable-posts/one-post-view/one-post-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserComponent } from './user-view/user/user.component';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { AccesModule } from './acces/acces.module';

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
    PostsViewComponent
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
      // { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
  ]),
  AccesModule
  ],
  providers: [
    PostService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
