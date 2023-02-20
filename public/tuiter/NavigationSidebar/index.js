const NavigationSidebar = (active) => {
    if (active == "explore") {
    return(`

    <div class="d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
        <div class="list-group mt-2">
           <a href="#"
               class="list-group-item list-group-item-action">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="../HomeScreen/index.html"
               class="list-group-item list-group-item-action">
                <i class="fa fa-home"></i> Home
            </a>
            <a href="../ExploreScreen/index.html"
               class="list-group-item list-group-item-action active">
                <i class="fa fa-hashtag"></i> Explore
            </a>
            <a href="#"
               class="list-group-item list-group-item-action">
                <i class="fa fa-bell"></i> Notifications
            </a>
            <a href="#"
               class="list-group-item list-group-item-action">
                <i class="fa fa-envelope"></i> Messages
            </a>
            <a href="#"
               class="list-group-item list-group-item-action">
                <i class="fa fa-bookmark"></i> BookMarks
            </a>
            <a href="#"
               class="list-group-item list-group-item-action">
                <i class="fa fa-list"></i> Lists
            </a>
            <a href="#"
               class="list-group-item list-group-item-action">
                <i class="fa fa-user"></i> Profile
            </a>
            <a href="#"
               class="list-group-item list-group-item-action">
                <i class="fas fa-comment-dots"></i> More
            </a>
        </div>
        <button class="mt-2 w-100 rounded-pill btn btn-primary">
            Tweet
        </button>
    </div>
        
        
        
        <div class="d-none d-sm-none d-md-none d-lg-block d-xl-none d-xxl-none">
            <div class="list-group mt-2">
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="../HomeScreen/index.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-home"></i>
                </a>
                <a href="../ExploreScreen/index.html"
                   class="list-group-item list-group-item-action active">
                    <i class="fa fa-hashtag"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-comment-dots"></i>
                </a>
            </div>
            <button class="mt-2 w-auto rounded-pill btn btn-primary">
                Tweet
            </button>
        </div>

        <div class="d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
            <div class="list-group mt-2">
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="../HomeScreen/index.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-home"></i>
                </a>
                <a href="../ExploreScreen/index.html"
                   class="list-group-item list-group-item-action active">
                    <i class="fa fa-hashtag"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-comment-dots"></i>
                </a>
            </div>
            <button class="mt-2 w-100 rounded-pill btn btn-primary">
                Tweet
            </button>
        </div>
    `);}

    else if (active == "home") {
        return(`

    <div class="d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
        <div class="list-group mt-2">
           <a href="#"
               class="list-group-item list-group-item-action">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="../HomeScreen/index.html"
               class="list-group-item list-group-item-action active">
                <i class="fa fa-home"></i> Home
            </a>
            <a href="../ExploreScreen/index.html"
               class="list-group-item list-group-item-action">
                <i class="fa fa-hashtag"></i> Explore
            </a>
            <a href="#"
               class="list-group-item list-group-item-action">
                <i class="fa fa-bell"></i> Notifications
            </a>
            <a href="#"
               class="list-group-item list-group-item-action">
                <i class="fa fa-envelope"></i> Messages
            </a>
            <a href="#"
               class="list-group-item list-group-item-action">
                <i class="fa fa-bookmark"></i> BookMarks
            </a>
            <a href="#"
               class="list-group-item list-group-item-action">
                <i class="fa fa-list"></i> Lists
            </a>
            <a href="#"
               class="list-group-item list-group-item-action">
                <i class="fa fa-user"></i> Profile
            </a>
            <a href="#"
               class="list-group-item list-group-item-action">
                <i class="fas fa-comment-dots"></i> More
            </a>
        </div>
        <button class="mt-2 w-100 rounded-pill btn btn-primary">
            Tweet
        </button>
    </div>
        
        
        
        <div class="d-none d-sm-none d-md-none d-lg-block d-xl-none d-xxl-none">
            <div class="list-group mt-2">
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="../HomeScreen/index.html"
                   class="list-group-item list-group-item-action active">
                    <i class="fa fa-home"></i>
                </a>
                <a href="../ExploreScreen/index.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-hashtag"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-comment-dots"></i>
                </a>
            </div>
            <button class="mt-2 w-auto rounded-pill btn btn-primary">
                Tweet
            </button>
        </div>

        <div class="d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
            <div class="list-group mt-2">
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="../HomeScreen/index.html"
                   class="list-group-item list-group-item-action  active">
                    <i class="fa fa-home"></i>
                </a>
                <a href="../ExploreScreen/index.html"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-hashtag"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-comment-dots"></i>
                </a>
            </div>
            <button class="mt-2 w-100 rounded-pill btn btn-primary">
                Tweet
            </button>
        </div>
    `);}
}
export default NavigationSidebar;