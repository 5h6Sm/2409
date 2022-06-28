//toggle hidden menu
const toggleMenu = (toggleId, navListId) => {
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);
    const toggleIcon = toggle.getElementsByTagName("i")[0];

    if(toggle && navList){
        //add : 추가, remove : 제거, toggle : 추가/제거
        toggle.addEventListener('click', () =>{
            //toggle menu
            navList.classList.toggle('show-menu');
            //change toggle icon : bx-menu <-> bx-x-circle
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bx-x-circle");
        });
    }

}
toggleMenu('nav-toggle', 'nav-list');

// function say(){
//     console.log('hello world');
// }

// const say = function(){
//     console.log('hello world2');
// }

// const say = () => console.log('hello world3');
// say();
const addNow = (homeCardId) => {
    // html -> js
    const homeCard = document.getElementById(homeCardId);
    // 시간 -> 몇번째 식사가 선택되어야하는지 결정
    // 조식 끝 : 8:00
    // 중식 끝 : 13:00
    // 석식 끝 : 17:50
    const now = new Date();
    let hour;
    let minute;
    
    hour = 17;
    minute = 51;
    console.log(hour, minute);
    index = 0;
    let minutes = hour*60 + minute;

    if(minutes >= 17*60+50){
        index = 0;
    }else if(minutes <= 13*60){
        index = 2;
    }else if(minutes <= 8*60){
        index = 1;
    }
    // if(hour > 8 && hour <= 13){
    //     if(minute >= 0 ){
    //         index = 1;
    //     }
    // }
    // if(hour >= 13 && hour <= 17){
    //     if(hour != 17 || hour == 17 && minute <= 50){
    //         index = 2;
    //     }
    // }
    console.log(index);

    // homeCard에서 index번째 card에 now 클래스 추가
    let card = homeCard.getElementsByClassName('card')[index];
    card.classList.add('now');

}
addNow('home-card');