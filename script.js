const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");

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


// event listeners
sidebarLockBtn.addEventListener('click', toggleLock);
sidebar.addEventListener('mouseleave',hideSidebar);
sidebar.addEventListener('mouseenter',showSidebar);
sidebarOpenBtn.addEventListener('click',toggleSidebar);
sidebarCloseBtn.addEventListener('click',toggleSidebar);