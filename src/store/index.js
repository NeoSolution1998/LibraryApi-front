import { createStore } from "vuex";
import { postsModule } from "./Posts/PostsModule";
import { booksModule } from "./Books/BooksModule";
import { imagesModule } from "./Image/ImagesModule";
import { chaptersModule } from "./Chapters/ChaptersModule";
import { commentsModule } from "./Comments/CommentsModule";
import { paginationModule } from "./UI/PaginationModule";
import { headerModule } from "./Header/headerModule";

export default createStore({
    state: {
        domain: "http://127.0.0.1:8000"
    },
    modules: {
        posts: postsModule,
        books: booksModule,
        comments: commentsModule,
        header: headerModule,
        pagination: paginationModule,
        chapters: chaptersModule,
        images: imagesModule
    }
})