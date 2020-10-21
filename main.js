function tinhnamnhuan(){
    let nam=Number(document.getElementById("nam").value)
    if (nam % 4 ==0){
        if(nam % 100 == 0){
            if (nam % 400 == 0){
                document.getElementById("traloi").innerText = nam + " " + "là năm nhuận"
            } else
            document.getElementById("traloi").innerText = nam + " " + "không là năm nhuận"
        } else
        document.getElementById("traloi").innerText = nam + " " + "là năm nhuận"
    } else
    document.getElementById("traloi").innerText = nam + " " + "là không là năm nhuận"
}