//DOM elemnets
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btntop = document.querySelector('.btn-top');
const newsfeedspage = document.querySelector('.feeds-page');
const loginmodal = document.querySelector('.login-modal');
const modalLX = document.querySelector('.login-modal i');
const loginforbtn = document.querySelector('.login-form-btn');
const feedscontent = document.querySelector('.feeds-content');
const postbtn = document.querySelector('.post-btn');
const modalwrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postmodalx = document.querySelector('.modal-header i');
const modalpostbtn = document.querySelector('.modal-header button');
const modalfooterpls = document.querySelector('.modal-footer span');
const modalinput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarwrapper = document.querySelector('.sidebar-wrapper');
const xbtn = document.querySelector('.sidebar-header i');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
/************************************* **********
 * 
 * **********************************************/


/*main page**/
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};
middleContent.addEventListener('click', e => {
    if (e.target.classList[1] === 'main-btn') {
        goToLoginPage();
    }
});
btntop.addEventListener('click', () => {
    const inputuserinfo = document.querySelector('.user-info');
    const inputpassword = document.querySelector('.password');
    if (inputuserinfo.value !== "" && inputpassword.value !== "") {
        mainPage.style.display = 'none';
        newsfeedspage.style.display = 'grid';
        feedscontent.style.display = 'grid';
    } else {
        goToLoginPage();
        loginmodal.style.display = 'block';
    }
});
//login page 
modalLX.addEventListener('click', () => {
    loginmodal.style.display = 'none';
});
loginforbtn.addEventListener('click', () => {
    const loginuserinfo = document.querySelector('.login-user-info');
    const loginpassword = document.querySelector('.login-password');
    if (loginuserinfo.value !== "" && loginpassword.value !== "") {
        loginPage.style.display = 'none';
        newsfeedspage.style.display = 'block';
        feedscontent.style.display = 'grid';
    } else {
        loginmodal.style.display = 'block';
    }
});

/*news feed page*/
/* post modal */
postbtn.addEventListener('click', () => {
    modal.style.display = 'block';

    modalwrapper.classList.add('modal-wrapper-display');
});
const changeopacity = (x) => {
    modalpostbtn.style.opacity = x;
    modalfooterpls.style.opacity = x;
}
postmodalx.addEventListener('click', () => {
    modal.style.display = 'none';
    modalwrapper.classList.remove('modal-wrapper-display');
    if (modalinput.value !== "") {
        modalinput.value = "";
        changeopacity(.5);
    }
});
modalinput.addEventListener('keypress', (e) => {
    if (e.target.value !== '') {
        changeopacity(1);
    }
});
modalinput.addEventListener('blur', (e) => {
    if (e.target.value === '') {
        changeopacity(0.5);
    }
});
//sidebar
/********* */
user.addEventListener('click', () => {


    sidebar.classList.add('sidebar-display');
    sidebarwrapper.classList.add('sidebar-wrapper-display');


});
xbtn.addEventListener('click', () => {

    sidebar.classList.remove('sidebar-display');
    sidebarwrapper.classList.remove('sidebar-wrapper-display');
});
/* dark mode
/*/
/** ** ** ** * /*/
const darkelement1 = document.querySelectorAll('.dark-mode-1');
const darkelement2 = document.querySelectorAll('.dark-mode-2');
toggle.addEventListener('click', () => {

    circle.classList.toggle('move');
    Array.from(darkelement1).map((darkeli1) => {
        darkeli1.classList.toggle('dark-1');
    })
    Array.from(darkelement2).map((darkeli2) => {
        darkeli2.classList.toggle('dark-2');
    })
});
