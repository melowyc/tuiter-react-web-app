import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
        <div class="row">
<!-- search field and cog -->

            <div class="col-11 mt-2">
                <div class="form-group with-search">
                    <span class="fa fa-search form-control-feedback"></span>                    
                    <input type="text" class="form-control rounded-pill" placeholder="Search Twitter">
                </div>
            </div>
            <div class="col-1 mt-2 mb-2">
                <a href="./explore-settings.html"><i class="fa fa-cog fa-2x"></i></a>
            </div>

        </div>

        <div class="mt-2">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-sm-none d-md-block d-lg-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
        </div>
        <div class="image-container mt-2">
            <img class="bg-image" width="100%" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1"/>
            <span class="fw-bold text-left-bottom">SpaceX's Starship</span>
        </div>
    ${PostSummaryList()}
`);
}
export default ExploreComponent;