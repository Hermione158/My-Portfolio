$("document").ready(function(){
    $("#title").text("JQueryy")

    //$("p:last").css("color", "white")

    $("#btn").click(function(){
    $(this).css("background", "black")
    $("#output").text("You Click the Button!")
    })

    $(".btn2").dblclick(function(){
    $(this).css("background", "blue")
    $("#output").text("You DoubleClick the Button!")
    })

    $(".btn2").mouseenter(function(){
        $("#output").text("Your mouse reach the button")
    })

    $(".btn2").mouseleave(function(){
        $("#output").text("Your mouse leave the button")
    })

    $(".btn2").mousedown(function(){
        $("#output").text("You Hold the Button")
        $("#output").css("background", "white")
    })

    $(".btn2").mouseup(function(){
        $("#output").text("You Release the Button")
        $("#output").css("background", "lightblue")
    })

    $("#name").focus(function(){
        $("#output").text("Typing...")
         $(this).css("background", "lightblue")
    })

    $("#name").blur(function(){
        $("#output").text("Output")
        $(this).css("background", "white")
    })

    $("#course").change(function(){
        $("#output").text($(this).val())
    })

    $(".btn3").click(function(){
        $("#table").hide()
    })

    $(".btn4").click(function(){
        $("#table").show()
    })
})

//  $("ul li:first-child").css("color", "white")
//     })
//         $("[href]").css("color", "black")

//     $("tr:odd").css("background", "lightblue")
//     $("tr:even").css("background", "lightgreen")