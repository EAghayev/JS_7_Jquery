$(function(){


    let listNative = document.getElementById('list')

    document.querySelectorAll('#list li').forEach(element => {
        element.addEventListener('click',function(){
            // console.log("li clicked in native")
        })
    });

    console.log(listNative)
    let list = $('#list')
    console.log(list)


    $('#list li').click(function(){
        console.log("li clicked")
    })
    

    $('#list .title').click(function(){
        console.log("li:  "+$(this).parent())
        $('#list .text').slideUp('slow')
        $(this).next().slideDown('slow')
    })


    $('#startBtn').click(function(){
        $('.box').slideToggle('3000')
    })

    $('#stopBtn').click(function(){
        $('.box').stop();
    })

})