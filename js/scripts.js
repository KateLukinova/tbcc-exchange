
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
            complianceH2One: 'Send a request',
            compliancePBlockOne: 'If you want yo make a compliance request - please fill in the form',
            complianceLabelOne: 'Your email address*',
            complianceLabelTwo: 'Type of request*',
            complianceLabelThree: 'TBCC Exchange Account Email',
            complianceLabelFour: 'Subject*',
            complianceLabelFive: 'Description*',
            complianceLabelSix: 'Attachments(optional)',
            complianceHintOne: 'Please enter the email associated to your TBCC Exchange account if it is different to the email you entered in the field above',
            complianceHintTwo: 'Please enter the details of your request. A member of our support staff will respond to your request as soon as possible. Please include all relevant information including account name, transaction IDs, and screenshots of the issue where possible.',
            complianceHintThree: ' Add file or drop files here',
            complianceButton: 'Send',
            tokenH2One: 'TBCC Token Utility',
            tokenPBlockOne: 'Total and Circulating Supply - 1 000 m TBCC Tokens',
            tokenH2Two: 'TBCC Token Contract',
            tokenH2Three: 'Return of commission',
            tokenPBlockTwo: 'Holders of TBCC tokens receive discounts on trading fees according to the tiered structure outlined here. Please note that TBCC Exchange reserves the right to update the information below at any time in the future at the discretion of the team. Therefore, read it carefully and update it periodically to be sure that no changes have been made.',
            tokenPBlockThree: 'To receive discounts on trading commissions or unlock platform improvements, users must lock the required amount of TBCC token in their TBCC Exchange wallet for a period of 45 days or more.',
            tokenPBlockFour: 'After the 45-day lockout period, users will receive trading fee rebates in the form of credits to their TBCC Exchange wallet in the same currency in which the trading fees were originally charged.',
            tokenPBlockFive: 'Trading commission refunds will be paid every 45 days depending on the date of the user ban period.',
            tokenTdOne: 'Tier',
            tokenTdTwo: '>45 Day Locking Balance',
            tokenTdThree: 'Trading Fee',
            tokenTdFour: 'Return to User',
            tokenTdFive: 'Trading Fee after Rebate',
            referralH2One: 'Earn bonuses',
            referralPBlockOne: 'Just invite a friend to register and get your token reward. More detailed rules',
            referralH3One: 'How to get bonuses?',
            referralH4One: ' Create a link in your personal account',
            referralPBlockTwo: 'Register on our exchange and create a link to invite a friend.',
            referralH4Two: 'Send the link to a friend',
            referralPBlockThree: 'You can send unlimited invite links to your friends',
            referralH4Three: 'Get your bonus',
            referralPBlockFour: 'As soon as your friend registers on our exchange and completes his first transaction, you will receive your bonus',
            referralH3Two: 'Invite a friend now',
            referralPBlockFive: 'Generate your unique link to invite friends via message or email. You can also simply send the invitation code in any messenger by copying the link.',
            referralPBlockSix: 'Your personal ID',
            referralSpanOne: 'Default Link',
            referralSpanTwo: 'Note',
            referralLabelOne: 'You Receive:',
            referralLabelTwo: 'Friends Receive:',
            referralButton: 'Share now',
            contactsH2One: 'Contact us',
            contactsPBlockOne: 'Please feel free to ask questions if you have them or write to us if you have any proposals',
            contactsLabelOne: 'Name',
            contactsLabelTwo: 'Email',
            contactsLabelThree: 'Topic',
            contactsLabelFour: 'Text',
            contactsHintOne: 'Type your message in the field below',
            contactsButton: 'Send ',
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
            complianceH2One: 'Отправить запрос',
            compliancePBlockOne: 'Если вы хотите сделать запрос о соответствии - заполните форму',
            complianceLabelOne: 'Адерс вашей электронной почты*',
            complianceLabelTwo: 'Тип запроса*',
            complianceLabelThree: 'Электронная почта учетной записи TBCC Exchange',
            complianceLabelFour: 'Тема*',
            complianceLabelFive: 'Описание*',
            complianceLabelSix: 'Вложения (необязательно)',
            complianceHintOne: 'Пожалуйста, введите адрес электронной почты, связанный с вашей учетной записью TBCC Exchange, если он отличается от адреса электронной почты, который вы ввели в поле выше',
            complianceHintTwo: 'Пожалуйста, введите детали вашего запроса. Сотрудник нашей службы поддержки ответит на ваш запрос в ближайшее время. По возможности укажите всю необходимую информацию, включая имя учетной записи, идентификаторы транзакций и скриншоты проблемы.',
            complianceHintThree: 'Добавьте файл или перетащите файлы сюда',
            complianceButton: 'Send',
            tokenH2One: 'Полезность токенов TBCC',
            tokenPBlockOne: 'Общее и находящееся в обращении предложение - 1000 млн токенов TBCC',
            tokenH2Two: 'Контракт токена TBCC',
            tokenH2Three: 'Возврат комиссии',
            tokenPBlockTwo: 'Держатели токенов TBCC получают скидки на торговые сборы в соответствии с многоуровневой структурой, описанной здесь. Обратите внимание, что TBCC Exchange оставляет за собой право обновлять информацию ниже в любое время в будущем по усмотрению команды. Поэтому внимательно прочтите его и периодически обновляйте, чтобы быть уверенным, что никаких изменений не было.',
            tokenPBlockThree: 'Чтобы получить скидки на торговые комиссии или разблокировать улучшения платформы, пользователи должны заблокировать необходимое количество токенов TBCC в своем кошельке TBCC Exchange на период 45 дней или более.',
            tokenPBlockFour: 'После 45-дневного периода блокировки пользователи будут получать скидки на торговые комиссии в виде кредитов на свой кошелек TBCC Exchange в той же валюте, в которой изначально взимались торговые сборы.',
            tokenPBlockFive: 'Возврат комиссии за торговлю будет выплачиваться каждые 45 дней в зависимости от даты периода блокировки пользователя.',
            tokenTdOne: 'Уровень',
            tokenTdTwo: '> 45 дней блокировки баланса',
            tokenTdThree: 'Комиссия за торговлю',
            tokenTdFour: 'Возврат пользователю',
            tokenTdFive: 'Комиссия за торговлю после бонуса',
            referralH2One: 'Зарабатывайте бонусы',
            referralPBlockOne: 'Просто пригласите друга зарегистрироваться и получите ваше вознаграждение токенами',
            referralH3One: 'Как получить бонусы? ',
            referralH4One: 'Создайте ссылку в личном кабинете. ',
            referralPBlockTwo: 'Зарегистрируйтесь на нашей бирже и создайте ссылку для приглашения друга',
            referralH4Two: 'Отправьте ссылку другу.',
            referralPBlockThree: 'Вы можете отправить неограниченное количество ссылок-приглашений вашим друзьям.',
            referralH4Three: 'Получите ваш бонус.',
            referralPBlockFour: 'Как только ваш друг зарегистрируется на нашей бирже и совершит свою первую операцию - вы получите ваш бонус.',
            referralH3Two: 'Пригласите друга сейчас',
            referralPBlockFive: 'Сгенерируйте свою уникальную ссылку, чтобы пригласить друзей в сообщении или по электронной почте. Код приглашения также можно просто отправить в любом мессенджере, скопировав ссылку.',
            referralPBlockSix: 'Ваш личный ID',
            referralSpanOne: 'Ссылка по умолчанию',
            referralSpanTwo: 'Запись',
            referralLabelOne: 'Вы получаете:',
            referralLabelTwo: 'Ваш друг получает:',
            referralButton: 'Поделиться сейчас',
            contactsH2One: 'Свяжитесь с нами',
            contactsPBlockOne: 'Не стесняйтесь задавать вопросы, если они у вас есть, или писать нам, если у вас есть предложения',
            contactsLabelOne: 'Имя',
            contactsLabelTwo: 'Адрес электронной почты',
            contactsLabelThree: 'Тема',
            contactsLabelFour: 'Текст',
            contactsHintOne: 'Напишите ваше сообщение в графе выше',
            contactsButton: 'Отправить',
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
    $('#complianceH2One').text(dictionary[language].complianceH2One);
    $('#compliancePBlockOne').text(dictionary[language].compliancePBlockOne);
    $('#complianceLabelOne').text(dictionary[language].complianceLabelOne);
    $('#complianceLabelTwo').text(dictionary[language].complianceLabelTwo);
    $('#complianceLabelThree').text(dictionary[language].complianceLabelThree);
    $('#complianceLabelFour').text(dictionary[language].complianceLabelFour);
    $('#complianceLabelFive').text(dictionary[language].complianceLabelFive);
    $('#complianceLabelSix').text(dictionary[language].complianceLabelSix);
    $('#complianceHintOne').text(dictionary[language].complianceHintOne);
    $('#complianceHintTwo').text(dictionary[language].complianceHintTwo);
    $('#complianceHintThree').text(dictionary[language].complianceHintThree);
    $('#tokenH2One').text(dictionary[language].tokenH2One);
    $('#tokenPBlockOne').text(dictionary[language].tokenPBlockOne);
    $('#tokenH2Two').text(dictionary[language].tokenH2Two);
    $('#tokenH2Three').text(dictionary[language].tokenH2Three);
    $('#tokenPBlockTwo').text(dictionary[language].tokenPBlockTwo);
    $('#tokenPBlockThree').text(dictionary[language].tokenPBlockThree);
    $('#tokenPBlockFour').text(dictionary[language].tokenPBlockFour);
    $('#tokenPBlockFive').text(dictionary[language].tokenPBlockFive);
    $('#tokenTdOne').text(dictionary[language].tokenTdOne);
    $('#tokenTdTwo').text(dictionary[language].tokenTdTwo);
    $('#tokenTdThree').text(dictionary[language].tokenTdThree);
    $('#tokenTdFour').text(dictionary[language].tokenTdFour);
    $('#tokenTdFive').text(dictionary[language].tokenTdFive);
    $('#referralH2One').text(dictionary[language].referralH2One);
    $('#referralPBlockOne').text(dictionary[language].referralPBlockOne);
    $('#referralH3One').text(dictionary[language].referralH3One);
    $('#referralH4One').text(dictionary[language].referralH4One);
    $('#referralPBlockTwo').text(dictionary[language].referralPBlockTwo);
    $('#referralH4Two').text(dictionary[language].referralH4Two);
    $('#referralPBlockThree').text(dictionary[language].referralPBlockThree);
    $('#referralH4Three').text(dictionary[language].referralH4Three);
    $('#referralPBlockFour').text(dictionary[language].referralPBlockFour);
    $('#referralH3Two').text(dictionary[language].referralH3Two);
    $('#referralPBlockFive').text(dictionary[language].referralPBlockFive);
    $('#referralPBlockSix').text(dictionary[language].referralPBlockSix);
    $('#referralSpanOne').text(dictionary[language].referralSpanOne);
    $('#referralSpanTwo').text(dictionary[language].referralSpanTwo);
    $('#referralLabelOne').text(dictionary[language].referralLabelOne);
    $('#referralLabelTwo').text(dictionary[language].referralLabelTwo);
    $('#referralButton').text(dictionary[language].referralButton);
    $('#contactsH2One').text(dictionary[language].contactsH2One);
    $('#contactsPBlockOne').text(dictionary[language].contactsPBlockOne);
    $('#contactsLabelOne').text(dictionary[language].contactsLabelOne);
    $('#contactsLabelTwo').text(dictionary[language].contactsLabelTwo);
    $('#contactsLabelThree').text(dictionary[language].contactsLabelThree);
    $('#contactsLabelFour').text(dictionary[language].contactsLabelFour);
    $('#contactsHintOne').text(dictionary[language].contactsHintOne);
    $('#contacts-button').text(dictionary[language].contactsButton);
}
