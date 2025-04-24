const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");
const body = document.body;

// Theme variables
let isDarkTheme = false;

// functions
const toggleLock = ()=>{
    sidebar.classList.toggle('locked');
    // if the sidebar is locked, change the icon to unlock
    if(!sidebar.classList.contains('locked')){
        sidebar.classList.add("hoverable")
        sidebarLockBtn.classList.replace('ri-lock-line', 'ri-lock-unlock-line'); 
    }else{
        sidebar.classList.remove("hoverable")
        sidebarLockBtn.classList.replace('ri-lock-unlock-line', 'ri-lock-line');
    }
}
// function to hide sidebar when mouse leaves
const hideSidebar = ()=>{
    if(sidebar.classList.contains('hoverable')){
        sidebar.classList.add("close")
    }
}

// function to show sidebar when mouse enter
const showSidebar = ()=>{
    if(sidebar.classList.contains('hoverable')){
        sidebar.classList.remove("close")
    }
}

// function to toggle sidebar
const toggleSidebar = ()=>{
    sidebar.classList.toggle("close");
}

if(window.innerWidth < 800){
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
}


// Theme functions
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        body.classList.add('dark-theme');
        themeToggleBtn.className = 'ri-sun-line';
    } else {
        body.classList.remove('dark-theme');
        themeToggleBtn.className = 'ri-moon-line';
    }
    // Save theme preference to localStorage
    localStorage.setItem('darkTheme', isDarkTheme);
}

// Check for saved theme preference
function loadTheme() {
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme === 'true') {
        isDarkTheme = true;
        body.classList.add('dark-theme');
        themeToggleBtn.className = 'ri-sun-line';
    } else {
        themeToggleBtn.className = 'ri-moon-line';
    }
}

// Get the theme toggle button from HTML
const themeToggleBtn = document.querySelector('#theme-toggle');

// Add event listener to theme toggle button
themeToggleBtn.addEventListener('click', toggleTheme);

// Initialize theme on page load
loadTheme();

// event listeners
sidebarLockBtn.addEventListener('click', toggleLock);
sidebar.addEventListener('mouseleave',hideSidebar);
sidebar.addEventListener('mouseenter',showSidebar);
sidebarOpenBtn.addEventListener('click',toggleSidebar);
sidebarCloseBtn.addEventListener('click',toggleSidebar);