const memberInfo = [
    {
        info: "When I was younger, I was obsessed with Pinky and the Brain. I even had a T-shirt collection. I also had one of those bowl haircuts, but I prefer to forget about that fact." , 
        name: "Matt"
    },
    {
        info: "When I was younger, I wanted to be an archaeologist because of Indiana Jones." , 
        name: "Rocket", 
    },
    {
        info: "I got really bad food poisoning when I was in Costa Rica. It was so bad that I had to be hospitalized for three days and put on a morphine drip.", 
        name: "Mark",
    },
    {
        info: "I went to college to be a high school history teacher. I’m still technically certified to teach high school history.", 
        name: "Phnuff",
    },
    {
        info: "I don’t play any sports nor know anything about them. I couldn’t think of anything more boring than going to a sporting event. In fact, I once fell asleep at a hockey match.",
        name: "Jon"
    }
]

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
}

const bandMemberShow = (memberInfo) => {
    let stringDom = "";
    for (let i = 0; i < memberInfo.length; i++) {
        const oneBandMember = memberInfo[i];
        stringDom += `
            <div class="soloInfo jumbotron text-center">
                <p>${oneBandMember.info}</p>
            </div>`
            printToDom(stringDom, "info")
    }
}

const clearScreen = () => {
    document.getElementById("info").innerHTML = "";
}
const filter = (filteredMember) => {
    bandMemberShow(memberInfo.filter(function(member) {
        return member.name === filteredMember;
    }));
}

const Matt = document.getElementById("MattInfo");

Matt.addEventListener(`click`, function() {
    clearScreen();
    filter("Matt");
} )

const Rocket = document.getElementById("RocketInfo");

Rocket.addEventListener(`click`, function() {
    clearScreen();
    filter("Rocket");
} )

const Mark = document.getElementById("MarkInfo");

Mark.addEventListener(`click`, function() {
    clearScreen();
    filter("Mark");
} )

const Phnuff = document.getElementById("PhnuffInfo");

Phnuff.addEventListener(`click`, function() {
    clearScreen();
    filter("Phnuff");
} )

const Jon = document.getElementById("JonInfo");

Jon.addEventListener(`click`, function() {
    clearScreen();
    filter("Jon");
} )