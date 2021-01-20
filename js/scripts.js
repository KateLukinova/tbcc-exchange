
$( document ).ready(function() {

    $(".menu-icon").click(function () {
        $('.head-container').addClass('show')
    });

    $(".menu-close").click(function () {
        $('.head-container').removeClass('show')
    });

    $('.contact-form').on('submit', function (e) {

        e.preventDefault();

        $.ajax({
            type: 'post',
            url: 'form_processing.php',
            data: $('form').serialize(),
            success: function () {
                $('.form-button').addClass('active').text('Thank you')
            }
        });
    });

    $('#lang-select').select2().val(localStorage.getItem('todoLang')).trigger("change");
    $('#lang-select-footer').select2().val(localStorage.getItem('todoLang')).trigger("change");


    var dictionary = {
        EN: {
            menuItemOne: 'Markets',
            menuItemTwo: 'Listing',
            menuItemThree: 'Team',
            menuItemFour: 'Contact',
            menuItemFive: 'Sign In',
            menuItemSix: 'Register',
            mainH1: 'The world’s next-gen cryptocurrency exchange',
            mainPBlockOne: 'Professional crypto services for corporate and institutional-grade crypto traders, with the security and transparency of a regulated crypto powerhouse',
            buttonTextOne: 'Register Now',
            mainSpanOne: 'Announcement about Mobile app updates',
            mainSpanTwo: 'More',
            mainH2One: 'Why TBCC Exchange?',
            mainH3One: 'Security',
            mainH3Two: 'Liquidity',
            mainH3Three: 'Easy to use',
            mainPBlockTwo: 'The extra modern security system Binance Cloud is responsible for the security of all operations. We use the most secure technologies along with the protection of your personal information. While using our exchange, you can be sure that all your savings and personal information will remain confidential.',
            mainPBlockThree: 'Our exchange is powered by Binance Cloud and offers its users one of the largest liquidity pools in the world. Register on our exchange and trade the best and leading digital assets in the world.',
            mainPBlockFour: 'We offer our users to use the advanced exchange, created so that any user, even a beginner, can easily trade their crypto assets without experiencing discomfort or misunderstanding during transactions. We made our exchange as simple and easy to use as possible.',
            mainH2Two: 'Join TBCC Exchange ',
            mainPBlockFive: 'Trade cryptocurrency anywhere in the world at any time using our exchange. Our easy-to-use interface will help you make your work with cryptocurrency as convenient as possible',
            footerH2: 'Buy and trade leading cryptocurrencies on an innovative high-tech next-gen exchange.',
            buttonTextTwo: 'Register Free',
            buttonTextThree: 'Trade Now',
            footerPOne: 'TBCC Exchange is a leading cryptocurrency trading platform in the world with the largest liquidity pool powered by Binance Cloud. Email : support@tbcc.exchange. © TBCC Labs Copyright 2020',
            footerPTwo: 'Email : support@tbcc.exchange. © TBCC Labs Copyright 2020',
            footerItemOne: 'About',
            footerItemTwo: 'Announcement',
            footerItemThree: 'Contacts',
            footerItemFour: 'Fees',
            footerItemFive: 'Terms and Conditions',
            footerItemSix: 'Privacy Policy',
            footerItemSeven: 'Products',
            footerItemEight: 'Exchange',
            footerItemNine: 'Markets',
            footerItemTen: 'Referral Program',
            footerItemEleven: 'TBCC token',
            footerItemTwelve: 'Support',
            footerItemThirteen: 'FAQ',
            footerItemFourteen: 'API Documentation',
            footerItemFifteen: 'Listing Application',
            footerItemSixteen: 'Compliance Request',
            footerItemSeventeen: 'Compliance Request',
            teamH2One: 'Mission',
            teamPBlockOne:' TBCC Exchange is built on a commitment to making cryptoasset trading as easy and secure as possible for users around the world. We want our users to be able to harness the full potential of digital assets and use them with maximum convenience and benefit. With the creation of the TBCC Exchange, we want to increase the number of users around the world who use crypto assets around the world. The safety of your assets is a priority for us, so we made the service as safe as possible for our users so that they can be sure of the safety of their funds and to help them not to worry about their savings while making transactions with cryptocurrency. \n',
            teamPBlockTwo: 'We want TBCC Exchange to be the most advanced and popular cryptocurrency exchange in the world.',
            teamH2Two: 'Story',
            teamPBlockThree: 'TBCC Exchange was created in 2020 in collaboration with Binance Cloud. A team of professionals with extensive experience in the field of blockchain have put all their efforts and knowledge to create the exchange with the aim of making it the leading trading platform of the world level.',
            teamH2Three: 'Meet Our Team ',
            teamNameOne: 'Anatoly Aleksandrovsky',
            teamPositionOne: 'Chief Executive Officer',
            teamNameTwo: 'Evgeny Butyaev',
            teamPositionTwo: 'Chief Technology Officer',
            teamNameThree: 'Maria Bulanaeva',
            teamPositionThree: 'Chief Marketing Officer',
            listingH2One: 'Asset Listing Application',
            listingPBlockOne: 'Please complete the following form if you would like your asset to be listed on the TBCC Exchange.',
            listingLabelOne: 'Email address *',
            listingLabelTwo: 'What is your name and role in the project?*',
            listingLabelThree: 'What is the name of your project? *',
            listingLabelFour: 'What is the purpose of your project? *',
            listingLabelFive: 'Are you an authorized contact for this project submission? *',
            listingLabelSix: 'What is the name of your token?',
            listingLabelSeven: '[Must be an official company email] *',
            listingLabelEight: 'What is the token symbol? *',
            listingLabelNine: 'What is the name of your token?',
            listingButton: 'Next',
        },
        RU: {
            menuItemOne: 'Рынки',
            menuItemTwo: 'Листинг',
            menuItemThree: 'Команда',
            menuItemFour: 'Контакт',
            menuItemFive: 'Войти',
            menuItemSix: 'Зарегистрироваться',
            mainH1: 'Новое поколение в мире обмена криптовалют',
            mainPBlockOne: 'Профессиональные криптосервисы для криптотрейдеров корпоративного и институционального уровня с безопасностью и прозрачностью регулируемого криптографического центра',
            buttonTextOne: 'Зарегистрироваться сейчас',
            mainSpanOne: 'Объявление об обновлениях мобильного приложения',
            mainSpanTwo: 'Больше',
            mainH2One: 'Почему TBCC Exchange?',
            mainH3One: 'Безопасность',
            mainH3Two: 'Ликвидность',
            mainH3Three: 'Легкая в использовании',
            mainPBlockTwo: 'За безопасность всех операций отвечает супер современная система безопасности Binance Cloud. Мы применяем максимально защищенные технологии наряду с защитой вашей персональной информации. Используя нашу биржу, вы можете быть уверены, что все ваши сбережения и личная информация останется конфиденциальной. ',
            mainPBlockThree: 'Наша биржа работает на базе Binance Cloud, и предлагает своим пользователям один из крупнейших пулов ликвидности в мире. Регистрируйтесь на нашей бирже и торгуйте лучшими и ведущими цифровыми активами в мире.',
            mainPBlockFour: 'Мы предлагаем нашим пользователям использовать передовую биржу, созданную для того, чтобы любой пользователь, даже новичок смог с легкостью торговать своими криптоактивами не испытывая дискомфорт или непонимание во время выполнения операций. Мы сделали нашу биржу максимально простой и легкой в использовании.',
            mainH2Two: 'Присоединиться к TBCC Exchange ',
            mainPBlockFive: 'Торгуйте криптовалютой в любом месте планеты в любое время при помощи нашей биржи. Наш легкий и понятный в использовании интерфейс поможет вам сделать вашу работу с криптовалютой максимально удобной.',
            footerH2: 'Покупайте и торгуйте ведущими криптовалютами на инновационной высокотехнологичной бирже нового поколения.',
            buttonTextTwo: 'Зарегистрироваться бесплатно',
            buttonTextThree: 'Торговать сейчас',
            footerPOne: 'TBCC Exchange - ведущая платформа для торговли криптовалютами в мире с крупнейшим пулом ликвидности на базе Binance Cloud. Электронная почта: support@tbcc.exchange. © TBCC Labs Авторские права 2020',
            footerPTwo: 'Электронная почта: support@tbcc.exchange. © TBCC Labs Авторские права 2020',
            footerItemOne: 'О нас',
            footerItemTwo: 'Объявления',
            footerItemThree: 'Контакты',
            footerItemFour: 'Сборы',
            footerItemFive: 'Условия и положения',
            footerItemSix: 'Политика конфиденциальности',
            footerItemSeven: 'Продукты',
            footerItemEight: 'Биржа',
            footerItemNine: 'Рынки',
            footerItemTen: 'Реферальная программа',
            footerItemEleven: 'TBCC токен',
            footerItemTwelve: 'Поддержка',
            footerItemThirteen: 'FAQ',
            footerItemFourteen: 'Документация по API',
            footerItemFifteen: 'Заявка на листинг',
            footerItemSixteen: 'Запрос соответствия',
            footerItemSeventeen: 'Сообщество',
            teamH2One: 'Миссия',
            teamPBlockOne:' TBCC Exchange построена на стремлении сделать торговлю криптоактивами максимально простой и безопастной для пользователей со всего мира. Мы хотим, чтобы наши пользователи могли использовать весь потенциал цифровых активов и использовать их с максимальным удобством и выгодой. Благодаря созданию биржи TBCC Exchange мы хотим увеличить количество пользователей по всему миру, которые пользуются крипто активами по всему миру. Безопасность ваших активов является приоритетом для нас, поэтому мы сделали сервис максимально безопасным для наших пользователей, чтобы они могли быть уверены в сохранности своих средств и не переживали о своих сбережениях во время совершения операций с криптовалютой. ',
            teamPBlockTwo: 'Мы хотим, чтобы TBCC Exchange стала самой передовой и популярной криптовалютной биржей во всем мире.',
            teamH2Two: 'История',
            teamPBlockThree: 'TBCC Exchange была создана в 2020 году в сотрудничестве с Binance Cloud. Команда профессионалов, с большим опытом в области блокчейн, приложила все свои усилия и знания для того, создавала биржу, с целью сделать ее ведущей торговой платформой мирового уровня.',
            teamH2Three: 'Встречайте нашу команду',
            teamNameOne: 'Анатолий Александровский',
            teamPositionOne: 'Генеральный директор',
            teamNameTwo: 'Евгений Бутяев',
            teamPositionTwo: 'Технический директор',
            teamNameThree: 'Мария Буланаева',
            teamPositionThree: 'Директор по маркетингу',
            listingH2One: 'Заявка на листинг активов',
            listingPBlockOne: 'Пожалуйста, заполните следующую форму, если вы хотите, чтобы ваш актив был размещен на TBCC Exchange.',
            listingLabelOne: 'Адрес электронной почты*',
            listingLabelTwo: 'Как вас зовут и какова ваша роль в проекте?*',
            listingLabelThree: 'Как называется ваш проект?*',
            listingLabelFour: 'Какова цель вашего проекта?*',
            listingLabelFive: 'Вы являетесь уполномоченным контактным лицом для подачи этого проекта?*',
            listingLabelSix: 'Какой у вас адрес электронной почты?',
            listingLabelSeven: '[Должен быть официальный адрес электронной почты компании]*',
            listingLabelEight: 'Какой символ токена?*',
            listingLabelNine: 'Как называется ваш токен?',
            listingButton: 'Дальше',
        },
        CH: {

        }

    }

    var language = 'EN';

    if(localStorage.getItem('todoLang')){

        $('#lang-select').select2().val(localStorage.getItem('todoLang')).trigger("change");
        $('#lang-select-footer').select2().val(localStorage.getItem('todoLang')).trigger("change");


        setLanguage(dictionary, localStorage.getItem('todoLang'));
        language = localStorage.getItem('todoLang');
    } else {
        $('#lang-select').select2().val(language).trigger("change");
        $('#lang-select-footer').select2().val(language).trigger("change");

        setLanguage(dictionary, language);
    }

    $('.lang').change(function () {
        language = $(this).val();
        setLanguage(dictionary, language);
        localStorage.setItem('todoLang', language);
    });

});

function setLanguage(dictionary, language)
{
    $('#menuItemOne').text(dictionary[language].menuItemOne);
    $('#menuItemTwo').text(dictionary[language].menuItemTwo);
    $('#menuItemThree').text(dictionary[language].menuItemThree);
    $('#menuItemFour').text(dictionary[language].menuItemFour);
    $('#menuItemFive').text(dictionary[language].menuItemFive);
    $('#menuItemSix').text(dictionary[language].menuItemSix);
    $('#mainH1').text(dictionary[language].mainH1);
    $('#mainPBlockOne').text(dictionary[language].mainPBlockOne);
    $('#buttonTextOne').text(dictionary[language].buttonTextOne);
    $('#mainSpanOne').text(dictionary[language].mainSpanOne);
    $('#mainSpanTwo').text(dictionary[language].mainSpanTwo);
    $('#mainH2One').text(dictionary[language].mainH2One);
    $('#mainH3One').text(dictionary[language].mainH3One);
    $('#mainH3Two').text(dictionary[language].mainH3Two);
    $('#mainH3Three').text(dictionary[language].mainH3Three);
    $('#mainPBlockTwo').text(dictionary[language].mainPBlockTwo);
    $('#mainPBlockThree').text(dictionary[language].mainPBlockThree);
    $('#mainPBlockFour').text(dictionary[language].mainPBlockFour);
    $('#mainH2Two').text(dictionary[language].mainH2Two);
    $('#mainPBlockFive').text(dictionary[language].mainPBlockFive);
    $('#footerH2').text(dictionary[language].footerH2);
    $('#buttonTextTwo').text(dictionary[language].buttonTextTwo);
    $('#buttonTextThree').text(dictionary[language].buttonTextThree);
    $('#footerPOne').text(dictionary[language].footerPOne);
    $('#footerPTwo').text(dictionary[language].footerPTwo);
    $('#footerItemOne').text(dictionary[language].footerItemOne);
    $('#footerItemTwo').text(dictionary[language].footerItemTwo);
    $('#footerItemThree').text(dictionary[language].footerItemThree);
    $('#footerItemFour').text(dictionary[language].footerItemFour);
    $('#footerItemFive').text(dictionary[language].footerItemFive);
    $('#footerItemSix').text(dictionary[language].footerItemSix);
    $('#footerItemSeven').text(dictionary[language].footerItemSeven);
    $('#footerItemEight').text(dictionary[language].footerItemEight);
    $('#footerItemNine').text(dictionary[language].footerItemNine);
    $('#footerItemTen').text(dictionary[language].footerItemTen);
    $('#footerItemEleven').text(dictionary[language].footerItemEleven);
    $('#footerItemTwelve').text(dictionary[language].footerItemTwelve);
    $('#footerItemThirteen').text(dictionary[language].footerItemThirteen);
    $('#footerItemFourteen').text(dictionary[language].footerItemFourteen);
    $('#footerItemFifteen').text(dictionary[language].footerItemFifteen);
    $('#footerItemSixteen').text(dictionary[language].footerItemSixteen);
    $('#footerItemSeventeen').text(dictionary[language].footerItemSeventeen);
    $('#teamH2One').text(dictionary[language].teamH2One);
    $('#teamPBlockOne').text(dictionary[language].teamPBlockOne);
    $('#teamPBlockTwo').text(dictionary[language].teamPBlockTwo);
    $('#teamH2Two').text(dictionary[language].teamH2Two);
    $('#teamPBlockThree').text(dictionary[language].teamPBlockThree);
    $('#teamH2Three').text(dictionary[language].teamH2Three);
    $('#teamNameOne').text(dictionary[language].teamNameOne);
    $('#teamNameTwo').text(dictionary[language].teamNameTwo);
    $('#teamNameThree').text(dictionary[language].teamNameThree);
    $('#teamPositionOne').text(dictionary[language].teamPositionOne);
    $('#teamPositionTwo').text(dictionary[language].teamPositionTwo);
    $('#teamPositionThree').text(dictionary[language].teamPositionThree);
    $('#listingH2One').text(dictionary[language].listingH2One);
    $('#listingPBlockOne').text(dictionary[language].listingPBlockOne);
    $('#listingLabelOne').text(dictionary[language].listingLabelOne);
    $('#listingLabelTwo').text(dictionary[language].listingLabelTwo);
    $('#listingLabelThree').text(dictionary[language].listingLabelThree);
    $('#listingLabelFour').text(dictionary[language].listingLabelFour);
    $('#listingLabelFive').text(dictionary[language].listingLabelFive);
    $('#listingLabelSix').text(dictionary[language].listingLabelSix);
    $('#listingLabelSeven').text(dictionary[language].listingLabelSeven);
    $('#listingLabelEight').text(dictionary[language].listingLabelEight);
    $('#listingLabelNine').text(dictionary[language].listingLabelNine);
    $('#listingButton').text(dictionary[language].listingButton);
}
