const Film = require('../models/Film');

module.exports = {
	index: (req, res) => {

		Film.find().then(films => {

			res.render('film/index', {'films': films});
		})
	},
	createGet: (req, res) => {

        res.render('film/create');
	},
	createPost: (req, res) => {

        let filmArgs = req.body;
        Film.create(filmArgs).then(film => {

        	res.redirect('/');
		})
	},
	editGet: (req, res) => {

		let id = req.params.id;
        Film.findById(id).then(film => {

        	res.render('film/edit', film);
		})
	},
	editPost: (req, res) => {

		let id = req.params.id;
		let film = req.body;
		Film.findByIdAndUpdate(id, film).then(film => {

			res.redirect('/');
		})

	},
	deleteGet: (req, res) => {

		let id = req.params.id;
		Film.findById(id).then(film => {

			res.render('film/delete', film);
		})
	},
	deletePost: (req, res) => {

		let id = req.params.id;
		Film.findByIdAndRemove(id).then(film => {

			res.redirect('/');
		})
	}
};