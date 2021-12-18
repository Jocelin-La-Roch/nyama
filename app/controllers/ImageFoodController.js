const fs = require('fs');
const Food = require('../models/Food');
const ImageFood = require('../models/ImageFood');


exports.addImageFood = (req, res, next) => {
    const {files} = req;
    console.log("** FILES  ", req.files,  " **");
    const uploads_folder = "./app/uploaded-files/";

    if (!fs.existsSync(uploads_folder)){
        console.log("** START CREATING ", uploads_folder, " FOLDER **");
        const folders = uploads_folder.split("/")
        let folder_to_create = "";
        console.log("** FOLDERS ", folders, " **");
        for(let i =1; i<folders.length - 1; i++){
            const folder = folders[i];
            if(folder !== "" || folder !== "."){
                folder_to_create = folder_to_create + folder + "/";
            }
            console.log("** CREATING FOLDER", folder_to_create, " FINISHED **");
            if (!fs.existsSync(folder_to_create))fs.mkdirSync(folder_to_create);
        }
    }

    if (!files) {
        return res.status(500).send({ message: "file is not found" })
    }

    const myFile = files.filetoupload;
    const filePath = uploads_folder+myFile.name;

    myFile.mv(`${uploads_folder}${myFile.name}`, async function (err) {
        if (err) {
            console.log("** ERROR ", err, " **");
            return res.status(500).send({
                msg: "Error occured",
                error: err
            });
        }
        console.log("** FILE UPLOAD CORRECTLY **")
        const foodId = req.body.foodId;
        Food.findById(foodId).then(food => {
            if(food === null){
                res.status(204).send({message: "Food not found"});
            }else{
                let time = new Date().getTime();
                let reference = time.toString(36).toUpperCase();
                ImageFood.create({
                    foodId: food.id,
                    reference: reference,
                    format: myFile.name.split('.')[myFile.name.split('.').length-1],
                    url: "./app/uploaded-files/"+myFile.name,
                }).then(imageFood => {
                    res.status(201).send({data: imageFood, message: "added"})
                });
            }
        }).catch(err => {
            res.status(500).send({message: "error"});
            console.log("**ERROR **", err, " **");
        });

    });
};
exports.deleteImageFood = (req, res, next) => {};
exports.getAllImageFood = (req, res, next) => {};
exports.getAllImageFoodByFood= (req, res, next) => {};
