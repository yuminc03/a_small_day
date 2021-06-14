window.onload = function(){
        
  var button = document.querySelector(".startBtn");
  var h2 = document.getElementsByTagName("h2")[0];

  var affection_luck = [

    "원인 없는 결과는 없답니다.. 검사 결과가 만족스럽지 못하다면 원인을 살펴야 합니다.",
    "힘들 때에는 잠시 기대도 괜찮아요. 기댈 때는 친구보다 가족에게 기대보세요.",
    "마음이 건강해야 몸도 건강해질 수 있습니다.. 부정적인 생각은 넣어두길 바랍니다.",
    "울고 싶을 때에는 울어야합니다. 마음의 건강을 위해 우울한 감정도 숨기지 말고 표출해보길 바랍니다.",
    "너무 일에만 집중하지 않길 바랍니다.. 이제라도 내 건강, 내 몸을 생각해야 합니다.",
    "병원가는 걸 미루고 미루다 보면 나중에 나만 힘들어 집니다! 병원 예약이 오늘이라면 꼭 가세요.",
    "컨디션이 좋지 않다면 쉬는게 좋겠습니다. 굳이 무리까지 할 필요는 없습니다!",
    "내 건강을 생각해서라도 과음, 과식 등 과한 모든 걸 자제하는 것이 좋겠습니다.",
    "건강을 해치는 일이면 어떤 달콤한 일이라고 해도 거절하는 것이 좋겠습니다.",
    "지금 하려는 일에 무리만 하지 않는다면 해낼 수 있지만 만 꼭 일과 휴식을 병행하며 하길 바랍니다.",
    "질병이 들 수도 있는 날입니다. 오늘 하루는 몸관리를 우선시 하는게 좋겠어요.",
    "새로운 일을 시작하기 전에 꼭 재충전하는 마음의 휴식이 먼저 필요합니다.",
    "몸에 의심되는 증상이 있다면 망설이지 말고 병원을 찾아야만 큰 일을 막을 수 있습니다..!",
    "대체적으로 건강이 좋은 하루에요! 긍정적인 마음만 있다면 뭐든 해낼 수 있어요.",
    "오늘 피곤하지는 않으신가요? 너무 피곤하다면 오늘 하루는 푹 쉬고 내일부터 시작하는게 도움될 수 있습니다.",
    "건강운이 좋습니다! 오늘 하루는 건강을 걱정할 필요가 없을 것 같습니다.",
    "힘들어도 음식은 항상 골고루 먹어야 건강해집니다.. 싫어하는 음식이 있어도 참고 먹는다면 분명 몸에 좋을 겁니다.",
    "몸의 건강 뿐만 아니라 마음의 건강도 신경 쓸 필요가 있습니다.. 내 속마음을 털어놓을 친구가 있다면 이야기 해보는 건 어떨까요?",
    "재산을 잃으면 조금 잃는 것이고 명예를 잃으면 많이 잃는 것이지만 건강을 잃으면 전부를 잃는 것이라는 말이 있습니다. 건강이 얼마나 중요한지 알았나요?",
    "작은 상처라도 소홀히 여기면 안된답니다. 상처가 생겼다면 어서 밴드라도 붙여주세요..!",
  ]
  
    var num = Math.round(Math.random() * (affection_luck.length-1)); 
    // var num = Math.round( Math.random() * 2);
    h2.innerHTML = affection_luck[num];
    // alert(handArr[num])
 
}