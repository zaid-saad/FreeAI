let btn = document.querySelector(".talk");
let content = document.querySelector(".content")

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak)
}

function wishme(params) {
    let day = new Date();
    let hr = day.getHours();
    if (hr >= 0 && hr < 12) {
        speak("Good Morning Boss")
    }
    else if (hr == 12) {
        speak("Good noon Boss")
    }
    else if (hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss")
    }
    else {
        speak("Good Evening Boss")
    }
}
window.addEventListener("load", () => {
    speak("Activating Jarvis");
    speak("Going online")
    wishme();
})

const speechrecogination = window.SpeechRecogination || window.webkitSpeechRecognition
const recoginition = new speechrecogination;

recoginition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    content.textContent = transcript
    speakthis(transcript.toLowerCase())
}
btn.addEventListener("click", () => {
    recoginition.start()
})
function speakthis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try";

    if (message.includes("hey") || message.includes("hello")) {
        const finaltext = "Hello Boss";
        speech.text = finaltext;
    }
    else if (message.includes("how are you")) {
        const finaltext = " i am Fine Boss tell me how can i help you";
        speech.text = finaltext;
    }
    else if (message.includes("what are you doing")) {
        const finaltext = "Nothing Boss tell me how can i help you";
        speech.text = finaltext;
    }
    else if (message.includes("ok")) {
        const finaltext = "good";
        speech.text = finaltext;
    }
    else if (message.includes("name")) {
        const finaltext = " my name is jarvis";
        speech.text = finaltext;
    }
    else if (message.includes("thank you")) {
        const finaltext = "welcome boss";
        speech.text = finaltext;
    }
    else if (message.includes("open google")) {
        window.open(`https://www.google.com`, "_blank");
        const finaltext = "opening google";
        speech.text = finaltext;
    }
    else if (message.includes("open youtube")) {
        window.open(`https://www.youtube.com`, "_blank");
        const finaltext = "opening youtube";
        speech.text = finaltext;
    }
    else if (message.includes("what is") || message.includes("who is") || message.includes("what are")) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finaltext = "This is what i found on internet regarding" + message;
        speech.text = finaltext;
    }
    else if (message.includes("wikipedia")) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "+")}`, "_blank");
        const finaltext = "This is what i found on wikipedia regarding" + message;
        speech.text = finaltext;
    }
    else if (message.includes("time")) {
        const time = new Date().toLocaleString(undefined , {hour: "numeric" , minute: "numeric"} )
        const finaltext = time;
        speech.text = finaltext;
    }
    else if (message.includes("date")) {
        const date = new Date().toLocaleString(undefined , {month: "short" , day: "numeric"} )
        const finaltext = date;
        speech.text = finaltext;
    }
    else if (message.includes("open calculator")) {
        window.open('Calculator:///')
        const finaltext = "opening calculator";
        speech.text = finaltext;
    }
    else if (message.includes("close")) {
        window.close()
        const finaltext = "closing";
        speech.text = finaltext;
    }
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finaltext = "i found some information for" + message + "on google";
        speech.text = finaltext
    }
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech)
}
