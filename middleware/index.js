const Comment = require('../models/comment');
const Campground = require('../models/campground');

module.exports = {
    isLoggedIn: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error', 'You must be signed in to do that!');
        res.redirect('/login');
    },
    checkUserCampground: (req, res, next) => {
        Campground.findById(req.params.id, (err, foundCampground) => {
            if (err || !foundCampground) {
                console.log(err);
                req.flash('error', 'Sorry, that campground does not exist!');
                res.redirect('/campgrounds');
            } else if (foundCampground.author.id.equals(req.user._id) || req.user.isAdmin) {
                req.campground = foundCampground;
                next();
            } else {
                req.flash('error', 'You don\'t have permission to do that!');
                res.redirect('/campgrounds/' + req.params.id);
            }
        });
    },
    checkUserComment: (req, res, next) => {
        Comment.findById(req.params.commentId, (err, foundComment) => {
            if (err || !foundComment) {
                console.log(err);
                req.flash('error', 'Sorry, that comment does not exist!');
                res.redirect('/campgrounds');
            } else if (foundComment.author.id.equals(req.user._id) || req.user.isAdmin) {
                req.comment = foundComment;
                next();
            } else {
                req.flash('error', 'You don\'t have permission to do that!');
                res.redirect('/campgrounds/' + req.params.id);
            }
        });
    },
    isAdmin: (req, res, next) => {
        if (req.user.isAdmin) {
            next();
        } else {
            req.flash('error', 'This site is now read only thanks to spam and trolls.');
            res.redirect('back');
        }
    },
    isSafe: (req, res, next) => {
        next();
    }
};