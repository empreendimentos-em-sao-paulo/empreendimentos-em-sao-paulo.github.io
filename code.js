var contentObject;

function start()
{
    contentObject = document.getElementById( "content" );
    
    loadIndexContent();
}

function loadIndexContent()
{
    var header = "<h2 style=\"text-align: center;\">Empreendimento Ânima Osasco - Breve Lançamento!</h2>";
    
    var text = "<p><ul>";
    text += "<li>apartamentos de 1 e 2 dormitórios, sendo que os de 2 possuem churrasqueira na varanda</li>";
    text += "<li>1 vaga de garagem livre e coberta</li>";
    text += "<li>lavanderia coletiva</li>";
    text += "<li style=\"font-style: italic;\">Pay Per Use</li>";
    text += "<li>lazer completo</li>";
    text += "<li>a 300 metros da estação da CPTM</li>";
    text += "<li>a partir de R$ 175.900,00</li>";
    text += "<li>torre única, com um total de 104 unidades</li>";
    text += "<li>2 elevadores</li>";
    text += "<li>dimensões do apartamento de 1 dormitório: 30 m²</li>";
    text += "<li>dimensões do apartamento de 2 dormitórios: 42 m²</li>";
    text += "</ul></p>";
    
    var contactInfo = "<p>Contatos: <br>corretora Lina: <span style=\"text-decoration: underline;\">linakcorretora@gmail.com</span> - celular: 11-982459378 (WhatsApp)";
    contactInfo += "<br>corretor Edval: <span style=\"text-decoration: underline;\">edval.corretor@gmail.com</span></p>";
    
    var images = "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"anima01.jpg\" alt=\"anima_imagem_01\"></p>";
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"anima02.jpg\" alt=\"anima_imagem_02\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"anima03.jpg\" alt=\"anima_imagem_03\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"anima04.jpg\" alt=\"anima_imagem_04\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"anima05.jpg\" alt=\"anima_imagem_05\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"anima06.jpg\" alt=\"anima_imagem_06\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"anima07.jpg\" alt=\"anima_imagem_07\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"anima08.jpg\" alt=\"anima_imagem_08\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"anima09.jpg\" alt=\"anima_imagem_09\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"anima10.jpg\" alt=\"anima_imagem_10\"></p>"
    
    contentObject.innerHTML = header + text + contactInfo + images;
}

function loadAquaticaContent()
{
    var header = "<h2 style=\"text-align: center;\">Empreendimento Aquática Osasco - 90% vendido!</h2>";
    
    var text = "<p><ul>";
    text += "<li>disponíveis apartamentos de 1 dormitório (é necessário entrar na fila para os de 2 dormitórios)</li>";
    text += "<li>lazer completo</li>";
    text += "<li>lavanderia</li>";
    text += "<li style=\"font-style: italic;\">Car Wash</li>";
    text += "<li>preço do apartamento de 1 dormitório: a partir de R$ 142.900,00</li>";
    text += "<li>preço do apartamento de 2 dormitórios: a partir de R$ 179.900,00</li>";
    text += "<li>1 vaga de garagem livre e coberta</li>";
    text += "</ul></p>";
    
    var contactInfo = "<p>Contatos: <br>corretora Lina: <span style=\"text-decoration: underline;\">linakcorretora@gmail.com</span> - celular: 11-982459378 (WhatsApp)";
    contactInfo += "<br>corretor Edval: <span style=\"text-decoration: underline;\">edval.corretor@gmail.com</span></p>";
    
    var images = "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"aquatica01.png\" alt=\"aquatica_imagem_01\"></p>";
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"aquatica02.png\" alt=\"aquatica_imagem_02\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"aquatica03.png\" alt=\"aquatica_imagem_03\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"aquatica04.png\" alt=\"aquatica_imagem_04\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"aquatica05.png\" alt=\"aquatica_imagem_05\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"aquatica06.png\" alt=\"aquatica_imagem_06\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"aquatica07.png\" alt=\"aquatica_imagem_07\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"aquatica08.png\" alt=\"aquatica_imagem_08\"></p>"
    
    contentObject.innerHTML = header + text + contactInfo + images;
}

function loadTangaraContent()
{
    var header = "<h2 style=\"text-align: center;\">Empreendimento Tangará Cotia - breve lançamento - unidades a partir de R$ 129.900,00</h2>";
    
    var text = "<p><ul>";
    text += "<li>1 vaga coberta e livre</li>";
    text += "<li>lazer completo</li>";
    text += "<li>portaria</li>";
    text += "<li>centro comercial</li>";
    text += "<li><span tyle=\"font-style: italic;\">hall</span> social</li>";
    text += "<li>pista de <span tyle=\"font-style: italic;\">cooper</span></li>";
    text += "<li>salão de festas</li>";
    text += "<li>espaço de convivência</li>";
    text += "<li>churrasqueira</li>";
    text += "<li><span tyle=\"font-style: italic;\">playground</span></li>";
    text += "<li><span tyle=\"font-style: italic;\">solarium</span></li>";
    text += "<li><span tyle=\"font-style: italic;\">deck</span></li>";
    text += "<li>piscinas adulto e final</li>";
    text += "<li>campo gramado</li>";
    text += "<li>academia ao ar livre</li>";
    text += "</ul></p>";
    
    var contactInfo = "<p>Contatos: <br>corretora Lina: <span style=\"text-decoration: underline;\">linakcorretora@gmail.com</span> - celular: 11-982459378 (WhatsApp)";
    contactInfo += "<br>corretor Edval: <span style=\"text-decoration: underline;\">edval.corretor@gmail.com</span></p>";
    
    var images = "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara01.jpg\" alt=\"tangara_imagem_01\"></p>";
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara02.jpg\" alt=\"tangara_imagem_02\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara03.jpg\" alt=\"tangara_imagem_03\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara04.jpg\" alt=\"tangara_imagem_04\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara05.jpg\" alt=\"tangara_imagem_05\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara06.jpg\" alt=\"tangara_imagem_06\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara07.jpg\" alt=\"tangara_imagem_07\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara08.jpg\" alt=\"tangara_imagem_08\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara09.jpg\" alt=\"tangara_imagem_09\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara10.jpg\" alt=\"tangara_imagem_10\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara11.jpg\" alt=\"tangara_imagem_11\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara12.jpg\" alt=\"tangara_imagem_12\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara13.jpg\" alt=\"tangara_imagem_13\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara14.jpg\" alt=\"tangara_imagem_14\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara15.jpg\" alt=\"tangara_imagem_15\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara16.jpg\" alt=\"tangara_imagem_16\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara17.jpg\" alt=\"tangara_imagem_17\"></p>"
    images += "<p><img class=\"image\" style=\"display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;\" src=\"tangara18.jpg\" alt=\"tangara_imagem_18\"></p>"
    
    contentObject.innerHTML = header + text + contactInfo + images;
}

function loadContactForm()
{
    contentObject.innerHTML = "<iframe style=\"max-width: 100%; display: block; margin: 0 auto; width: 100%;\" src=\"https://docs.google.com/forms/d/1bjfhzMkzZo2tGkdUE4bivstvyNDQSA5APBjHbyu5xi8/viewform?embedded=true\" width=\"760\" height=\"900\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Carregando…</iframe>";
}