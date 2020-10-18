var fields = document.querySelectorAll(".textb input");
//uerySelectorAll() 는 지정된 셀렉터 그룹에 일치하는 다큐먼트의 엘리먼트 리스트를 나타내는 정적(살아 있지 않은) NodeList 를 반환합니다.
var btn = document.querySelector("btn");
//Document.querySelector()는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환합니다. 일치하는 요소가 없으면 null을 반환합니다.
function check(){
    if(fields[0].value != "" && fields[1].value != "")
        btn.disabled = false;
    else
        btn.disabled = true;
}

fields[0].addEventListener("keyup",check);
fields[1].addEventListener("keyup",check);
//EventTarget의 addEventListener() 메서드는 지정한 이벤트가 대상에 전달될 때마다 호출할 함수를 설정합니다.

document.querySelector(".show-password").addEventListener("click",
function(){
    if(this.classList[2] == "fa-eye-slash"){
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
        fields[1].type = "text";
    }else{
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
        fields[1].type = "password";
    }
});