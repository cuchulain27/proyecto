

exports.find_page= async(req, res) => {
    let criteria = req.query.search;
    let regex = new RegExp(criteria);
    let blogs = await Blog.find({ name: { $regex: regex, $options: 'i' } }).catch(ex => { return [] });

    if (blogs.length > 0) {
        return res.status(200).send({ blogs: blogs, success: true });
    } else {
        return res.status(200).send({ blogs: [], success: false });
    }
}
