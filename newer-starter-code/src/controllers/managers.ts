import { db } from '../models';
var Manager = db.models.Manager;

function index(req, res) {
	Manager.findAll().then(function(managers) {
		res.json(managers);
	});
}

function show(req, res) {
	Manager.findById(req.params.id).then(manager => {
			if(!manager) res.send(res, 'not found');
			res.json(manager);
		});
}

function create(req, res) {
	Manager.create(req.body).then( manager => {
		if(!manager) res.send(res, 'not saved');
		res.json(manager);
	});
}

function update(req, res) {
	Manager.findById(req.params.id).then( manager => {
			if(!manager) res.send(res, 'not found');
			return manager.updateAttributes(req.body);
	}).then( manager => {
		res.json(manager);
	});
}

function destroy(req, res) {
	Manager.findById(req.params.id).then( manager => {
		if(!manager) res.send(res, 'not found');
		return manager.destroy();
	}).then( () => {
		res.redirect(303, '/artists');
	});
}

const managersController = <any>{};
managersController.index = index;
managersController.show = show;
managersController.create = create;
managersController.update = update;
managersController.destroy = destroy;

export {managersController};