const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');

const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK 6b9f484fd295646c5128115d8e9c0243' };

function success(data) {
  const { documents } = data;
  const li = documents.map(
    (doc) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      `<li class="list-group-item"><a href="${doc.url}" target="_blank"> ${doc.contents} </a></li>`,
  );

  $result.innerHTML = `<ul class="list-group list-group-flush">${li.join(
    '',
  )}</ul>`;
}

function error() {
  alert('데이터를 찾을 수 없어요.');
}

function search() {
  const { value } = $text;
  if (value === '') {
    alert('검색어를 입력하세요');
    return false;
  }
  fetch(`${url}?query=${value}`, { headers })
    .then((result) => result.json())
    .then(success)
    .catch(error);
  return true;
}

$btn.addEventListener('click', search);
