$(document).ready(function() {
    
    $("#carrossel-imagens").slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#sobre-menu').click(function(){
        $('nav').slideUp();
        $('#about').show();
    })
    $('#destaque-menu').click(function(){
        $('nav').slideUp();
        $('#about').show();
    })
    $('#promocoes-menu').click(function(){
        $('nav').slideUp();
        $('#promocoes').show();
    })
    $('#contato-menu').click(function(){
        $('nav').slideUp();
        $('#contato').show();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            veiculoInteresse: {
                required: true,
            },
            mensagem: {
                required: false,
            }
            
        },
        messages: {
            nome: 'Por favor, digite seu nome',
            email: 'Por favor, digite seu e-mail',
            telefone: 'Por favor, digite seu telefone',
            veiculoInteresse: 'Por favor, informe qual veículo tem interesse',
        },
        // Função para lidar com o evento de submit do formulário
        submitHandler: function(form){
            $('#success').slideToggle();
            // enviar formulário - mensagem de sucesso ou limpar o form
        },
        // Função para lidar com campos inválidos
        invalidHandler: function(evento, validador){
            // Retorna a quantidade de campos inválidos
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato')

        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculoInteresse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 300)
    })
})