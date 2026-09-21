/* =========================================================
   PKFZ DIGITAL BUSINESS CARD
   CONTACT FUNCTION
========================================================= */


/* =========================================================
   SAVE CONTACT
========================================================= */

function saveContact() {

    const vCard = [
        "BEGIN:VCARD",
        "VERSION:3.0",

        "FN:Noor Syakira Binti Muhd Anuar",

        "N:Noor Syakira Binti Muhd Anuar;;;;",

        "ORG:Port Klang Free Zone (PKFZ)",

        "TITLE:Executive",

        "ROLE:Sales & Marketing Department",

        "TEL;TYPE=CELL:+60189744486",

        "TEL;TYPE=WORK:+60331015568",

        "EMAIL;TYPE=WORK:syakira@pkfz.com",

        "URL:https://ain-5y4f4.github.io/pkfz-nfc-business-card/",

        "NOTE:Sales & Marketing Department",

        "END:VCARD"
    ].join("\r\n");


    const blob = new Blob(
        [vCard],
        {
            type: "text/vcard;charset=utf-8"
        }
    );


    const url =
        URL.createObjectURL(blob);


    const downloadLink =
        document.createElement("a");


    downloadLink.href = url;


    downloadLink.download =
        "Noor-Syakira-Binti-Muhd-Anuar.vcf";


    document.body.appendChild(
        downloadLink
    );


    downloadLink.click();


    document.body.removeChild(
        downloadLink
    );


    setTimeout(
        function () {

            URL.revokeObjectURL(url);

        },
        1000
    );

}


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "PKFZ Digital Business Card loaded."
        );

    }
);
