// 페이지 이동용 js 파일

// 헤더 로고 클릭 시 메인 이동용
function goMain() {

    location.href = "../html/index.html";

}

function goLogin() {

    location.href = "../html/user/login.html?login";

}

function searchId() {

    location.href = "../html/user/login.html?searchId";

}

function searchPw() {

    location.href = "../html/user/login.html?searchPw";

}

function goJoin() {

    location.href = "../html/user/login.html?goJoin";

}

function goBack() {

    history.back();

}