
const WhoToFollowListItem = (who) => {
    return(`
        <div class="d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-block">
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="rounded-circle" width="100%" src=${who.avatarIcon}/>
                </div>
                <div class="col-7">
                    <div class="fw-bold text-nowrap">${who.userName} <i class="fa fa-check-circle"></i></div>
                    <div class="">${who.handle}</div>
                </div>
                <div class="col-3">
                    <button class="rounded-pill btn btn-primary" width="100%">Follow</button>
                </div>
            </div>
        </li>
        </div>
        <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-none">
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="rounded-circle" width="100%" src=${who.avatarIcon}/>
                </div>
                <div class="col-6">
                    <div class="fw-bold text-nowrap">${who.userName} <i class="fa fa-check-circle"></i></div>
                    <div class="">${who.handle}</div>
                </div>
                <div class="col-4">
                    <button class="rounded-pill btn btn-primary" width="100%">Follow</button>
                </div>
            </div>
        </li>
        </div>
    `);
}
export default WhoToFollowListItem;