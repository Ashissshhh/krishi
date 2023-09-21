// let speech = new SpeechSynthesisUtterance();





// window.speechSynthesis.onvoiceschanged = () => { 
//     voices = window.speechSynthesis.getVoices(); 
//     speech.voice = voices[0];

//     voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
// };

// voiceSelect.addEventListener("change", () =>{ 
//     speech.voice = voices [voiceSelect.value]
// });

document.querySelector("#listen-button").addEventListener("click", () =>{
    console.log('func() trigerred!!')
    const elements = document.querySelectorAll(".message-content");
    const voiceSelect = elements[elements.length - 1].innerHTML;
    // console.log(elements);
    console.log(voiceSelect);
    textToSpeech(voiceSelect);
});


function textToSpeech(text) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();
      utterance.voice = voices[0];
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis not supported in this browser.');
}
}
