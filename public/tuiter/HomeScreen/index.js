
import NavigationSidebar from "../NavigationSidebar";
import HomeComponent from "./HomeComponent.js";
import PostSummaryList from "../PostSummaryList";

function homeComponent() {
    $('#wd-home').append(`
    <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar("home")}
        </div>
        
        <div class=" col-10 col-lg-7 col-xl-6" style="color:black;">
            ${HomeComponent()}
        </div>
        
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${PostSummaryList()}
        </div>
    </div>
`);
}
$(homeComponent);