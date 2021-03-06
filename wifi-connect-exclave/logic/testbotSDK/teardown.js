const { RaspberryPi, TestBotHat } = require('@balena/testbot')

const testbotHat = new TestBotHat();
const deviceInteractor = new RaspberryPi(testbotHat);

console.log("running");
try {
	(async () => {
		console.log(`Powering off DUT`)
		await deviceInteractor.powerOff();

		console.log(`Performing teardown`);
		await testbotHat.teardown(true)

		console.log(`Teardown Successful`)
		process.exit(0)
	})()
} catch(err) {
	console.log(`Teardown unsuccessful: ${err}`)
	process.exit(1)
}
