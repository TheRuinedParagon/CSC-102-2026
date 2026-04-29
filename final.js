let arrProblems = [
            ["Plane", "Final", "DBM100", "A plane I myself designed in CAD software. We launched it off the third floor of Founder's Hall."],
            ["Ring", "Assignment", "DBM150", "One of the first things I ever made in CAD. I am proud of this ring, and wear it daily."],
            ["Gloomtune.mp3", "Hobby", "NaN", "I made this song in my free time. I am just as proud of it as I am my actual class final projects."],
        ];

        // loop through the data and display it in the table
        for (let i=0; i<arrProblems.length; i++){
            // create a new table row
            let tr = document.createElement("tr");

            // inner/nested loop- we usually use j as the counter for nested loops
            for (let j=0; j < arrProblems[i].length; j++){
                // create a new table data - td tag
                let td = document.createElement("td");

                // set the data as the textContent value of the td
                td.textContent = arrProblems[i][j];

                // add the td to the tr
                tr.appendChild(td);
            }

            // add the table row to the table
            document.getElementById("tblData").appendChild(tr)
        }
        function pixilart(){
            document.getElementById("greeting").hidden = true;
            document.getElementById("pixInfo").hidden = false;
            document.getElementById("btnTcf").hidden = true;
            document.getElementById("btnPix").hidden = true;
            document.getElementById("btnAcc").hidden = true;
            document.getElementById("btnBack").hidden = false;
            document.getElementById("btnLink").hidden = false;
        }

        function terrariaForum(){
            document.getElementById("greeting").hidden = true;
            document.getElementById("tcfInfo").hidden = false;
            document.getElementById("btnTcf").hidden = true;
            document.getElementById("btnPix").hidden = true;
            document.getElementById("btnAcc").hidden = true;
            document.getElementById("btnBack").hidden = false;
            document.getElementById("btnLink").hidden = true;
            document.getElementById("btnLink2").hidden = false;
        }

        function accomplishments(){
            document.getElementById("greeting").hidden = true;
            document.getElementById("accInfo").hidden = false;
            document.getElementById("btnTcf").hidden = true;
            document.getElementById("btnPix").hidden = true;
            document.getElementById("btnBack").hidden = false;
            document.getElementById("btnAcc").hidden = true;
            document.getElementById("Ring").hidden = false;
            document.getElementById("Plane").hidden = false;
            document.getElementById("btnAddAudio").hidden = false;
            document.getElementById("divAudio").hidden = false;
            document.getElementById("tblData").hidden = false;
        }

        function goBack(){
            document.getElementById("greeting").hidden = false;
            document.getElementById("tcfInfo").hidden = true;
            document.getElementById("accInfo").hidden = true;
            document.getElementById("pixInfo").hidden = true;
            document.getElementById("btnTcf").hidden = false;
            document.getElementById("btnPix").hidden = false;
            document.getElementById("btnAcc").hidden = false;
            document.getElementById("btnBack").hidden = true;
            document.getElementById("btnLink").hidden = true;
            document.getElementById("btnLink2").hidden = true;
            document.getElementById("Ring").hidden = true;
            document.getElementById("Plane").hidden = true;
            document.getElementById("btnAddAudio").hidden = true;
            document.getElementById("divAudio").hidden = true;
            document.getElementById("tblData").hidden = true;
        }

        function redirectPIX(){

            window.location.href = "https://www.pixilart.com/teruinedparagon";
            return;
            }

        function redirectTCF(){

            window.location.href = "https://forums.terraria.org/index.php?members/theruinedparagon-zen.113444/";
            return;
            }
        
        function addAudio(){
        let divAudio = document.getElementById("divAudio");

        let audioElement = document.createElement("audio");

        audioElement.setAttribute("id", "myAudio");

        audioElement.setAttribute("src", "gloomtune.mp3");

        audioElement.setAttribute("controls", "controls");

        audioElement.volume = .75;

        divAudio.appendChild(audioElement);

        document.getElementById("btnAddAudio").hidden = true;
        }