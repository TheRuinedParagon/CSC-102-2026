// this funciton will add an audio element to the page so we can listen to a sound clip
        function addAudio(){
        let divAudio = document.getElementById("divAudio");

        // create an audio HTML element using JavaScript
        let audioElement = document.createElement("audio");
        // set the attributes of the HTML element
        // add an ID so we can more easily work with this element.
        audioElement.setAttribute("id", "myAudio");

        // add the file name as the source
        // if you use the provided sound file, your code will look like this:
        // audioElement.setAttribute("src","Crisp_Ocean_Waves-Mike-Koenig-1486046376.mp3");
        audioElement.setAttribute("src", "gloomtune.mp3");

        // highly suggested - add controls 
        audioElement.setAttribute("controls", "controls");

        // set the volume to 3/4ths the limit by default.
        audioElement.volume = .75;

        // add our new HTML audio element to the div that will host it
        divAudio.appendChild(audioElement);

        // disallow the user from clicking the add audio button now that the audio has been added to teh page
        document.getElementById("btnAddAudio").hidden = true;

        // make the play and pause buttons appear
        document.getElementById("btnPlayAudio").hidden = false;
        document.getElementById("btnPauseAudio").hidden = false;
        }

        // create the function so that we can play the audio
        function playAudio(){
            // create a shortcut/nickname to the audio element that we created in the addAudio function
            let myAudio = document.getElementById("myAudio");
            // let's play the sound.
            myAudio.play();
        }
        // create the pause function to pause the audio.
        function pauseAudio(){
            // pause the sound.
            myAudio.pause();
        }