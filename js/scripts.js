$(document).ready(function(){
  $("form.sentence").submit(function(event){
    event.preventDefault();

    var inputSentence = $("#inputSentence").val();
    var newSentence = inputSentence.split("");
    // var testInput = "I am not too crazy am i or else"
    // var newSentence = testInput.split("");
    var replacedVowels = [];
    var puzzleSentence = [];
    newSentence.forEach(function(letter){
      console.log(letter);
      if ((letter === 'a') || (letter === 'e') || (letter === 'i' ) || (letter === 'o' ) || (letter === 'u' )) {
        replacedVowels.push('-');
      } else {
        replacedVowels.push(letter);
      }
    });

    console.log(replacedVowels);
    console.log(newSentence);
    console.log(replacedVowels);

      var output = replacedVowels.join("");
      $(".container").children().toggle();
      $(".word-puzzle").text(output);
  });

  $("button#redo").click(function(){
  setTimeout(function () {
   location.reload()}, 100);
 });
});
