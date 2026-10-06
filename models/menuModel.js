let menu = [
    { id: 1, nama: 'Es Teh Manis', kategori: 'Minuman', harga: "5000", tersedia: "true", pedas: "false" },
    { id: 2, nama: 'Brown Sugar Boba', kategori: 'Minuman', harga: "10000", tersedia: "true", pedas: "false" },
    { id: 3, nama: 'Croissant', kategori: 'Makanan', harga: "15000", tersedia: "false", pedas: "false" },
    { id: 4, nama: 'Kentang Goreng', kategori: 'Makanan', harga: "10000", tersedia: "true", pedas: "false" },
    { id: 5, nama: 'Mie Ayam Pedas', kategori: 'Makanan', harga: "15000", tersedia: "true", pedas: "true" }
];
let nextId = 6;

function getAll(menu) {
  if (kategori) return menu.filter((m) => m.kategori === kategori);
  return menu;
}

function getById(id) {
  return menu.find((m) => m.id === id);
}

function create(data) {
  const baru = { id: nextId++, ...data };
  menu.push(baru);
  return baru;
}

function update(id, data) {
  const index = menu.findIndex((m) => m.id === id);
  if (index === -1) return null;
  menu[index] = { ...menu[index], ...data, id };
  return menu[index];
}

function remove(id) {
  const index = menu.findIndex((m) => m.id === id);
  if (index === -1) return false;
  menu.splice(index, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove };