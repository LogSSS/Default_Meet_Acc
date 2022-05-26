let params = new URLSearchParams(window.location.search);
let q = parseInt(params.get("authuser"));

if (q != 1) {
    var url = new URL(window.location);
    var search_params = url.searchParams;
    search_params.set('authuser', '1');
    url.search = search_params.toString();
    window.location.href = url.toString();
}
