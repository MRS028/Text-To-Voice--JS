const languageSelect = document.getElementById('languageSelect');
const languages = [
    { code: 'en-US', name: 'English (US)' },
    { code: 'en-GB', name: 'English (UK)' },
    { code: 'es-ES', name: 'Spanish (Spain)' },
    { code: 'fr-FR', name: 'French (France)' },
    { code: 'de-DE', name: 'German' },
    { code: 'hi-IN', name: 'Hindi' },
    { code: 'bn-BD', name: 'Bangla (Bangladesh)' },
    { code: 'ar-SA', name: 'Arabic (Saudi Arabia)' },
    { code: 'ja-JP', name: 'Japanese' },
    { code: 'zh-CN', name: 'Chinese (Mandarin)' }
];

languages.forEach(lang => {
    let option = document.createElement('option');
    option.value = lang.code;
    option.textContent = lang.name;
    languageSelect.appendChild(option);
});


document.getElementById('speakButton').addEventListener('click', function() {
    let text = document.getElementById('text').value;
    let language = languageSelect.value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = language;
    speech.text = text;
    speech.volume = 1; 
    speech.rate = 1; 
    speech.pitch = 1; 
    window.speechSynthesis.speak(speech);
});
