var fs = require('fs');

module.exports.pwd = (args) => {
	process.stdout.write(process.cwd());
	process.stdout.write('\nprompt:' + process.cwd() + '>');
};

module.exports.ls = (args) => {
	const dir = args.length !== 0 ? args[0] : process.cwd();
	fs.readdir(dir, function (err, files) {
		if (err) throw err;
		files.forEach(function (file) {
			process.stdout.write(file.toString() + '\n');
		});
		process.stdout.write('\nprompt:' + process.cwd() + '>');
	});
};

module.exports.cd = (args) => {
	try {
		process.chdir(args[0]);
		process.stdout.write('Current working directory: ' + process.cwd());
	} catch (err) {
		process.stdout.write(err);
	}
	process.stdout.write('\nprompt:' + process.cwd() + '>');
};

module.exports.exit = (args) => {
	process.exit(0);
};
