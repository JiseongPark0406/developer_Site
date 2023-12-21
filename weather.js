const apiKey = "d6fc6ddf5802f567ca1a5597edaba503"


function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`
    fetch(url).then(reponse => reponse.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoEroor(){
    alert("Can't Find You.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoEroor);

/*
깃허브에 올릴 때 날씨 api에서 발급된 api_key를 그대로 노출시키면 gitguardian?에서 메세지가 날라옵니다. 이건 github에서 정식으로 지원하는 그런 서비스가 아니라 자신들이 너의 github에 api키 같은 민감한 정보를 발견했다고 우리 제품 쓰라고 하는 일종의 홍보성 이메일이니 필수로 가입하지 않으셔도 됩니다!

물론 날씨 api의 api_key가 크게 중요한 정보가 아니기도 하고 무료다보니 발급된 토큰으로 이상한 짓을? 해도 큰 타격은 없겠지만 깃허브에서 보안이 가장 큰 이슈로 부각되고 있는 만큼 api_key를 보관하는 전역변수를 생성한 후 gitignore를 사용해 해당 파일을 숨김처리한 후 커밋&푸쉬를 하는 방식으로 해보는 것도 좋을 거 같습니다~

꼭 하라는 건 아니고 해보는 김에 같이 하면 좋다 이거죠~ㅎㅎ
자바스크립트에서 전역변수를 사용하는 방법은 https://stackoverflow.com/questions/41255861/how-to-pass-variable-from-one-javascript-to-another-javascript-file -> 이 사이트를 참고하면 좋을 듯 싶습니다.
*/