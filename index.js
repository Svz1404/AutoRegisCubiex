const fetch = require('node-fetch');

const fs = require('fs-extra');
const randomstring = require('randomstring');
const puppeteer = require('puppeteer-extra');
const delay = require('delay');
const moment = require('moment');
const { Console } = require('console');
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
puppeteer.use(
  RecaptchaPlugin({
    provider: {
      id: '2captcha',
      token: 'd61334216db94995e5d2ca7270603c65' // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
    },
    visualFeedback: true // colorize reCAPTCHAs (violet = detected, green = solved)
  })
)
const getMail = (emailAkun) => new Promise((resolve,reject) => {
    fetch(`https://tempmail.plus/api/mails?email=${emailAkun}&limit=20&epin=`,
    {
        method : 'GET',
        
        headers : 
        {
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            //'cookie': `_ga=GA1.2.1510759201.1633675105; __gads=ID=40b37608bd07fa63-22f8825becca00c3:T=1633675111:RT=1633675111:S=ALNI_MbAKBPUJGGcoVDj-MT21MA2SgaF7Q; _ym_uid=1633675111747331077; _ym_d=1633675111; _ym_visorc=w; _ym_isad=2; _gid=GA1.2.1775849942.1635114624; _gat_UA-163460391-1=1; email=${EmailAkun}`,
            'referer': 'https://tempmail.plus/en/',
            'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest' 
        }       
  
    })
    .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
   
  });
  const generateIndoName = () => new Promise((resolve, reject) => {
    fetch('https://swappery.site/data.php?qty=1', {
        method: 'GET'
    })
        .then(res => res.json())
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
  });
  const getHasilMail = (getfirstID,emailAkun) => new Promise((resolve,reject) => {
    fetch(`https://tempmail.plus/api/mails/${getfirstID}?email=${emailAkun}&epin=`,
    {
        method : 'GET',
        
        headers : 
        {
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            //'cookie': '_ga=GA1.2.1510759201.1633675105; __gads=ID=40b37608bd07fa63-22f8825becca00c3:T=1633675111:RT=1633675111:S=ALNI_MbAKBPUJGGcoVDj-MT21MA2SgaF7Q; _ym_uid=1633675111747331077; _ym_d=1633675111; _ym_visorc=w; _ym_isad=2; _gid=GA1.2.1775849942.1635114624; _gat_UA-163460391-1=1; email=susterngesot8zjmakk%40mailto.plus',
            'referer': 'https://tempmail.plus/en/',
            'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
            'sec-ch-ua-mobile': '?0',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest' 
        }       
  
    })
    .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
   
  });
  
(async() =>
{
   

        console.log(`[${(moment().format('HH:mm:ss'))}]Mencoba Register Account . . .`)
        for(i=0;i<100;i++){
          var $options = { 
            waitUntil: 'load',
            setTimeout: 999999,
            setDefaultNavigationTimeout:999999
    
         };
        
        
    
        var browser = await puppeteer.launch({
            devtools: false,
            ignoreHTTPSErrors: true,
            headless: true,
            args: [ `--window-size=1200,900`]
        });
             
        await delay(300)
        const page = await browser.newPage() 
        await page.bringToFront()
        await page.setDefaultNavigationTimeout(0);
        await page.setViewport({ width: 1200, height: 700 });
        await page.setDefaultNavigationTimeout(0);
        await page.evaluateOnNewDocument(() => {
            Object.defineProperty(navigator, 'webdriver', {
            get: () => false,
        });
            });
        await page.evaluateOnNewDocument(() => {
            Object.defineProperty(navigator, 'plugins', {
            get: () => [1, 2, 3, 4, 5],
        });
    });
    try{
    const indoName = await generateIndoName();
    const { result } = indoName;
    const fakeTwitter = 'https://twitter.com/'+result[0].firstname + result[0].lastname
    const emailAkun = result[0].firstname + result[0].lastname+ '1404@tofeat.com'
    const usernameAkun = result[0].firstname + result[0].lastname
    const passwordAkun = '721886ASU'
    console.log(`[${(moment().format('HH:mm:ss'))}] Email : ${emailAkun} => Username ${usernameAkun}`)
        await page.bringToFront()
        await page.bringToFront()
        await page.goto('https://www.cubiex.com/',{waitUntil: 'load'})
        await delay(1000)
        await page.waitForSelector('body > app-root > app-navigation > div.user-menu-container > app-user-menu > a')
        await page.click('body > app-root > app-navigation > div.user-menu-container > app-user-menu > a')
        await delay(1000)
        await page.waitForSelector('#cdk-overlay-0 > app-login > app-dialog > div > div.buttons > app-button > button > span')
        await page.click('#cdk-overlay-0 > app-login > app-dialog > div > div.buttons > app-button > button > span')
        await delay(1000)
        await page.waitForSelector('#cdk-overlay-1 > app-signup > app-dialog > div > div.content > form > app-input:nth-child(1) > div > input')
        await page.type('#cdk-overlay-1 > app-signup > app-dialog > div > div.content > form > app-input:nth-child(1) > div > input',emailAkun)
        await delay(500)
        await page.type('#cdk-overlay-1 > app-signup > app-dialog > div > div.content > form > app-input:nth-child(2) > div > input',usernameAkun)
        await delay(500)
        await page.type('#cdk-overlay-1 > app-signup > app-dialog > div > div.content > form > app-input:nth-child(3) > div > input',passwordAkun)
        await delay(1000)
        await page.click('#cdk-overlay-1 > app-signup > app-dialog > div > div.content > form > app-button > button')
        await delay(1000)
        await page.waitForSelector('iframe[src*="recaptcha/"]')
        await page.solveRecaptchas()
        await delay(5000)
        const checkEmail = await getMail(emailAkun)
        const getfirstID = checkEmail["first_id"]
        const hasilEmail = await getHasilMail(getfirstID,emailAkun)
        const hsl1 = JSON.stringify(hasilEmail["text"])

    
        const getConfirm =  JSON.stringify(hsl1.split("Finish Registration ( ")[1].split(" )")[0])
        const stringConfirm = getConfirm.replace('"','');
        const stringConfirm1 = stringConfirm.replace('"','');
        await page.goto(stringConfirm1,{waituntil:'load'})
        //AKUN 1
        try{
          await delay(5000)
          await page.goto('https://www.cubiex.com/player/5311/about')
          await delay(2000)
          await page.waitForSelector('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
          await page.click('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
          await delay(2000)
          const GetUser = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.left > div.user-info > span.name',(el) => el.textContent)
          const HasilFollow = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span',(el) => el.textContent)
          console.log(`[${(moment().format('HH:mm:ss'))}] User : ${GetUser} => ${HasilFollow}`)
          }catch{
            console.log('Gagal Follow')
          }
          // AKUN 2
          try{
            await delay(5000)
            await page.goto('https://www.cubiex.com/player/5559/about')
            await delay(2000)
            await page.waitForSelector('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
            await page.click('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
            await delay(2000)
            const GetUser = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.left > div.user-info > span.name',(el) => el.textContent)
            const HasilFollow = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span',(el) => el.textContent)
            console.log(`[${(moment().format('HH:mm:ss'))}] User : ${GetUser} => ${HasilFollow}`)
            }catch{
              console.log('Gagal Follow')
            }
            // AKUN 3
            try{
              await delay(5000)
              await page.goto('https://www.cubiex.com/player/5560/about')
              await delay(2000)
              await page.waitForSelector('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
              await page.click('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
              await delay(2000)
              const GetUser = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.left > div.user-info > span.name',(el) => el.textContent)
              const HasilFollow = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span',(el) => el.textContent)
              console.log(`[${(moment().format('HH:mm:ss'))}] User : ${GetUser} => ${HasilFollow}`)
              }catch{
                console.log('Gagal Follow')
              }

            //AKUN 4
            try{
              await delay(5000)
              await page.goto('https://www.cubiex.com/player/5396/about')
              await delay(2000)
              await page.waitForSelector('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
              await page.click('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
              await delay(2000)
              const GetUser = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.left > div.user-info > span.name',(el) => el.textContent)
              const HasilFollow = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span',(el) => el.textContent)
              console.log(`[${(moment().format('HH:mm:ss'))}] User : ${GetUser} => ${HasilFollow}`)
              }catch{
                console.log('Gagal Follow')
              }


              //AKUN 5
              try{
                await delay(5000)
                await page.goto('https://www.cubiex.com/player/5561/about')
                await delay(2000)
                await page.waitForSelector('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
                await page.click('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
                await delay(2000)
                const GetUser = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.left > div.user-info > span.name',(el) => el.textContent)
                const HasilFollow = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span',(el) => el.textContent)
                console.log(`[${(moment().format('HH:mm:ss'))}] User : ${GetUser} => ${HasilFollow}`)
                }catch{
                  console.log('Gagal Follow')
                }
                //AKUN 6
                try{
                  await delay(5000)
                  await page.goto('https://www.cubiex.com/player/5006/about')
                  await delay(2000)
                  await page.waitForSelector('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
                  await page.click('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
                  await delay(2000)
                  const GetUser = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.left > div.user-info > span.name',(el) => el.textContent)
                  const HasilFollow = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span',(el) => el.textContent)
                  console.log(`[${(moment().format('HH:mm:ss'))}] User : ${GetUser} => ${HasilFollow}`)
                  }catch{
                    console.log('Gagal Follow')
                  }
                  //AKUN 7
                  try{
                    await delay(5000)
                    await page.goto('https://www.cubiex.com/player/5562/about')
                    await delay(2000)
                    await page.waitForSelector('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
                    await page.click('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
                    await delay(2000)
                    const GetUser = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.left > div.user-info > span.name',(el) => el.textContent)
                    const HasilFollow = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span',(el) => el.textContent)
                    console.log(`[${(moment().format('HH:mm:ss'))}] User : ${GetUser} => ${HasilFollow}`)
                    }catch{
                      console.log('Gagal Follow')
                    }
                    // AKUN 8
                    try{
              await delay(5000)
              await page.goto('https://www.cubiex.com/player/4836/about')
              await delay(2000)
              await page.waitForSelector('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
              await page.click('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
              await delay(2000)
              const GetUser = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.left > div.user-info > span.name',(el) => el.textContent)
              const HasilFollow = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span',(el) => el.textContent)
              console.log(`[${(moment().format('HH:mm:ss'))}] User : ${GetUser} => ${HasilFollow}`)
              }catch{
                console.log('Gagal Follow')
              }

              //AKUN 9
              try{
                await delay(5000)
                await page.goto('https://www.cubiex.com/player/5380/about')
                await delay(2000)
                await page.waitForSelector('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
                await page.click('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
                await delay(2000)
                const GetUser = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.left > div.user-info > span.name',(el) => el.textContent)
                const HasilFollow = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span',(el) => el.textContent)
                console.log(`[${(moment().format('HH:mm:ss'))}] User : ${GetUser} => ${HasilFollow}`)
                }catch{
                  console.log('Gagal Follow')
                }
                //AKUN 10

                try{
                  await delay(5000)
                  await page.goto('https://www.cubiex.com/player/5563/about')
                  await delay(2000)
                  await page.waitForSelector('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
                  await page.click('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span')
                  await delay(2000)
                  const GetUser = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.left > div.user-info > span.name',(el) => el.textContent)
                  const HasilFollow = await page.$eval('body > app-root > div > div > app-profile-page > app-profile-header > div > div.right > div.buttons > app-follow-button > app-button > button > span',(el) => el.textContent)
                  console.log(`[${(moment().format('HH:mm:ss'))}] User : ${GetUser} => ${HasilFollow}`)
                  }catch{
                    console.log('Gagal Follow')
                  }

            
        console.log('===============================')

        fs.appendFileSync("SuccessRegistered.txt",emailAkun +'|'+ passwordAkun +  '\n'.split(' ').join(''));
        await browser.close()
    }catch(e){
        console.log(e)
        console.log(`[${(moment().format('HH:mm:ss'))}] Gagal Register . . .`)
    }
}
        //src="https://www.google.com/recaptcha/api2/bframe?hl=en&v=PdoyIVkd8v16xl_NMp3H0N1Y&k=6Lc0FLoUAAAAADqYBN8sfW86_awsOW5HCofJuAG3"
        })();