let tarolo = [
    {id: "Hétfő 19",diakok:"Kovács Anna;Nagy Péter;Szabó;Eszter;Tóth Gergő;Horváth Viktória;Kiss Máté;Molnár Zsófia;Varga Bence;Farkas Ágnes;Takács Dániel;Papp Luca;Balázs Levente;Simon Kinga;Fekete Gábor;Török Emese"},
    {id: "Hétfő 21",diakok:"Kovács Ádám;Nagy Katalin,Szabó János;Tóth Zsuzsanna;Horváth István;Kiss Réka;Molnár László;Varga Judit;Farkas Gergely;Takács Szilvia"},
    {id: "Hétfő 22",diakok:"Kovács Dávid;Nagy Zoltán;Szabó Petra;Tóth András;Horváth Katalin;Kiss Áron;Molnár Orsolya;Varga Gábor;Farkas Anna;Takács Balázs;Papp Adrienn;Balázs Norbert"},
    {id: "Kedd 19",diakok:"Kovács Gergő;Nagy Éva;Szabó Bence;Tóth Réka;Horváth Péter;Kiss Anita;Molnár Levente;Varga Anna;Farkas Gábor;Takács Szilvia;Papp Dániel;Balázs Eszter;Simon Tamás;Török Zsuzsanna"},
    {id: "Kedd 21",diakok:"Tóth Zsuzsanna;Horváth István;Kiss Réka;Molnár László;Varga Judit;Kiss Anita;Molnár Levente,Varga Anna;Farkas Gábor;Takács Szilvia;Papp Dániel;Balázs Eszter"},
    {id: "Kedd 22",diakok:"Nagy Katalin;Szabó János;Tóth Zsuzsanna;Horváth István;Kiss Réka;Molnár Orsolya;Varga Gábor;Farkas Anna;Takács Balázs;Papp Adrienn;Balázs Norbert"},
    {id: "Szerda 19",diakok:"Molnár Levente;Varga Anna;Farkas Gábor;Takács Szilvia;Papp Dániel;Balázs Eszter;Kovács Anna;Nagy Péter;Szabó Eszter;Tóth Gergő;Horváth Viktória;Kiss Máté;Molnár Zsófia;Varga Bence"},
    {id: "Szerda 21",diakok:"Kovács Anna;Nagy Péter;Szabó Eszter;Tóth Gergő;Horváth Viktória;Kiss Máté;Molnár Zsófia;Varga Bence;Nagy Katalin;Szabó János;Tóth Zsuzsanna;Horváth István;Kiss Réka"},
    {id: "Szerda 22",diakok:"Molnár Levente;Varga Anna;Farkas Gábor;Takács Szilvia;Papp Dániel;Balázs Eszter;Nagy Katalin;Szabó János;Tóth Zsuzsanna;Horváth István;Kiss Réka"}
]
let megjelenito = document.getElementById("megejelnites");

let termek = document.querySelectorAll(".termek").forEach(x => {
    x.addEventListener("click", (x) => {
        megjelenito.innerHTML = "";

        megjelenito.style.backgroundColor = "forestgreen";

        let nap = x.target.parentElement.id;

        let terem = x.target.innerHTML.split(" ")[1];

        let keresett = tarolo.filter(x => x.id == `${nap} ${terem}`);

        let keresettDiakok = keresett.find(x => x).diakok.split(";");

        for (let index = 0; index < keresettDiakok.length; index++) {
            let sor = document.createElement("div");
            sor.innerHTML = keresettDiakok[index];
            megjelenito.appendChild(sor);
        }
    });
});

