function load(){
    let textarea=document.querySelector("textarea");
    let speech =new SpeechSynthesisUtterance();
    speech.text=textarea.value;
    speech.voice=speechSynthesis.getVoices()[2];
    speechSynthesis.speak(speech);
}