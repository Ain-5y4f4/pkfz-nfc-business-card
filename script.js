/* =========================================
   DIGITAL BUSINESS CARD
   Noor Syakira Binti Muhd Anuar
========================================= */


/* =========================================
   SAVE CONTACT
========================================= */

function saveContact() {

    const contact = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "FN:Noor Syakira Binti Muhd Anuar",
        "N:Noor Syakira Binti Muhd Anuar;;;;",
        "ORG:PKFZ",
        "TITLE:Executive",
        "ROLE:Sales & Marketing Department",
        "TEL;TYPE=CELL:+60189744486",
        "TEL;TYPE=WORK:+60331015568",
        "EMAIL;TYPE=WORK:syakira@pkfz.com",
        "END:VCARD"
    ].join("\r\n");


    const blob = new Blob(
        [contact],
        {
            type: "text/vcard;charset=utf-8"
        }
    );


    const url = URL.createObjectURL(blob);


    const link = document.createElement("a");

    link.href = url;

    link.download =
        "Noor-Syakira-Binti-Muhd-Anuar.vcf";


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);


    URL.revokeObjectURL(url);
}


/* =========================================
   PAGE LOADED
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Digital Business Card loaded successfully."
        );

    }
);
