async function Session(req, res) {
    try {
        const userDatas = req.session.user;

        //console.log(userDatas.username);
        if (!userDatas) {
            return res.status(401).json({ message: "No sesssion created!" });
        } else {
            res.status(200)
                .json({ sessionData: userDatas, success: true, message: "got Successful" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = Session