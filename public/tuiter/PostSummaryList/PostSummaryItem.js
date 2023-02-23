const PostSummaryListItem = (post) => {
    return(`
        <div class="d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
        <li class="list-group-item">
            <div class="row">
                <div class="col-9">
                    <div class="text-secondary">${post.topic}</div>
                    <div class="fw-bold">${post.userName} <i class="fa fa-check-circle"></i> <span class="text-secondary fw-normal">- ${post.time}</span></div>
                    <div class="fw-bold">${post.title}</div>
                </div>
                <div class="col-3">
                    <img class="rounded" width="100%" src=${post.image}/>
                </div>

            </div>
        </li>
        </div>
        <div class="d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
        <li class="list-group-item">
            <div class="row">
                <div class="col-9">
                    <div class="text-secondary">${post.topic}</div>
                    <div class="fw-bold">${post.userName} <i class="fa fa-check-circle"></i> <span class="text-secondary fw-normal">- ${post.time}</span></div>
                    <div class="fw-bold">${post.title}</div>
                </div>
                <div class="col-3">
                    <img class="rounded" width="100%" src=${post.image}/>
                </div>

            </div>
        </li>
        </div>
    
    `);
}
export default PostSummaryListItem;