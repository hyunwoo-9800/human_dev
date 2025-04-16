function changePhoto() {
    alert('사진 변경 기능은 추후 제공됩니다.');
  }
  
  function deletePhoto() {
    alert('프로필 사진이 삭제되었습니다.');
  }
  
  function logOut() {
    alert('로그아웃 되었습니다.');
  }
  
  function confirmLeave() {
    if (confirm('정말 탈퇴하시겠습니까?')) {
      alert('회원 탈퇴가 완료되었습니다.');
    }
  }
  function showCalories() {
    const time = document.getElementById('time').value;
    const goal = document.getElementById('goal').value;
  
    if (!time || !goal) {
      alert("운동 시간과 목표 칼로리를 모두 입력해주세요!");
      return;
    }
  
    const consumed = Math.min(time * 5, goal); // 예: 1분당 5kcal 소모
    const percentage = (consumed / goal) * 100;
  
    drawCircle(percentage);
  
    // 결과 표시
    const resultText = `소모 칼로리: ${consumed.toFixed(1)} kcal`;
    document.getElementById('calorie-result').innerText = resultText;
  }
  
  
  function drawCircle(percent) {
    const canvas = document.getElementById('progressCanvas');
    const ctx = canvas.getContext('2d');
    const radius = canvas.width / 2 - 10;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // 배경 원
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#eee';
    ctx.lineWidth = 15;
    ctx.stroke();
  
    // 진행 원
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, -0.5 * Math.PI, (2 * Math.PI) * (percent / 100) - 0.5 * Math.PI);
    ctx.strokeStyle = '#ff7c00';
    ctx.lineWidth = 15;
    ctx.stroke();
  
    // 텍스트
    ctx.fillStyle = '#333';
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${Math.round(percent)}%`, canvas.width / 2, canvas.height / 2);
  }
  
  
  const ctx = document.getElementById('chart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['당뇨', '고혈압', '천식'],
      datasets: [
        {
          label: '운동 시 발병률 (%)',
          data: [7, 10, 5],
          backgroundColor: 'rgba(54, 162, 235, 0.6)'
        },
        {
          label: '비운동 시 발병률 (%)',
          data: [15, 20, 12],
          backgroundColor: 'rgba(255, 99, 132, 0.6)'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: '운동 여부에 따른 질환 발병률 비교'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: '발병률 (%)'
          }
        },
        x: {
          title: {
            display: true,
            text: '질환 종류'
          }
        }
      }
    }
  });
  
  // 마이페이지에서 이동
  function goMain() {
  
    location.href = "../index.html";
  
  }
  
  function goLogin() {
  
    location.href = "../user/login.html?login";
  
  }
  