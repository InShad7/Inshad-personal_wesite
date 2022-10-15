


//----------------------Form validation-------------------------------------//

//     let checkname = false;
//     let checkemail = false;
//     let checkphone = false;
//     let checkmessage = false; 



//  function checkname1() {
//    let namevalue = $("#name").val()
//    let nameRegex = /^[a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
//    if (namevalue == "") {
//      $("#error1").html("Name is mandatory!")
//    }
//    else if(namevalue.length<3 || namevalue.length>20 ){
//      checkname = true
//      $("#error1").html("please enter valid name")
//    }
//    else if (namevalue.match(nameRegex)) {
//      checkname = true
//      $("#error1").html("")
//    }
//  } 

//  function checkemail1() {
//    let emailvalue = $("#email").val()
//    let emailRegex = /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
//    if (emailvalue == "") {
//      $("#error2").html("Email is mandatory!")
//    }
//    else if (emailvalue.match(emailRegex)) {
//      checkemail = true
//      $("#error2").html("")
//    }
//    else {
//      $("#error2").html("Invalid email!")
//      checkemail = false
//    }
//  }
//  $('#email').keypress(function( email ) {
//    if(email.which === 32) 
//    return false;
//    });



//  function checkphone1() {
//    let phonevalue = $("#phone").val()
//    let phoneRegex = /[0-9]{10}/;
//    let messageRegex = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
//    if (phonevalue == "") {
//      $("#error3").html("Mobile number is mandatory!")
//    }
//    else if (phonevalue.match(phoneRegex)) {
//      checkphone = true
//      $("#error3").html("")
//    }
//    else if(phonevalue.match(messageRegex)){
//      checkphone=false
//      $("#error3").html("please enter a valid mobile number")
//    }
//    else if(phonevalue.length==10){
//      checkphone = true
//      $("#error3").html("")
//    }
//    else{
//      $("#error3").html("please enter 10 digit number")
//      checkphone=false
//    }
//  }



//  function checkmessage1() {
//    let messagevalue = $("#exampleFormControlTextarea1").val()
//    let messageRegex = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
//    if (messagevalue == "") {
//      $("#error4").html("Enter Something!")
//    }
//    else if (messagevalue.match(messageRegex)) {
//      checkmessage = true
//      $("#error4").html("")
//    }
//    else {
//      $("#error4").html("")
//      checkmessage = false
//    }

//  }

//  $('#name').keypress(function(event){
//   if (
//       !event.key.match(/^[A-Za-z ]+$/) ||
//       (this.value.slice(-1) == ' ' && event.key == ' ')||
//       (this.value == '' && event.key == ' ')
//     ) {
//       event.preventDefault()
//     }
//    })


//  $(document).ready(function () {
//     $("#name").keyup(function () {
//      checkname1()
//     })

//     $("#email").keyup(function () {
//      checkemail1()
//     })

//     $("#phone").keyup(function () {
//      checkphone1()
//     })
//     $("#exampleFormControlTextarea1").keyup(function () {
//      checkmessage1()
//     })

//    });




// ------------------form validation---------------

function displayClick() {
    // checkname()
    function checkname() {


        let x = document.forms['myform']['fname'].value.trim();
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if (isNumberAtBeg(x) || x == "" || !isNaN(x) || specialChars.test(x)) {
            document.getElementById('label').style.display = 'block'
            return false
        }

        else {
            document.getElementById('label').style.display = 'none'
            return true
        }

    }




    function checkphone() {

        let number1 = document.forms['myform']['phone'].value.trim();
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        if (number1 == "" || number1 == null) {
            document.getElementById('label1').style.display = 'block'
            return false
        }
        else if (re.test(number1)) {
            document.getElementById('label1').style.display = 'none'
            return true
        }

    }


    function checkemail() {

        let mail = document.forms['myform']['email'].value.trim();
        // const spclChar =/^\w+([\.-]?\w+)*\w+([\.-]?\w+)*(\\w{2,3})+$/
        // var emailSign=/@/

        if (mail == "" || mail == null) {
            document.getElementById('label2').style.display = 'block'
            return false
        }
        else {
            if (ValidateEmail(mail)) {
                // alert("hhh")
                document.getElementById('label2').style.display = 'none'

                return true;
            }
            else {
                if (ValidateEmailSign(mail)) {
                    // alert("hhhh")
                    document.getElementById('label2').style.display = 'block'
                    return false
                } else {
                    document.getElementById('label2').style.display = 'block'
                    return false
                }

            }
        }


    }


    function checkmessage() {
        let msg = document.forms['myform']['message'].value.trim();
        if ((msg == null || msg == "") && msg <= 10) {
            // alert(msg)
            document.getElementById('label3').style.display = 'block'
            return false
        }
        else {
            // alert("hhhhhh")
            document.getElementById('label3').style.display = 'none'
            return true
        }
    }

    if (checkname() && checkphone() && checkemail() && checkmessage()) {
        return true
    } else {
        return false
    }




}


function isNumberAtBeg(s) {
    if (isNaN(s[0])) {
        return false;
    }
    else {
        return true;
    }
}
function ValidateEmail(mail) {
    const characters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (characters.test(mail)) {
        return true;
    } else {
        return false;
    }
}
function ValidateEmailSign(mail) {
    const characters = /@/;
    if (characters.test(mail)) {
        return true;
    } else {
        return false;
    }
}





//--------------------submit form-------------------------------//

$("#submit-form").submit((e) => {

    e.preventDefault()
    if (displayClick()) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbz9742KOn36HQVYRK0p8wStxecVygSv1jjP2VpJ9HvxRmb29jvMWkzkOV_NSuj7HlEYeQ/exec",
            data: $("#submit-form").serialize(),
            method: "post",

            success: function (response) {
                alert("Form submitted successfully!!!")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error: function (err) {
                alert("Something Error")
                console.log(err)

            }
        })

    }
    else {
        alert("Please fill!!!!")
        // checkname1()
        // checkphone1()
        // checkmessage1()
        // checkemail1()
        displayClick()

    }
}
)

