function userInfo() {
  const name = document.getElementById("full_name"); //사용자 이름
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

  document.write(name);
  document.write(birth_year);
  document.write(birth_month);
  document.write(birth_days);
  document.write(users_gender);

}