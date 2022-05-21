const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

async function run() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://google.com');
    const searchBar = await driver.findElement(By.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input"));
    await searchBar.sendKeys("nodejs");
    await searchBar.sendKeys(Key.ENTER);

    //acessando page node
    const searchBarTeste = await driver.findElement(By.xpath("/html/body/div[7]/div/div[10]/div[1]/div[2]/div[2]/div/div/div[1]/div/div/div/div/div/div/div[1]/a/h3")).click();
    
    //add para acessar link download node
    setTimeout(async () => {
      const searchBar = await driver.findElement(By.xpath('/html/body/main/div/div/div[1]/a')).click()
        //const reacTest = await driver.findElement(By.xpath('/html/body/main/div/div/div[1]/a')).click();

      }, 1000);  
}

run();