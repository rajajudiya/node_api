const data = (req, res) => {
    let datas = {
        name : "raj",
        lastname : "Ajudiya",
        email : "rajajudiya@gmail.com"
    }

    console.log("datas",datas);
    res.json(datas)
}

module.exports = data