/* переменные для счета*/
let myScore = 0;
let pcScore = 0;

/*Выделение вокруг элементов*/
let img = document.querySelectorAll(".pink");
for(let i = 0; i < img.length; i++){          //при наведении
    img[i].onmouseover = function(event){ 
    let target = event.target; 
    target.style.backgroundColor = 'pink'; 
    } 
    } 
    
    for(let i = 0; i < img.length; i++){      //без наведения
    img[i].onmouseout = function(event){ 
    let target = event.target; 
    target.style.backgroundColor = 'transparent'; 
    } 
    }

/*вывод выбора игрока */
 $('.ssp li').each(function(){
    $(this).on('click', function(){
        $('.result li:eq(0)').first().find('p').text($(this).find('p').text());
        /*вывод выбора компьютера */
        switch (Math.floor(Math.random()*3)){
            case 0: $('.result li').last().find('p').text('камень');break;
            case 1: $('.result li').last().find('p').text('ножницы');break;
            case 2: $('.result li').last().find('p').text('бумага');break;
        }
        /*сравнение результатов и определение победителя */
        if($('.result li').first().find('p').text() == $('.result li').last().find('p').text()){ 
             $('.total').last().find('p').text('ничья'); 
           /*проверка на выигрышь */
            } else if ($('.result li').first().find('p').text() == 'бумага' && $('.result li').last().first().find('p').text() == 'камень' || $('.result li').first().find('p').text() == 'камень' && $('.result li').last().find('p').text() == 'ножницы' || $('.result li').first().find('p').text() == 'ножницы' && $('.result li').last().find('p').text() == 'бумага'){
            
            $('.total').last().find('p').text('вы выиграли C:'); 
            
            $('.My').text(++myScore); 
        } else {
            $('.total').last().find('p').text('вы проиграли :C'); 
            $('.PC').text(++pcScore); 
        }
    });
});
