define(['secondModule'], function(secondModule) {
	var jsOutput = document.getElementById('js-output');
	jsOutput.innerHTML += 'Entry  works!';
        secondModule.run(jsOutput);
});
