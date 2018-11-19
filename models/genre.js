var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookGenreSchema = new Schema(
    {
        genre:{type: String, min: 3, max: 100}
    }
);
//Virtual for Book Genre url
BookGenreSchema
.virtual('url')
.get(function (){
    return '/catalog/genre/' + this._id;
});

// Export Model
module.exports = mongoose.model('Genre', BookGenreSchema);