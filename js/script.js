// JS start

// 1st Example
function clickTheButton(){
    document.getElementById('changeText').innerHTML = "Text changed by clicking the button";
}

// 3rd example
function changeFontSize(){
    document.getElementById('changeFontSize').style.fontSize="50px";
}
// 4th example
function hideText(){
    document.getElementById('hideText').style.display="none";
}
// 5th example
function displayBlock(){
    document.getElementById('displayBlock').style.display="block";
}
// 6th example
function showAlert(){
    alert("You clicked the button for showing Alert!!!");
}
// 7th example
function printThePage(){
    print();
}
// 8th example
function showText(){
    document.getElementById('showText').style.display="block";
}
// 9th example
function showTextOne(){
    document.getElementsByClassName('showTextOne')[0].style.display="block";
}
// 10th example
function getBorder(){
    document.getElementsByClassName('getBorder')[0].style.border="2px solid green";
}
// 11th example
function changeImage(){
    document.getElementsByClassName('changeImage')[0].src="https://media.istockphoto.com/vectors/free-3d-speech-bubble-sign-vector-id1156404289";
}
// 12th example
function changeURL(){
    document.getElementsByClassName('changeURL')[0].href="https://www.google.com/";
}
// 13th example
function mouseOverChangeText(){
    document.getElementsByClassName('mouseOverChangeText')[0].innerHTML="Text changes on mouse over";
}
// 14th example
function mouseOutChangeText(){
    document.getElementsByClassName('mouseOutChangeText')[0].innerHTML="Text changes on mouse out";
}
// 15th example
function doubleClickChangeText(){
    document.getElementsByClassName('doubleClickChangeText')[0].innerHTML="Text changes on mouse double click";
}
// 16th example
function keyDownChangeText(){
    document.getElementsByClassName('keyDownChangeText')[0].innerHTML="Text changes on key down";
}
// 17th example
function keyPressChangeText(){
    document.getElementsByClassName('keyPressChangeText')[0].innerHTML="Text changes on key press";
}
// 18th example
function fadeOutTheText(){
    document.getElementsByClassName('fadeOutTheText')[0].style.transition="1s";
    document.getElementsByClassName('fadeOutTheText')[0].style.opacity=0;
}
// 19th example
function fadeInTheText(){
    document.getElementsByClassName('fadeInTheText')[0].style.transition="3s";
    document.getElementsByClassName('fadeInTheText')[0].style.opacity=1;
}
// 20th example
function fadeOutTheText1(){
    document.getElementsByClassName('fadeInOutTheText')[0].style.transition="1s";
    document.getElementsByClassName('fadeInOutTheText')[0].style.opacity=0;
}
function fadeInTheText1(){
    document.getElementsByClassName('fadeInOutTheText')[0].style.transition="3s";
    document.getElementsByClassName('fadeInOutTheText')[0].style.opacity=1;
}


// jQuery start
$(document).ready(function(){
    // 1st example
    $('#clickTheButton').click(function(){
        $('#changeText1').html("Text changed by clicking the button");
    });

    $('.head').click(function(){
        $('.content').slideToggle();
    });

    $('#changeFontSizes').click(function(){
        $('#changeFontSize1').css('font-size', '42px');
    });

    $('#hideTexts').click(function(){
        $('#hideText1').css('display','none');
    });

    $('#displayBlocks').click(function(){
        $('#displayBlock1').css('display','block');
    });

    $('#showAlert').click(function(){
        alert('You clicked the button for showing Alert!!!');
    });

    $('#printThePage').click(function(){
        print();
    });

    $('#showTexts').click(function(){
        $('#showText1').css('display','block');
    });

    $('.showText2').click(function(){
        $('.showText3').css('display','block');
    });

    $('.getBorder').click(function(){
        $('.getBorder1').css('border','1px solid red');
    });

    $('.changeImage').click(function(){
        $('.changeImage1').attr('src','https://media.istockphoto.com/vectors/free-3d-speech-bubble-sign-vector-id1156404289');
    });

    $('.changeURL').click(function(){
        $('.changeURL1').attr('href','https://www.google.com/');
    });

    $('.mouseOverChangeText').mouseover(function(){
        $('.mouseOverChangeText1').html('Text changes on mouse over');
    });

    $('.mouseOutChangeText').mouseout(function(){
        $('.mouseOutChangeText1').html('Text changes on mouse out');
    });

    $('.doubleClickChangeText').dblclick(function(){
        $('.doubleClickChangeText1').html('Text changes on mouse double click');
    });

    $('.keyDownChangeText').keydown(function(){
        $('.keyDownChangeText1').html('Text changes on key down');
    });

    $('.keyPressChangeText').keypress(function(){
        $('.keyPressChangeText1').html('Text changes on key press');
    });

    $('.fadeOutTheText2').click(function(){
        $('.fadeInOutTheText1').fadeOut('1s');
    });

    $('.fadeInTheText2').click(function(){
        $('.fadeInOutTheText1').fadeIn('3s');
    });

    $('.fadeInOutToggle').click(function(){
        $('.fadeInOutTheText1').fadeToggle('3s');
    });

});