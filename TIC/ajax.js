const options = $(".options-faculite div");
options.map((index, option) => {
    option.addEventListener("click", (e) => {
        options.map((index1, option1) => {
            option1.classList.remove("active")
        })
        option.classList.add("active")
        console.log(option.id);
        if (option.id === "presentation") {
            $(".content-tice").load("./TIC/presentation.html")
            document.title="UPG - presentetion"
        }
        if (option.id === "condition") {
            $(".content-tice").load("./TIC/condtion.html")
            document.title="UPG - Conditions d'Admission"
        }
        if (option.id === "diplome") {
            $(".content-tice").load("./TIC/diplome.html")
            document.title="UPG - diplome a delivrer"
        }
        if (option.id === "resultant") {
            $(".content-tice").load("./TIC/resultant.html")
            document.title="UPG - resultant attendus"
        }

    })

});

window.addEventListener("load", () => $(".content-tice").load("./TIC/presentation.html"))