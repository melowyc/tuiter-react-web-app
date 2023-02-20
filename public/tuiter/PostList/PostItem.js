const PostListItem = (post) => {
    return(`
        <li class="list-group-item bg-black">
            <div class="row">
                <div class="col-2">
                    <img class="rounded-pill" style="position:relative; left: 15px" width="70%" src=${post.head}/>
                </div>
                <div class="col-10 ">  
                    <div class="row">
                        <div class="col-11">
                            <div class="fw-bold">
                                ${post.userName} 
                                <i class="fa fa-check-circle"></i> 
                                <span class="text-secondary fw-normal">${post.handle}</span>
                                <span class="text-secondary fw-normal">- ${post.time}</span>
                            </div>
                        </div>
                        <div class="col-1">
                            <i class="fa fa-ellipsis-h"></i>
                        </div>
                    
                    </div>             

                    <div class="mb-2">
                        <span class="fw-normal">${post.tweet1}</span>
                        <a class="link-no-underline" href=${post.hyperlink}>${post.hyperlink_name}</a>
                        <span class="fw-normal">${post.tweet2}</span>
                    
                    </div>
                    <div class="wd-border-radius-more border border-secondary border-1" >
                        ${post.title != "" ?
                            `<img class="wd-border-radius-1 border-bottom border-secondary border-1" width="100%" src=${post.image}/>
                            <div class="mt-3 mb-1 ms-3 me-3 ">${post.title}</div>
                            <div class="mb-1 ms-3 me-3 text-secondary">${post.content}</div>
                            <div class="mb-3 ms-3 text-secondary"><i class="fa fa-link"></i>${post.link}</div>`
                        : `<img class="wd-border-radius-more" width="100%" src=${post.image}/>`
                        }
                    </div>
                    <div class="row mt-3 mb-3">
                        <div class="col-3">
                            <div><i class="fa fa-comment"></i>   ${post.comment}</div>
                        </div>
                        <div class="col-3">
                            <div><i class="fa fa-retweet"></i> ${post.forward}</div>
                        </div>
                        <div class="col-3">
                            <div><i class="fa fa-heart"></i>   ${post.like}</div>
                        </div>
                        <div class="col-3">
                            <div><i class="fa fa-share"></i></div>
                        </div>
                    </div>
                </div>

            </div>
        </li>
    
    `);
}
export default PostListItem;