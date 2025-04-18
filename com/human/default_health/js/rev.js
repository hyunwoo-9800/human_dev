// 메인화면으로
function goMain() {
    location.href = "../index.html";
}

// 작성확인용
function reg() {
    if (confirm("작성하시겠습니까?")) {
        alert("작성완료");
        history.back();
    } else {
        alert("취소하였습니다.");
    }
}

// 취소용
function cancel() {
    history.back();
}