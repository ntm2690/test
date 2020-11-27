
// n =Number(prompt('nhập số'));
// inputNumber  = Number(prompt('nhập sô'));
// function findOppositeNumber(n,inputNumber){
//     if( n<4 || n%2!=0 || n>20 || parseInt(n)!= n ){
//         console.log("n không phải số nguyên dương chẵn nằm trong khoảng từ 4 đến 20") 
//     }

//     else{
//         if(inputNumber > n){
//             console.log("inputNumber không được lớn hơn hoặc bằng n ") 
//         }
//         else{
//             if(inputNumber >= n/2){
//                 console.log(inputNumber-n/2) 
//             }
//             else
//                 console.log(n/2+inputNumber) 
//         }
//     }
// }



// 2
// function merge2String (s1,s2){
//     s1 =prompt("chuỗi 1");
//     s2 =prompt("chuỗi 2");
//     s1 = s1.split("")

//     s2=s2.split("")

//         let flag = true
//         let length=s1.length
//         let newString=""
//         if(s1.length>=s2.length){
//             length=s2.length
//             flag=false
//         }
//         for(i=0 ;i<length ; i++){
//             newString=newString+s1[i]+s2[i]
//         }
//         if(flag){
//             for(i=length;i<s2.length;i++){
//              newString=newString+s2[i]
//             }
//         }
//         else{ for(i=length;i<s1.length;i++){
//             newString=newString+s1[i]
//         }}
//         return newString
//     }
// console.log(merge2String())
// console.log(merge2String())
// console.log(merge2String())


function lucky(){
    let header = document.getElementById("header")
    let content = document.getElementById("content")
    let input = document.getElementById("input")
    let btn = document.getElementById("btn")
    let result = document.getElementById("ketqua").textContent
    let array = [1,2,3,4,5,6,7,8,9,10]
    let check = 0
    
    btn.addEventListener('click', function(){
        let inputValue = document.getElementById("input").value
        let arrayrandom = array[Math.floor(Math.random()*array.length)]
        
        if(inputValue<1 || inputValue>10 || isNaN(inputValue)){
            alert("nhập lại số từ 1 đến 10")
            document.getElementById("input").value = ""
            document.getElementById("ketqua").textContent="KẾT QUẢ"
        }

        else{

        if(inputValue != arrayrandom){
            document.getElementById("ketqua").textContent = `Sai rồi, kết quả là: `+arrayrandom
            check = check + 1
            if(check == 3){
                content.remove()
                header.insertAdjacentHTML('beforeend', `<div id="end">Bạn đã hết cơ hội, chúc may mắn lần sau</div>`)
            }
        }
        if(check==0) {document.getElementById("ketqua").textContent = "Chúc mừng bạn đã trúng thưởng"
        
    }
        document.getElementById("input").value = ""
        // console.log("kiemtra",kiemtra)
    }
    })
    
}

lucky()