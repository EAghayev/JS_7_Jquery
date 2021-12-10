$(function(){

    $('#list li').click(function(){
        $('#list li.active').removeClass('active')
        $(this).addClass('active')
    })

    $('#liCreateForm').submit(function(e){
        e.preventDefault()
        let val = $('[name="listText"]').val();

        let li = `<li class="list-group-item new">${val}</li>`;

        $('#list li.active').after(li)
        $('#list li.active').next().css('display','none')
        $('#list li.active').next().slideDown()

    })


    $(window).click(function(e){

        console.log($(e.target).nextAll())
    })

})

