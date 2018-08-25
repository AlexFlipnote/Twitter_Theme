function save_options() {
  var customcss = document.getElementById('customcss').value;
  var twittertheme = document.getElementById('twittertheme').checked;

  chrome.storage.local.set({
    customcss: customcss,
    twittertheme: twittertheme
  }, function() {
    // Update status to let user know options were saved.
    var modal = document.getElementById('modal');
    var modaltarget = document.getElementsByClassName('modal')[0];
    modal.style.display = "block";
    modaltarget.classList.remove('modal--close');
    setTimeout(function() {
      modaltarget.classList.add('modal--close');
      setTimeout(function() { modal.style.display = "none"; }, 570);
    }, 1000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.local.get({
    customcss: "",
    twittertheme: true
  }, function(items) {
    document.getElementById('customcss').value = items.customcss;
    document.getElementById('twittertheme').checked = items.twittertheme;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
