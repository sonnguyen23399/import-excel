const XLSX = require("xlsx");
const Movie = require("../models/movie.model")
const outputPath = 'storage/outputs'

exports.index = async(req, res) => {
    const movies = await Movie.findAll();
    return res.render('index', { movies });
}

exports.import = async(req, res) => {
    const wb = XLSX.readFile(req.file.path);
    const sheets = wb.SheetNames;

    if (sheets.length > 0) {
        const data = XLSX.utils.sheet_to_json(wb.Sheets[sheets[0]]);
        const movies = data.map(row => ({
            movie: row['Movie'],
            category: row['Category'],
            director: row['Director'],
            rating: row['Rating']
        }))
        await Movie.bulkCreate(movies);
    }
    return res.redirect('/');
}