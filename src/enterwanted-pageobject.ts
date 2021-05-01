import { By, WebDriver,until } from "selenium-webdriver"

export class EnterWanted {
    driver: WebDriver
    url:string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html"
    headerInput: By = By.name("hdrInput")
    submitbutton: By = By.id("saveBtn")
    errors: By = By.css(".errorMessage")

    constructor(driver) {
        this.driver = driver
    }
    
    async navigate() {
      await this.driver.get(this.url);
    }

    async submitHeaderText(item:string) {
      await this.driver.wait(until.elementLocated(this.headerInput));
      await this.driver.wait(until.elementLocated(this.submitbutton));
      await this.driver.findElement(this.headerInput).sendKeys(item);
      await (await this.driver.findElement(this.submitbutton)).click();
    }

    async getError() {
    await this.driver.wait(until.elementsLocated(this.errors));
    await this.driver.findElement(this.errors);
    // if there is a error message for header it is always on top
    return  await this.driver.findElement(this.errors).getText();
    }
}


