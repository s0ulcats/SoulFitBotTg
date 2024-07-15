const kb = require("./keyboardButtons");

module.exports = {
    home: [
        [{ text: kb.home.Buy }, { text: kb.home.TypesOfProgramms }],
        [{ text: kb.Cb }]
    ],
    BackToHome: [
        [{ text: kb.backToHome }]
    ],
    typesOfProgramm: [
        [{ text: kb.TypesOfProgramm.weight_lose }, { text: kb.TypesOfProgramm.weight_retention }, { text: kb.TypesOfProgramm.mass_gain }],
        [{ text: kb.Cb }, { text: kb.backToHome }]
    ],
    typesOfPurchases: [
        [{ text: kb.Purchases.Buy_a_course }],
        [{ text: kb.Cb }, { text: kb.backToHome }]
    ],
    BtnForLose: [
        [{ text: kb.TypesOfProgramm.lose.DataLose }, { text: kb.TypesOfProgramm.lose.TypesOfFoodLose }, { text: kb.KkalInFood}],
        [{ text: kb.backToHome }]
    ],
    BtnForRetention: [
        [{ text: kb.TypesOfProgramm.retention.DataRet }, { text: kb.TypesOfProgramm.retention.TypesOfFoodRet }, { text: kb.KkalInFood}],
        [{ text: kb.backToHome }]
    ],
    BtnForGain: [
        [{ text: kb.TypesOfProgramm.gain.DataGain }, { text: kb.TypesOfProgramm.gain.TypesOfFoodGain }, { text: kb.KkalInFood}],
        [{ text: kb.backToHome }]
    ],
    inline_keyboardForSetCurency: [
        [
            { text: 'UAH', callback_data: 'ukr' },
            { text: 'RUB', callback_data: 'rus' },
            { text: 'USD/EUR/GBP', callback_data: 'usd/eur' },
            { text: 'KZ', callback_data: 'kz' },
            { text: 'UZ', callback_data: 'uz' },
        ]
    ],
    inline_keyboardForSetMethodForUah: [
        [
            { text: 'Portmone', callback_data: 'Portmone' },
            { text: 'Tranzzo', callback_data: 'Tranzzo' },
            { text: 'Bill_line', callback_data: 'Bill_line' }
        ]
    ],
    inline_keyboardForSetMethodForRub: [
        [
            { text: 'Сбербанк', callback_data: 'Sber' },
            { text: 'ЮKassa', callback_data: 'Ukassa' },
        ]
    ],
    inline_keyboardForSetMethodForUsdEur: [
        [
            { text: 'Tranzzo', callback_data: 'Tranzzo' },
            { text: 'Smart Glocal', callback_data: 'Smart_Glocal' },
            { text: 'Unlimint', callback_data: 'Unlimint' },
            { text: 'Bill_line', callback_data: 'Bill_line' },
        ]
    ],
    inline_keyboardForSetMethodForKz: [
        [
            { text: 'Tranzzo', callback_data: 'Tranzzo' },
            { text: 'Smart Glocal', callback_data: 'Smart_Glocal' },
            { text: 'Unlimint', callback_data: 'Unlimint' },
            { text: 'bill_line', callback_data: 'Bill_line' }
        ]
    ],
    inline_keyboardForSetMethodForUz: [
        [
            { text: 'Paycom.Uz', callback_data: 'Paycom_Uz' },
            { text: 'CLICK', callback_data: 'CLICK' },
            { text: 'Global Pay', callback_data: 'Global_Pay' },
            { text: 'Smart Glocal', callback_data: 'Smart_Glocal' },
            { text: 'Unlimint', callback_data: 'Unlimint' },
        ]
    ],
};