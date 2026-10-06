const menuModel = require('../models/menuModel');
const { errorHttp } = require('../middlewares/errorHandler');

exports.getAll = (req, res) => {
  const { kategori } = req.query;
  res.json(menuModel.getAll(kategori));
};

exports.getById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = menuModel.getById(id);
  if (!data) return next(errorHttp(404, 'Data tidak ditemukan'));
  res.json(data);
};

exports.create = (req, res, next) => {
  const { nama, kategori, harga, tersedia, pedas } = req.body;
  if (!nama || !kategori || !harga || !tersedia || !pedas) return next(errorHttp(400, 'Semua field wajib diisi'));

  const baru = menuModel.create({ nama, kategori, harga, tersedia, pedas });
  res.status(201).json(baru);
};

exports.update = (req, res, next) => {
  const id = parseInt(req.params.id);
  const hasil = menuModel.update(id, req.body);
  if (!hasil) return next(errorHttp(404, 'Data tidak ditemukan'));
  res.json(hasil);
};

exports.remove = (req, res, next) => {
  const id = parseInt(req.params.id);
  const berhasil = menuModel.remove(id);
  if (!berhasil) return next(errorHttp(404, 'Data tidak ditemukan'));
  res.status(204).send();
};