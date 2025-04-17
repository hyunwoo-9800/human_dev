// 로그인 페이지 js

// 넘어오는 파라미터에 따라 폼을 숨김
var urlValue = window.location.search;

if (urlValue == "?login") {
    $(".searchId").hide();
    $(".idList").hide();
    $(".joinUser").hide();
    $(".changePwd").hide();
    $(".changePwdSend").hide();
    $(".joinUser").hide();
}

if (urlValue == "?searchId") {
    $(".loginForm").hide();
    $(".idList").hide();
    $(".joinUser").hide();
    $(".changePwd").hide();
    $(".changePwdSend").hide();
    $(".joinUser").hide();
}

if (urlValue == "?searchPw") {

    $(".loginForm").hide();
    $(".searchId").hide();
    $(".idList").hide();
    $(".joinUser").hide();
    //$("#changePwd").hide();
    $(".changePwdSend").hide();
    $(".joinUser").hide();


}

if (urlValue == "?goJoin") {
    $(".loginForm").hide();
    $(".searchId").hide();
    $(".idList").hide();
    $(".changePwd").hide();
    $(".changePwdSend").hide();
}

// 비밀번호 찾기용
function changePwd() {
    var userName = document.getElementById("userName").value;
    var userSno = document.getElementById("userSno").value;
    var searchPwdId = document.getElementById("searchPwdId").value;

    var check1 = false;
    var check2 = false;
    var check3 = false;

    // 입력체크 시작
    if (userName == null || userName == "") {
        alert("이름을 입력해주세요.");
        return false;
    } else {
        check1 = true;
    }

    if (userSno == null || userSno == "") {
        alert("주민등록 번호를 입력해주세요.");
        return false;
    } else {
        check2 = true;
    }

    if (searchPwdId == null || searchPwdId == "") {
        alert("아이디를 입력해주세요.");
        return false;
    } else {
        check3 = true;
    }

    if (check1 && check2 && check3) {
        $("#changePwd").hide();
        $("#changePwdSend").show();
    }
}

function newPwd() {

    var newChangePwd = document.getElementById("newChangePwd").value;
    var newPasswordConfirm = document.getElementById("newPasswordConfirm").value;

    var check1 = false;
    var check2 = false;

    if (newChangePwd == null || newChangePwd == "") {
        alert("비밀번호를 입력해주세요.");
        return false;
    } else {
        check1 = true;
    }

    if (newPasswordConfirm == null || newPasswordConfirm == "") {
        alert("비밀번호 확인란을 입력해주세요.");
        return false;
    } else {
        check2 = true;
    }

    if(newChangePwd != newPasswordConfirm) {
        alert("비밀번호를 확인해 주세요.");
        return false;
    }

    if(check1 && check2) {
        alert("비밀번호가 변경되었습니다.");
        location.href = '../index.html';
    }

}

// 아이디 찾기용
function searchId() {
    // id값으로 입력값을 얻어와서 각각의 변수에 저장
    var searchLoginId = document.getElementById("searchLoginId").value;
    var searchSno = document.getElementById("searchSno").value;
    var check1 = false;
    var check2 = false;

    // 입력체크 시작
    if (searchLoginId == null || searchLoginId == "") {
        alert("아이디를 입력해주세요.");
        return false;
    } else {
        check1 = true;
    }

    if (searchSno == null || searchSno == "") {
        alert("주민등록 번호를 입력해주세요.");
        return false;
    } else {
        check2 = true;
    }

    // 이메일 형식이며, 패스워드가 입력되어 있다면 문구를 출력 후 페이지 이동
    if (check1 && check2) {
        $(".searchId").hide();
        $(".idList").show();
    } 

}

// 약관 동의 팝업 함수
function showPopup() {
    window.open("./agreement.html", "a", "width=400, height=300, left=100, top=50");
    var radioCheck = document.getElementById("agreementCheck");
    radioCheck.checked = true;
}

// 로그인 체크용 (login.html)
function login() {

    // id값으로 입력값을 얻어와서 각각의 변수에 저장
    var userid = document.getElementById("userid").value;
    var password = document.getElementById("password").value;
    var check1 = false;
    var check2 = false;
    // 입력체크 시작
    if (userid == null || userid == "") {
        alert("아이디를 입력해주세요.");
        return false;
    } else {
        check1 = true;
    }

    if (password == null || password == "") {
        alert("비밀번호를 입력해주세요.");
        return false;
    } else {
        check2 = true;
    }

    // 이메일 형식이며, 패스워드가 입력되어 있다면 문구를 출력 후 페이지 이동
    if (check1 && check2) {
        if (userid == "user") {
            alert(userid + "님 환영합니다!");
            location.href = '../index_user.html';
            return true;
        } else if(userid == "admin") {
            location.href = '../index_admin.html';
            return true;
        }
    }

}

// 회원 가입 처리용
function joinCheck() {

    // id값으로 입력값을 얻어와서 각각의 변수에 저장
    var joinId = document.getElementById("joinId").value;
    var joinPwd = document.getElementById("joinPwd").value;
    var joinConfirm = document.getElementById("joinConfirm").value;
    var joinName = document.getElementById("joinName").value;
    var joinSno = document.getElementById("joinSno").value;
    var joinSex = document.getElementById("joinSex").value;
    var joinPhoneNo = document.getElementById("joinPhoneNo").value;
    var joinSex = $('input[name=sex]').is(":checked");
    var checkbox = $('input[name=agreementCheck]').is(":checked");

    var check1 = false;
    var check2 = false;
    var check3 = false;
    var check4 = false;
    var check5 = false;
    var check6 = false;
    var check7 = false;
    var check8 = false;
    var check9 = false;

    // 입력체크 시작
    if (joinId == null || joinId == "") {
        alert("아이디를 입력해주세요.");
        return false;
    } else {
        check1 = true;
    }

    if (joinPwd == null || joinPwd == "") {
        alert("비밀번호를 입력해주세요.");
        return false;
    } else {
        check2 = true;
    }

    if (joinConfirm == null || joinConfirm == "") {
        alert("비밀번호 확인란을 입력해주세요.");
        return false;
    } else {
        check3 = true;
    }

    if(joinPwd != joinConfirm) {
        alert("입력하신 비밀번호를 확인해주세요.");
        return false;
    }

    if (joinName == null || joinName == "") {
        alert("이름을 입력해주세요.");
        return false;
    } else {
        check4 = true;
    }

    if (joinSno == null || joinSno == "") {
        alert("주민등록 번호를 입력해주세요.");
        return false;
    } else {
        check5 = true;
    }
    if (joinSex == null || joinSex == "") {
        alert("성별을 선택 해주세요.");
        return false;
    } else {
        check6 = true;
    }
    if (joinPhoneNo == null || joinPhoneNo == "") {
        alert("핸드폰 번호를 입력해주세요.");
        return false;
    } else {
        check7 = true;
    }
    if (joinName == null || joinName == "") {
        alert("이름을 입력해주세요.");
        return false;
    } else {
        check8= true;
    }
    if (checkbox == null || checkbox == "") {
        alert("약관을 읽어주세요.");
        return false;
    } else {
        check9 = true;
    }

    if (check1 && check2 && check2 && check3 && check4 && check5 && check6 && check7 && check8 && check9) {
        location.href = '../index.html';
    }

}

// 뒤로가기
function goBack() {

    history.back();

}

// 마이페이지로
function goMypage() {
    location.href = "../html/user/myPage.html";
}

// 관리자페이지로
function goAdminPage() {
    location.href = "../html/admin/admin.html";
}

// 로그아웃
function logOut() {
    if (confirm("로그아웃 하시겠습니까?")) {
        alert("로그아웃 하였습니다.");
        location.href = "./index.html";
    }
}
// 로그인 페이지 js 끝