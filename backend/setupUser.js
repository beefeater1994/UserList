const User = require('./Models/UserModel');

module.exports = function(app) {
    const starterUsers = [
        {
            id: '6be28067-47f0-4e8b-a281-f7a63e94a743',
            firstName: 'Kobe',
            lastName: 'Hansen',
            sex: 'Male',
            age: 91767,
            password: 'uQkqE9g9UxLxVVU',
            repeatPassword: 'uQkqE9g9UxLxVVU'
        },
        {
            id: '0d9d8c18-7cf1-4298-bc88-5f619c59c4ec',
            firstName: 'Maxime',
            lastName: 'Kuphal',
            sex: 'Male',
            age: 26816,
            password: 'JstCc43OinmmgP4',
            repeatPassword: 'JstCc43OinmmgP4'
        },
        {
            id: 'a8c5dba9-af28-4f92-b04c-101b5d241686',
            firstName: 'Estelle',
            lastName: 'Schimmel',
            sex: 'Male',
            age: 25456,
            password: 'fgNCbRiMrL_bzfS',
            repeatPassword: 'fgNCbRiMrL_bzfS'
        },
        {
            id: '1812b320-d881-4549-ba33-3a3c4d7c3771',
            firstName: 'Paula',
            lastName: 'Miller',
            sex: 'Male',
            age: 4559,
            password: '89dZlHrht8luLLh',
            repeatPassword: '89dZlHrht8luLLh'
        },
        {
            id: 'b27c27a5-a164-40e3-8269-b60d4f4cef23',
            firstName: 'Dalton',
            lastName: 'D\'Amore',
            sex: 'Male',
            age: 98735,
            password: 'OYI7cGfhFgry9aG',
            repeatPassword: 'OYI7cGfhFgry9aG'
        },
        {
            id: '4340b498-90d0-40e3-8eee-d7a5da139519',
            firstName: 'Gretchen',
            lastName: 'Padberg',
            sex: 'Male',
            age: 11735,
            password: '28N_S7tRgdkzNgV',
            repeatPassword: '28N_S7tRgdkzNgV'
        },
        {
            id: '876a7c8c-4f7c-4abb-9631-5af59ddb3b1d',
            firstName: 'Pattie',
            lastName: 'Waelchi',
            sex: 'Male',
            age: 69983,
            password: 'poUcpnbN7qUYJxm',
            repeatPassword: 'poUcpnbN7qUYJxm'
        },
        {
            id: 'db814c9e-f8a0-4129-9d00-87b5cc732a68',
            firstName: 'Agustina',
            lastName: 'Bosco',
            sex: 'Male',
            age: 8850,
            password: 'GGR11l4epOOABLH',
            repeatPassword: 'GGR11l4epOOABLH'
        },
        {
            id: '40d79cb4-ffdc-4795-97e5-165a0b064bc5',
            firstName: 'Benton',
            lastName: 'Corwin',
            sex: 'Male',
            age: 79505,
            password: 'UGXQbOzURtxMsd8',
            repeatPassword: 'UGXQbOzURtxMsd8'
        },
        {
            id: 'd0418522-c59a-40fa-bb01-ab3d3f72aace',
            firstName: 'Modesta',
            lastName: 'Wolff',
            sex: 'Male',
            age: 42713,
            password: '1V3s7ptiFaVGPun',
            repeatPassword: '1V3s7ptiFaVGPun'
        },
        {
            id: '81f36c41-c5be-49b2-b17f-2c5f4e6bfd7e',
            firstName: 'Annamarie',
            lastName: 'Marquardt',
            sex: 'Male',
            age: 70095,
            password: 'NmCn4ibfH_yx9lp',
            repeatPassword: 'NmCn4ibfH_yx9lp'
        },
        {
            id: '8a1a2cb8-ab2d-4445-a1b5-9e4ea8495a14',
            firstName: 'Liliana',
            lastName: 'Keebler',
            sex: 'Male',
            age: 26285,
            password: 'qfTRZB5DzFyMssI',
            repeatPassword: 'qfTRZB5DzFyMssI'
        },
        {
            id: '2dbec8b8-d905-414e-9b53-8f9cf3b1d014',
            firstName: 'Maddison',
            lastName: 'Toy',
            sex: 'Male',
            age: 43043,
            password: '9iv_iRbbshpCd99',
            repeatPassword: '9iv_iRbbshpCd99'
        },
        {
            id: '8a1aa0a9-8960-44d0-8b93-e537f1894813',
            firstName: 'Ebony',
            lastName: 'Nitzsche',
            sex: 'Male',
            age: 69891,
            password: 'H_oKEzqDq0iq2CN',
            repeatPassword: 'H_oKEzqDq0iq2CN'
        },
        {
            id: '635cc207-bf5e-472f-b18a-a1aff106d59c',
            firstName: 'Susanna',
            lastName: 'Boehm',
            sex: 'Male',
            age: 78398,
            password: 'ZM6mOAVTTKeue5x',
            repeatPassword: 'ZM6mOAVTTKeue5x'
        },
        {
            id: 'a7706d0a-2375-4da2-9844-860bbbd6293e',
            firstName: 'Gino',
            lastName: 'Reichel',
            sex: 'Male',
            age: 57338,
            password: '411QcWHYiScTECk',
            repeatPassword: '411QcWHYiScTECk'
        },
        {
            id: '42b7effb-06fa-4c77-a9a5-4dfc671d2a53',
            firstName: 'Marcelina',
            lastName: 'Christiansen',
            sex: 'Male',
            age: 10936,
            password: '63XvdN8Y_I2iJBV',
            repeatPassword: '63XvdN8Y_I2iJBV'
        },
        {
            id: 'b234b749-09d9-4b94-be39-78fc64f05f76',
            firstName: 'Celestine',
            lastName: 'Veum',
            sex: 'Male',
            age: 35793,
            password: 'gClbSCo_QrW5S3X',
            repeatPassword: 'gClbSCo_QrW5S3X'
        },
        {
            id: 'c14daf47-4c7d-4fa2-8cb1-da2fd4523b74',
            firstName: 'Abigale',
            lastName: 'Kub',
            sex: 'Male',
            age: 20427,
            password: 'RzlpIi7JayOD6Gy',
            repeatPassword: 'RzlpIi7JayOD6Gy'
        },
        {
            id: 'a116a2b5-f4d7-4d49-a42e-b6362a398436',
            firstName: 'Oren',
            lastName: 'Zulauf',
            sex: 'Male',
            age: 87184,
            password: 'R81kZGNxClYrzCI',
            repeatPassword: 'R81kZGNxClYrzCI'
        },
        {
            id: 'a6152473-ade1-4ee8-b0c0-df539131057c',
            firstName: 'Yasmeen',
            lastName: 'Heathcote',
            sex: 'Male',
            age: 43360,
            password: 'OJlNlK6oAXPRmTX',
            repeatPassword: 'OJlNlK6oAXPRmTX'
        },
        {
            id: 'e6c731ca-cad2-4256-ac8f-0c2ef0b2e7f7',
            firstName: 'Eulah',
            lastName: 'Haag',
            sex: 'Male',
            age: 92688,
            password: 'mKPbVtS7bJJrchK',
            repeatPassword: 'mKPbVtS7bJJrchK'
        },
        {
            id: 'c43f5054-a3c5-4e87-90a6-9366d4866b47',
            firstName: 'Adrienne',
            lastName: 'Torp',
            sex: 'Male',
            age: 2439,
            password: 'Br3edcufjKrHQS9',
            repeatPassword: 'Br3edcufjKrHQS9'
        },
        {
            id: 'ba7aced7-4918-426a-9b29-303e571efc67',
            firstName: 'Kale',
            lastName: 'Christiansen',
            sex: 'Male',
            age: 52416,
            password: 'Yi41rWO8BFmC67J',
            repeatPassword: 'Yi41rWO8BFmC67J'
        },
        {
            id: 'ea030a00-e360-4877-bb80-98c0b35319ab',
            firstName: 'Ally',
            lastName: 'Watsica',
            sex: 'Male',
            age: 68072,
            password: 'W_pc8ITIG7FT77D',
            repeatPassword: 'W_pc8ITIG7FT77D'
        },
        {
            id: 'b30c30dd-65bb-478b-aa72-7e44a55edff9',
            firstName: 'Shania',
            lastName: 'Gerhold',
            sex: 'Male',
            age: 78189,
            password: 'Lc9524WKgBNoKWM',
            repeatPassword: 'Lc9524WKgBNoKWM'
        },
        {
            id: '8f359fd9-f44f-46e5-80d8-d3211bd434ea',
            firstName: 'Kaitlyn',
            lastName: 'Abernathy',
            sex: 'Male',
            age: 68655,
            password: 'rwmmHWKtKFeNSsi',
            repeatPassword: 'rwmmHWKtKFeNSsi'
        },
        {
            id: '9b941f48-99bb-4d54-9da0-166cfecbe005',
            firstName: 'Urban',
            lastName: 'Dickens',
            sex: 'Male',
            age: 7783,
            password: 'erIZgjcPaMBNZ80',
            repeatPassword: 'erIZgjcPaMBNZ80'
        },
        {
            id: '678716c5-f526-4189-85b0-8c7ff3edd400',
            firstName: 'Shaun',
            lastName: 'Shields',
            sex: 'Male',
            age: 18929,
            password: 'RuN6Mm87DY91y_Z',
            repeatPassword: 'RuN6Mm87DY91y_Z'
        },
        {
            id: 'f80b0efd-4695-4670-8bd1-e906dea8d735',
            firstName: 'Liliane',
            lastName: 'Morissette',
            sex: 'Male',
            age: 23122,
            password: 'NWLKMpatAMfaWXO',
            repeatPassword: 'NWLKMpatAMfaWXO'
        }
    ];
    User.create(starterUsers, function(err, results) {
        if (err) console.log(err);
        console.log(results);
    });
};