let name, birth_year, birth_month, birth_days;

window.onload = function () {
    const name_str = this.name;
    const birth_year = this.birth_year;
    const birth_month = this.birth_month;
    const birth_days = this.birth_days;
  
    let message = birth_year + "." + birth_month + "." + birth_days + ".";
    message += name_str + "님의 운세 결과는..?";
  
    let result = document.getElementById('resultStr');
  
    result.style.fontWeight = "bold";
    result.style.fontSize = "30px";
  
    result.innerHTML = message;
}