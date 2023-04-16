let selectNumber = document.getElementById("selectNumber");

selectNumber.addEventListener("change", function () {
  const id = selectNumber.value;
  chrome.storage.sync.set({ ["id"]: id }, function () {
    console.log("Id " + id + "saved");
  });
});

chrome.storage.sync.get(["id"], function (result) {
  if (result.id) {
    selectNumber.value = result.id;
  } else {
    console.log("No value saved :c");
  }
});
