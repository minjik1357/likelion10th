// 2주차 과제 js활용하기
function changeMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
};

function toggleImg() {
    document.getElementById("thankyou").src = "./img/제리 인사 후.png";
  };

function confirmModal() {
  if (window.confirm("정말 기권을..하시겠습니까?")) {
    document.body.style.background = "#EACECE ";
    alert('의견을 기각합니다! 포기하지마세요!');
  } else {
    document.body.style.background = "#FFFFFF";
    console.log("취소. 변화 없음");
  }
  };

  function copy_to_clipboard() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("Copy");
    console.log('Copied!');
  }