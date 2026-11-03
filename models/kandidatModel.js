const mongoose = require('mongoose');
const { subscribe } = require('../app');
const kandidat = ['putra', 'putri', 'campur'];
const kandidatSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      min: 1,
    },
    noUrut: {
      type: String,
      required: [true, 'Field nomorUrurt wajib diisi'],
      trim: true,
      unique: true,
    },
    nama: {
      type: String,
      required: [true, 'Field tipe wajib diisi'],
      enum: {
        values: nama,
        message: 'Field nama harus berisi putra, putri, atau campur',
      },
    },
    jumlahPendukung: {
      type: Number,
      required: [true, 'Field hargaPerBulan wajib diisi'],
      min: [0, 'Field hargaPerBulan tidak boleh negatif'],
    },
    jalur: {
      type: [String],
      default: [],
    },
    wakil: {
      type: subscribe,
      default: true,
    },
    fakultasId: {
      type: Object
      required: [true, 'Field fakultasId wajib diisi'],
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Koleksi di MongoDB akan bernama "boardingrooms".
const kandidat = mongoose.model('kandidat', kandidatSchema);

module.exports = kandidat;
module.exports.kandidat = kandidat;