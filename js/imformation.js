// function printName()  {
//   const name = document.getElementById('name').value;
//   document.getElementById("result").innerText = name;
// }
let name, birth_year, birth_month, birth_days;

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

  const state = {
    name: this.name,
    birthYear: birth_year,
    birthMonth: birth_month,
    brithDay: birth_days
  };
  history.pushState(state, '', '../loading.html');
}