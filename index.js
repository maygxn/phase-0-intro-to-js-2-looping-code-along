const names = ["Guadalupe", "Ollie", "Aki"]; 
    function writeCards(names, event) {
        const messages = []
        for (let i = 0; i < names.length; i++) {
            messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
            console.log(messages[i])
        }
        return messages;
    }
writeCards(names);

function countDown() {
    let countDown = 0
    while (countDown < 11) {
        console.log(countDown++);
    }
}