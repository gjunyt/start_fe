const $result = document.getElementById('result');
const $btnGetInputValue = document.getElementById('btn');

function gugudan(num) {
  str = '';
  for (var i = 1; i < 10; i++) {
    str += num + 'x' + i + '=' + num * i + '<br>';
  }
  $result.innerHTML = str;
}

function setResult() {
  const $inputValue = document.getElementById('num');
  const transType = parseInt($inputValue.value);
  if (!isNaN(transType)) {
    gugudan(transType);
  } else {
    alert('숫자를 입력해 주세요');
  }
}

$btnGetInputValue.addEventListener('click', setResult);
