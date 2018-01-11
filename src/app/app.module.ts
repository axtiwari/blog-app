import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { HeaderComponent } from './header/header.component';
import { BlogsViewSectionComponent } from './landing-view/blogs-view-section/blogs-view-section.component';
import { ContactUsComponent } from './landing-view/contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
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
import { AccessViewComponent } from './header/authentication/access-view/access-view.component';
import { GoogleSignInButtonComponent } from './header/authentication/access-view/google-sign-in-button/google-sign-in-button.component';
import { CurrentUserService } from './common/services/current-user.service';
import { AuthenticationComponent } from './header/authentication/authentication.component';
import { UserMenuComponent } from './header/authentication/user-menu/user-menu.component';
import { GoogleApiService } from './common/services/google-api-service.service';
import { AuthenticationGuard } from './common/guards/authentication-guard.service';
import { HtmlParserService } from './common/services/htmlParser.service';
import { HashtagParserService } from './common/services/hashtag-parser.service';
import { ClickOutsideModule } from 'ng-click-outside';
import { NewPostViewComponent } from './common/posts/post-manipulation/new-post-view/new-post-view.component';
import { MediumEditorComponent } from './common/posts/post-manipulation/create-post-form/medium-editor/medium-editor.component';
import { CreatePostFormComponent } from './common/posts/post-manipulation/create-post-form/create-post-form.component';
import { EditPostViewComponent } from './common/posts/post-manipulation/edit-post-view/edit-post-view.component';

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
    GoogleSignInButtonComponent,
    AuthenticationComponent,
    UserMenuComponent,
    NewPostViewComponent,
    MediumEditorComponent,
    CreatePostFormComponent,
    EditPostViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgCDaEYlwj4s1tOyP157koAnq4gsDBdzo'
    }),
    RouterModule.forRoot([
      { path: '', component: LandingComponent },
      { path: 'posts', component: PostsViewComponent },
      { path: 'posts/:id', component: OnePostViewComponent },
      { path: 'users/:id', component: UserViewComponent },
      { path: 'newPost', component: NewPostViewComponent,  canActivate: [AuthenticationGuard]},
      { path: 'editPost/:id', component: EditPostViewComponent, canActivate: [AuthenticationGuard]}
    ]),
    ClickOutsideModule
  ],
  providers: [
    PostService,
    UserService,
    CommentsService,
    CurrentUserService,
    GoogleApiService,
    AuthenticationGuard,
    HtmlParserService,
    HashtagParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
