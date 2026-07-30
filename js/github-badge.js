(function () {
  var OWNER = 'y-bow';
  var REPO = 'saiufosswiki';

  function init() {
    var dateEl = document.getElementById('gh-badge-date');
    if (dateEl) {
      var now = new Date();
      dateEl.textContent = now.toLocaleString('en-US', {month: 'long', year: 'numeric'}).toLowerCase().replace(' ', '-');
    }

    fetch('https://api.github.com/repos/' + OWNER + '/' + REPO)
      .then(function (res) {
        if (!res.ok) throw new Error('API error');
        return res.json();
      })
      .then(function (data) {
        var starsEl = document.getElementById('gh-badge-stars');
        var forksEl = document.getElementById('gh-badge-forks');
        if (starsEl) starsEl.textContent = data.stargazers_count;
        if (forksEl) forksEl.textContent = data.forks_count;
      })
      .catch(function () {});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-run on Docusaurus SPA navigation
  var lastPath = location.pathname;
  setInterval(function () {
    if (location.pathname !== lastPath) {
      lastPath = location.pathname;
      init();
    }
  }, 500);
})();
