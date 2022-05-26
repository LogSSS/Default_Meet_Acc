let params = new URLSearchParams(window.location.search);
let q = parseInt(params.get("authuser"));

if (q != 1) {
    var url = new URL(window.location);
    params.set('authuser', '1');
    window.location.search = params.toString();
}
