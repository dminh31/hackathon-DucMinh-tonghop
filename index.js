let cards = [];
let flag = true;
function addCard() {
    let input1 = document.getElementById("input1").value
    let input2 = document.getElementById("input2").value
    let input3 = document.getElementById("input3").value
    let cardInfor = {
        card:input1,
        date:input2,
        cvv:input3,
        id:id(),
    }
    if (flag) {
        cards.push(cardInfor);
        showCard(cards);
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        document.getElementById("input3").value = "";

    }else{
        cardInfor={
            card:input1,
            date:input2,
            cvv:input3,
            id:idUpdate,
        }
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].id == idUpdate) {
                cards.splice(i,1,cardInfor)
                showCard(cards);
                flag=true;
                document.getElementById("input1").value = "";
                document.getElementById("input2").value = "";
                document.getElementById("input3").value = "";
            }
            
        }
    }

}
function id() {
    return Math.floor(Math.random() * 999999) + new Date().getMilliseconds();}

function showCard(listCard) {
    let text = "";
    for (let i = 0; i < listCard.length; i++) {
        text +=
            `
                <tr> 
                    <td> 
                        <img class="img1" src="./image/mastercard.jpg" alt="">
                    </td>
                    <td> ${listCard[i].card}</td>
                    <td> ${listCard[i].date} </td>
                    <td> ${listCard[i].cvv}</td>
                    <td>
                        <button>View</button>
                        <button onclick=editCard(${listCard[i].id})>Edit</button>
                        <button onclick=deleteCard(${listCard[i].id})>Delele</button>
                    </td>
                </tr>
            `
    }
    document.getElementById("body").innerHTML = text;
}
function deleteCard(id) {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].id == id) {
            cards.splice(i,1);
            showCard(cards)

        }
    }
}
function editCard(id) {
    flag = false;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].id == id) {
            document.getElementById("input1").value = cards[i].card;
            document.getElementById("input2").value = cards[i].date;
            document.getElementById("input3").value = cards[i].cvv;
            idUpdate = cards[i].id;
        }
    }
}