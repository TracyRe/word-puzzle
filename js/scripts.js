$(document).ready(function(){
  $("form.sentence").submit(function(event){
    event.preventDefault();

    var inputSentence = $("#inputSentence").val();
    var newSentence = inputSentence.split("");
    console.log(newSentence);

    // var vowels = ['a', 'e', 'i', 'o', 'u'];
    // console.log(vowels);
    //
    // vowels.forEach(function(vowel){
    //   return vowel;
      var vowels = [];
      newSentence.map(function(letter){
        var puzzleSentence = letter.replace('a', '-');
        vowels.push(puzzleSentence);

        console.log(vowels);
        var output = vowels.join("");
        $(".output").show();
        $(".word-puzzle").text(output);
      });
    // })
  });
});
