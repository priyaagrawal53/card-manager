
console.log("Working");
/*
document.querySelector(".button").addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Clicked....")
    console.log(number.value, exp.value, cvv.value, cardname.value)
    let number = localStorage.getItem("number")
    console.log(number)
    if (number == null) {
        let json = []
        json.push({website: website.value, number: number.value, exp: exp.value, cvv: cvv.value, cardname: cardname.value  })
        alert("Password Saved");
        localStorage.setItem("number", JSON.stringify(json))
    }
    else {
        let json = JSON.parse(localStorage.getItem("number"))
       
        json.push({website: website.value, number: number.value, exp: exp.value, cvv: cvv.value, cardname: cardname.value  })
        alert("Password Saved");
        localStorage.setItem("number", JSON.stringify(json))
    }
   
})
*/


if(localStorage.getItem("number")!=null)
{
    
document.querySelector('.number').textContent = localStorage.getItem('number');
document.querySelector('.name').textContent = localStorage.getItem('cardname');
document.querySelector('.date').textContent = localStorage.getItem('exp');
document.querySelector('.signature i').textContent = localStorage.getItem('cvv');
 

    }
    else{
           
document.querySelector('.number').textContent = "XXXX XXXX XXXX XXXX";
document.querySelector('.name').textContent = "XXXXXX";
document.querySelector('.date').textContent = "XX / XX";
document.querySelector('.signature i').textContent = "XXX";
    }

//successfull add message
document.getElementById("addbutton").addEventListener("click", function(){
    alert("CARD SUCCESFULLY ADDED!");
});




document.getElementById('exit').addEventListener('click', function() {
    // Close the current browser window
    
    window.close();
    
});

function takevalue()
{   
    var number=document.getElementById("cc-number").value
    var exp=document.getElementById("cc-exp").value
    var cvv=document.getElementById("cc-cvc").value
   var cardname=document.getElementById("cardholder").value
    console.log(number,exp,cvv,cardname);
   
    
    localStorage.setItem("number", number)
    localStorage.setItem("exp", exp)
    localStorage.setItem("cvv", cvv)
    localStorage.setItem("cardname", cardname)

    alert("CARD ADDED SUCCESSFULLY")
   /* let n = localStorage.getItem("number")
    if (n == null) {
        let json = []
        let json1=[]
        let json2=[]
        let json3=[]
        json.push({website: website.value, number: number.value })
        json1.push({website: website.value, exp: exp.value})
        json2.push({website: website.value,cvv: cvv.value })
        json2.push({website: website.value,cardname: cardname.value  })

        alert("Password Saved");
        localStorage.setItem("number", JSON.stringify(json))
        localStorage.setItem("exp", JSON.stringify(json1))
        localStorage.setItem("cvv", JSON.stringify(json2))
        localStorage.setItem("card", JSON.stringify(json3))
    }
    else {
        let json = JSON.parse(localStorage.getItem("number"))
        let json1 = JSON.parse(localStorage.getItem("exp"))
        let json2 = JSON.parse(localStorage.getItem("cvv"))
        let json3 = JSON.parse(localStorage.getItem("cardname"))
       
        json.push({website: website.value, number: number.value })
        json1.push({website: website.value, exp: exp.value})
        json2.push({website: website.value,cvv: cvv.value })
        json2.push({website: website.value,cardname: cardname.value  })

        alert("Password Saved");
        localStorage.setItem("number", JSON.stringify(json))
        localStorage.setItem("exp", JSON.stringify(json1))
        localStorage.setItem("cvv", JSON.stringify(json2))
        localStorage.setItem("card", JSON.stringify(json3))
    }
    */
}

   function getnumber(){
    let num= localStorage.getItem("number")
    print(num)
   }

   function deletecard()
   {
    console.log("hello")
    localStorage.clear()
    console.log(localStorage)
    alert("your card has been deleted successfully")
   }

 
   


