function growYesButton() {
    var yesButton = document.getElementById('yesButton');
    var currentFontSize = parseInt(window.getComputedStyle(yesButton).fontSize);
    var currentPadding = parseInt(window.getComputedStyle(yesButton).padding);
    yesButton.style.fontSize = (currentFontSize*1.5) + 'px';
    yesButton.style.padding = (currentPadding*1.5) + 'px ' + (currentPadding + 2) + 'px';


    var noButton = document.getElementById('noButton');
    var buttonTexts = ["用意する暇がない", "まだ駄目", "甘えるな", "レシピが決まってない"];
  
    // 配列からランダムな要素を選択してボタンのテキストを更新
    var randomIndex = Math.floor(Math.random() * buttonTexts.length);
    noButton.textContent = buttonTexts[randomIndex];
  }

document.getElementById('noButton').addEventListener('click', function(event) {
    event.preventDefault(); // デフォルトの動作（リンク遷移）を防ぐ
    growYesButton();
});

document.addEventListener('DOMContentLoaded', function() {
    var yesButton = document.getElementById('yesButton');

    yesButton.addEventListener('click', function(event) {
        event.preventDefault(); // デフォルトのアンカータグの挙動を防ぎます
        window.location.href = 'thankyou.html'; // yes.htmlにリダイレクトします
    });
});
