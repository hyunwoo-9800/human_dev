//  관리자 페이지용 js

// 헤더 로고 클릭 시 메인 이동용
function goMain() {
    window.location.href = "../index.html";
}

// 헤더영역 로그인 클릭 시
function goLogin() {
    window.location.href = "../user/login.html?login";
}

// 운동법 페이지로
function goEx() {
    location.href = "../exercise/exMet.html";
}

// 운동장비 페이지로
function goEq() {
    location.href = "../healthcare/equipments.html";
}

// 보조식품 페이지로
function goSup() {
    location.href = "../healthcare/supplements.html";
}

// 게시판 페이지로
function goBoard() {
    location.href = "../board/board.html";
}

// 관리자 페이지 수정
function updateCheck() {
    if (confirm("수정하시겠습니까?")) {
        alert("수정완료");
    } else {
        alert("취소하였습니다.");
    }
}

// 관리자 페이지(등록) 이동
function goReg() {
    window.location.href = "../admin/adminReg.html";
}

// 관리자 페이지(등록)에서 관리자 페이지 메인으로 이동
function goList() {
    location.href = "../admin/admin.html";
}

function add() {
    if (confirm("수정하시겠습니까?")) {
        alert("수정완료");
    } else {
        alert("취소하였습니다.");
    }
}

// 운동법 탭 탭 추가용
function addExRow() {
    // 현재 선택된 라디오 버튼 찾기
    const selected = document.querySelector('input[name="detailItem"]:checked');
    const selectedId = selected ? selected.id : null;

    if (!selectedId) {
        return
    };

    // 선택된 탭 콘텐츠 ID에 맞는 테이블 찾기
    const table = document.querySelector(`#${selectedId}Content table`);

    if (!table) {
        return
    };

    const newRow = table.insertRow();

    const newCell1 = newRow.insertCell(0);
    newCell1.innerHTML = '<input type="text" placeholder="운동 이름">';

    const newCell2 = newRow.insertCell(1);
    newCell2.innerHTML = '<input type="file">';

    const newCell3 = newRow.insertCell(2);
    newCell3.innerHTML = '<input type="text" placeholder="상세 설명">';

    const newCell4 = newRow.insertCell(3);
    newCell4.innerHTML = `
    <select>
        <option value="O">O</option>
        <option value="X">X</option>
    </select>
`;
    const newCell5 = newRow.insertCell(4);
    newCell5.innerHTML = `
    <td><button type="button" class="button" onclick="deleteRow(this)">삭제</button></td>`;
}

// 광고탭 탭 추가용
function addAdRow() {
    const table = document.querySelector('#adAdd table');                   // 테이블 선택

    if (!table) {
        alert("테이블을 찾을 수 없습니다.");
        return;
    }

    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td><input type="text" placeholder="번호"></td>
        <td><input type="text" placeholder="보충제"></td>
        <td><input type="text" placeholder="광고링크"></td>
        <td>
            <select>
                <option value="O">O</option>
                <option value="X">X</option>
            </select>
        </td>
        <td><button type="button" class="button"">광고 내리기</button></td>
        <td>${getToday()}</td>
        <td>${getToday()}</td>
        <td><button type="button" class="button" onclick="deleteRow(this)">삭제</button></td>
    `;
}

// 보충제, 영양제 탭 추가용
function addHealthRow() {
    const table = document.querySelector('#healthMContent table');
    if (!table) return;

    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td><input type="file"></td>
        <td><input type="text" placeholder="상세설명 / URL"></td>
        <td>
            <select>
                <option value="O">O</option>
                <option value="X">X</option>
            </select>
        </td>
        <td>${getToday()}</td>
        <td>${getToday()}</td>
        <td><button type="button" class="button" onclick="deleteRow(this)">삭제</button></td>
    `;
}

// 운동 기구 탭 추가용
function addEquipRow() {
    const table = document.querySelector('#equipmentContent table');
    if (!table) return;

    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td><input type="file"></td>
        <td><input type="text" placeholder="상세설명 / URL"></td>
        <td>
            <select>
                <option value="O">O</option>
                <option value="X">X</option>
            </select>
        </td>
        <td>${getToday()}</td>
        <td>${getToday()}</td>
        <td><button type="button" class="button" onclick="deleteRow(this)">삭제</button></td>
    `;
}

// 오늘 날짜 확인용
function getToday() {
    const today = new Date();
    return today.toISOString().slice(2, 10).replace(/-/g, '/');
}

// 행 삭제용
function deleteRow(button) {
    const row = button.closest('tr');                   // 버튼이 속한 <tr> 찾기
    if (row) {
        row.remove();                                   // 행 삭제
    }
}