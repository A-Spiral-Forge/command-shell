var commands = require('./commands.js');

try {
	process.chdir('/');
	console.log('Current working directory: ' + process.cwd());
} catch (err) {
	console.log(err);
}

process.stdout.write('\nprompt:' + process.cwd() + '>');

process.stdin.on('data', function (data) {
	var cmd = data.toString().trim();
	cmd = cmd.split(' ');
	var fn = cmd[0];

	var args = cmd.slice(1);

	try {
		commands[fn].call(null, args);
	} catch (err) {
		process.stdout.write('No such command exists.');
		process.stdout.write('\nprompt:' + process.cwd() + '>');
	}
});
