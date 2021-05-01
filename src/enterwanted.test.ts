import { EnterWanted } from "./enterwanted-pageobject";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, until } from "selenium-webdriver";
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();



const page = new EnterWanted(driver);
// test case written in https://dmutah.atlassian.net/browse/MG3DL-45
describe("testing header input equivalance partitioning 9-19 characters", () => {
    page.navigate();
    // gets the header input here in inputText, then checks for the character length and based on that runs one of the tests
    let inputText: string = "few";
    if (inputText.length < 9 ) {
        
        test("error message recieved when input is < 9 characters ", async () => {
            await page.submitHeaderText(inputText);
            expect(await page.getError()).toBe('The "Header" field should be between 9 and 19 characters long.');
        });
    } else if (inputText.length > 19) { 

        test("error message recieved when input is > 19 characters", async () => {
            await page.submitHeaderText(inputText);
            expect(await page.getError()).toBe('The "Header" field should be between 9 and 19 characters long.');
    });
    } else {

        test("no error message recieved when 9-19 characters are entered", async () => {
            await page.submitHeaderText(inputText);
            expect(await page.getError()).not.toBe('The "Header" field should be between 9 and 19 characters long.');
        });
    }

    afterAll(async () => {
        await driver.quit();
    });
});
