window.onload = function () {
  //재물운
  var button = document.querySelector(".startBtn");
  var h2 = document.getElementsByTagName("h2")[0];

  var riches_luck = [
    "들어오는 것은 없는데 나가는 것이 많은 하루니 지출을 다시 돌아봐야 하네",
    "누군가를 위한 지출이라면 너무 아까워하지 말게. 내게도 돌아올 수 있으니.",
    "상대방의 성의가 부담스러워도 받아두어라. 그대가 베푼 보상이 돌아오는 것이니.",
    "줄 때는 확실하게 주어야 들어올 때도 눈치보지 않고 받을 수 있으니 명심하길 바라네.",
    "원하는 것을 얻을 수 있는 날이니 느긋한 마음으로 재충전의 시간을 가져보게.",
    "그대를 위한 지출도 선을 넘어선 안되니 개인적인 한도를 정하는 것이 좋네.",
    "잘 따져보고 그대에게 큰 이득이 없는 일은 조금 배제해두고 생각해보는게 좋네.",
    "눈 앞에 것만 취하려다가 더 소중한 것을 잃게 되니 유혹에 넘어가지 않는게 좋네.",
    "용돈을 준다거나 선물을 사주는 등 약간의 지출은 있을 예정이지만 <br>기분 좋은 날이 될것이네.",
    "쓸데없는 소비를 막기 위해서는 귀찮더라도 가계부를 작성해보면 좋겠네.",
    "재물이 나가고 자제력을 잃기 쉬운 날이기 때문에 게임은 삼가하는게 좋을 듯하네.",
    "적게 얻고 많이 쓰는 하루가 되니 재물은 기대하지 않는게 더 낫다네.",
    "일은 많지만 이루는 것이 제대로 없으니 소득을 기대하기는 어려운 날이 될것이네.",
    "어영부영 하다가 좋은 기회를 놓칠 수 있네. <br>확실하다면 일단 잡는게 맞다네.",
    "친절한 사감이 있더라도 약간의 경계심을 가져야 손해보지 않을 수 있다네.",
    "준 것도 없는데 받을 것을 기대할 수는 없네.. <br>그대가 먼저 상대에게 베풀어봐도 좋은 날이네.",
    "약간 부담스러울 수는 있지만 상대방의 성의를 봐서라도 선물은 받는게 좋겠네.",
    "상대방에게 선물을 받았다면 이젠 그대가 보답할 차례이네.신중하게 생각해서 결정하도록 하게.",
    "원하는 것이 있다면 확실하게 말하도록 하게. <br>그래야 하나라도 더 얻을 수 있네.",
    "낭비만 하지 않으면 큰 이득을 볼 수 있는 날이네. <br>오늘만은 낭비하는 습관을 줄이도록 하게..",
    "투자에 대한 빛을 볼 수 있는 날이니 기분 좋은 하루가 될 수 있겠네..!",
    "동전이라도 귀하게 여기고 모아두게. <br>티끌모아 태산인 걸 잊지 말라."
  ]

  var num = Math.round(Math.random() * (riches_luck.length - 1));
  // var num = Math.round( Math.random() * 2);
  h2.innerHTML = riches_luck[num];
  // alert(handArr[num])

}