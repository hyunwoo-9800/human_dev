function sortTable(n) {
  const table = document.getElementById('board');
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
    const cellA = rowA.querySelectorAll('td')[n].textContent;
    const cellB = rowB.querySelectorAll('td')[n].textContent;
    return cellA.localeCompare(cellB, undefined, {
      numeric: true,
      sensitivity: 'base',
    });
  });

  if (table.getAttribute('data-sort-dir') === 'asc') {
    rows.reverse();
    table.setAttribute('data-sort-dir', 'desc');
  } else {
    table.setAttribute('data-sort-dir', 'asc');
  }

  table.removeChild(tbody);
  rows.forEach((row) => tbody.appendChild(row));
  table.appendChild(tbody);
}
//게시판 정렬-------------------------------------------------

function goList() {
  location.href = '../../html/board/board_list.html';
}

function goWrite() {
  location.href = '../../html/board/board_write.html';
}

//버튼 ========================================================
