 const themSwitcher = document.querySelector('#themeSwitcher');

 /* navigator.geolocation.getCurrentPosition((position) => {
     console.log(position);
 }); */

 const defaultTheme = localStorage.getItem('theme') || 'theme-light';

 setTheme(defaultTheme);



 themSwitcher.addEventListener('change', (e) => {
     setTheme(e.target.value);

 });

 function setTheme(theme) {
     theme = theme || 'theme-light';
     document.documentElement.className = theme;
     localStorage.setItem('theme', theme);
     themSwitcher.value = theme;
 }