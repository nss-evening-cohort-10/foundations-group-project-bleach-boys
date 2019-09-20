const memberInfo = [
    "When I was younger, I was obsessed with Pinky and the Brain. I even had a T-shirt collection. I also had one of those bowl haircuts, but I prefer to forget about that fact." , 
    "When I was younger, I wanted to be an archaeologist because of Indiana Jones." , 
    "I got really bad food poisoning when I was in Costa Rica. It was so bad that I had to be hospitalized for three days and put on a morphine drip." , 
    "I went to college to be a high school history teacher. I’m still technically certified to teach high school history." , 
    "I don’t play any sports nor know anything about them. I couldn’t think of anything more boring than going to a sporting event. In fact, I once fell asleep at a hockey match."
]

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

const bandMemberShow = (memberInfo) => {
    for (let i = 0; i < memberInfo.length; i++) {
        const oneBandMember = memberInfo[i];
        const stringDom = `
            <div class="soloInfo">
                <p>${oneBandMember[i]}</p>
            </div>`
            printToDom(stringDom, "info")
    }
}

const clearScreen = () => {
    document.getElementById("info").innerHTML = "";
}
const filter = (filteredMember) => {
    bandMemberShow(memberInfo.filter(function(member) {
        return pet.type === filteredMember;
    }));
}