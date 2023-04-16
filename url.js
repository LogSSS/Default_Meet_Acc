function getId(callback) {
  chrome.storage.sync.get(["id"], function (result) {
    let id;
    if (result.id) {
      id = result.id;
    } else {
      id = 0;
      console.log("No value saved :c\n0 by default");
    }
    callback(id);
  });
}

function setId(newId) {
  let params = new URLSearchParams(window.location.search);
  let q = parseInt(params.get("authuser"));

  if (q != newId) {
    params.set("authuser", newId);
    window.location.search = params.toString();
  }
}

getId(function (id) {
  setId(id);
});
