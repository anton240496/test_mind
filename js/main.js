$(function () {

    $('.btnz').on('click', function(){
        $('.form').addClass('form_acive');
      });

      $('.close').on('click', function(){
        $('.form').removeClass('form_acive');
      });

      $('.menu_btn').on('click', function(){
        $('.header_menu_mobile').toggleClass('header_menu_mobile_acive');
      });


    $("body").change(function () {
        filename = this.files[0].name;
    });
    document.querySelector('form').addEventListener('change', function(){
        const o = this.querySelector('.inputa:invalid');
        this.querySelector('.disabled').classList.toggle('disabled_active', !o);
    })


    const fileInput = document.querySelector('input[type="file"]');

    $("form").change(function () {
        var el = document.getElementById('total');
        var i = 0;
        var s = ($("input:file", this)[i].files[0].size / 1024 / 1024).toFixed(2) + "";


        if (s > 5) {
            el.innerHTML =  `<div class="frm_text frm_text_r">Слишком большой объем файла(>5мб)</div>`
            $('.inputs').toggleClass('input_r');
            $('.disabled').removeClass('disabled_active');
            
            input.value = '';
        }

        var file = ($("input:file", this)[i].files.length);
        if (file == 1) {
            el.innerHTML = `<div class="frm_text"><img class="form_file" src="img/file.svg" alt="">
              <p> Загружен ` + file + " файл </P> </div>";
              $('.inputs').removeClass('input_r');
        } else if (file > 1 & file < 4) {
            el.innerHTML = `<div class="frm_text"><img class="form_file" src="img/file.svg" alt="">
              <p> Загружено ` + file + " файла </P> </div>";
              $('.inputs').removeClass('input_r');
        } else if (file > 3) {
            el.innerHTML = `<div class="frm_text frm_text_r">Нельзя загрузить больше 3 файлов</div>`
            $('.inputs').toggleClass('input_r');
            $('.disabled').removeClass('disabled_active');
            input.value = '';
        }
        var elems = document.getElementsByClassName('fill');
        var value = elems[0].value;

        if (!value.endsWith('.jpg') & !value.endsWith('.png')) {
            el.innerHTML = "<div class='frm_text frm_text_r'>Неправильный формат файла</div>"
            $('.inputs').toggleClass('input_r');
            $('.disabled').removeClass('disabled_active');
           
            input.value = '';
            return false;
        }


      
    });
   
    

//если в браузере не работет style scroll-behavior: smooth;
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


});