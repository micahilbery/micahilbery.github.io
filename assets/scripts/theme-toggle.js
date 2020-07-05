let perferedTheme = sessionStorage.getItem('perferedTheme');

function setLightTheme() {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
  }

  document.body.classList.add('light');
  sessionStorage.setItem('perferedTheme', 'light');
}

function setDarkTheme() {
  if (document.body.classList.contains('light')) {
    document.body.classList.remove('light');
  }

  document.body.classList.add('dark');
  sessionStorage.setItem('perferedTheme', 'dark');
}

function setPerferedTheme() {
  perferedTheme = sessionStorage.getItem('perferedTheme');

  if(perferedTheme === 'light') {
    setLightTheme();
  } else if (perferedTheme === 'dark') {
    setDarkTheme();
  }
}

function toggleTheme() {
    perferedTheme = sessionStorage.getItem('perferedTheme');

  if(perferedTheme === null) {
    sessionStorage.setItem('perferedTheme', 'dark');
    setPerferedTheme();
  } else if(perferedTheme === 'light') {
    sessionStorage.setItem('perferedTheme', 'dark');
    setPerferedTheme();
  } else if (perferedTheme === 'dark') {
    sessionStorage.setItem('perferedTheme', 'light');
    setPerferedTheme();
  }
}

const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', toggleTheme);

setPerferedTheme();
