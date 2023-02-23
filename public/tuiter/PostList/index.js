import PostItem from "./PostItem.js";
import post from "./post.js";

const PostList = () => {
    return(`
  <ul class="list-group mt-2">
        ${
        post.map(p => {
            return(PostItem(p));
        }).join('')

    }
  </ul>
  
  `);
}

export default PostList;