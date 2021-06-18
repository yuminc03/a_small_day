let name, birth_year, birth_month, birth_days;

window.onload = function(){
  const name_str = this.name;
  const birth_year = this.birth_year;
  const birth_month = this.birth_month;
  const birth_days = this.birth_days;
  
  let message = birth_year + "." + birth_month + "." + birth_days + ".";
  massage += name_str + "님의 운세 결과는..?";

  let result = document.getElementById('resultStr');
  result.innerHTML = message;
}

function userInfo() {
  this.name = document.getElementById("full_name").value; //사용자 이름
  //사용자 생년월일
  const birth_year = document.getElementById("birth_year").value;
  let target = document.getElementById("birth_month"); //사용자 생월
  const birth_month = target.options[target.selectedIndex].text;
  let targetDate = document.getElementById("birth_days"); //사용자 생일
  const birth_days = targetDate.options[targetDate.selectedIndex].text;
  const gender = document.getElementsByName("gender_type");

  let user_gender;
  gender.forEach((values) => {
    if (values.checked) {
      user_gender = node.value;
    }
  })
  const users_gender = user_gender;
}