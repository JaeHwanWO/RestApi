const express = require('express');
const router = express.Router();

// DB import 해주기
const Post = require('../models/Post');

router.get('/posts', (req, res) => {
    res.send('Post 라우터 사용');
});

router.get('/specific', (req, res) => {
    res.send('specific 라우터 사용');
});

// 모든 포스트 받아옴
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch(err){
        res.json({message: err});
    }
});

// DB에 작성해서 등록하기
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
    const savedPost = await post.save()
    res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
});

// 특정한 포스트를 받아오기
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch (err){
        res.json({message: err});
    }
});

// 포스팅 지우기
router.delete('/:postId', async (req, res) => {
    const removedPost = await Post.remove({_id: req.params.postId});
});

// 업데이트 하기
router.patch('/:postId', async (req, res) => {
    try { 
    const updatedPost = await Post.updateOne(
        { _id: req.params.postId }, 
        { $set: {title: req.body.title}}
    );
    res.json(updatedPost);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;