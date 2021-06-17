const name;


window.onload = function(){
  const name_str = name;
  let message = name_str + "님의 운세 결과는..?";

  let result = document.getElementById('resultStr');
  result.innerHTML = message;
}

function userInfo() {
  name = document.getElementById("full_name"); //사용자 이름
  //사용자 생년월일
  const birth_year = document.getElementById("birth_year").value;
  var target = document.getElementById("birth_month"); //사용자 생월
  const birth_month = target.options[target.selectedIndex].text;
  var targetDate = document.getElementById("birth_days"); //사용자 생일
  const birth_days = targetDate.options[targetDate.selectedIndex].text;
  const gender = document.getElementsByName("gender_type");

  var user_gender;
  gender.forEach((values) => {
    if (values.checked) {
      user_gender = node.value;
    }
  })
  const users_gender = user_gender;
}