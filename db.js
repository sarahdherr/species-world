var db = require("seraph")("http://localhost:7474")

db.save({ name: "Test-Man", age: 40 }, function(err, node) {
	if (err) throw err
	console.log("Test-Man inserted.")

	db.delete(node, function(err) {
		if (err) throw err
		console.log("Test-Man away!")
	})
})
