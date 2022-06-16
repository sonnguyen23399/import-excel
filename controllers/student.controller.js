const XLSX = require("xlsx");
const Student = require("../models/student.model")
const outputPath = 'storage/outputs'

exports.index = async(req, res) => {
    const students = await Student.findAll();
    return res.render('index', { students });
}

exports.import = async(req, res) => {
    const wb = XLSX.readFile(req.file.path);
    const sheets = wb.SheetNames;

    if (sheets.length > 0) {
        const data = XLSX.utils.sheet_to_json(wb.Sheets[sheets[0]]);
        const students = data.map(row => ({
            school: row['School'],
            class: row['Class'],
            name: row['Name'],
            school: row['Score']
        }))
        await Student.bulkCreate(students);
    }
    return res.redirect('/');
}