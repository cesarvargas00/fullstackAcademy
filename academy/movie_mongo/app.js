var sqlite3 = require('sqlite3').verbose();
var sql_db = new sqlite3.Database('data/imdb.sqlite3.db');
var MongoClient = require('mongodb').MongoClient;

var expect = require('chai').expect;

var sql_tables = ['movies', 'actors', 'directors_genres', 'movies_directors', 'roles', 'directors', 'movies_genres'];


//   ____ ___  ______   __  _____  _    ____  _     _____ ____  
//  / ___/ _ \|  _ \ \ / / |_   _|/ \  | __ )| |   | ____/ ___| 
// | |  | | | | |_) \ V /    | | / _ \ |  _ \| |   |  _| \___ \ 
// | |__| |_| |  __/ | |     | |/ ___ \| |_) | |___| |___ ___) |
//  \____\___/|_|    |_|     |_/_/   \_\____/|_____|_____|____/ 
var migrate_1 = function(mongo_db) {
  sql_tables.forEach(function(table_name) {
    
    var currCollection = mongo_db.collection(table_name);
    currCollection.drop();

    sql_db.each("SELECT * FROM " + table_name, function(err, row) {
      console.log("Inserting row: ", row);
      currCollection.insert(row,{w: 0});
    });
  });
};

//  _____ _____ ____ _____     ____ ___  ______   __
// |_   _| ____/ ___|_   _|   / ___/ _ \|  _ \ \ / /
//   | | |  _| \___ \ | |(_) | |  | | | | |_) \ V / 
//   | | | |___ ___) || | _  | |__| |_| |  __/ | |  
//   |_| |_____|____/ |_|(_)  \____\___/|_|    |_|  
                                                 
//  _____  _    ____  _     _____ ____  
// |_   _|/ \  | __ )| |   | ____/ ___| 
//   | | / _ \ |  _ \| |   |  _| \___ \ 
//   | |/ ___ \| |_) | |___| |___ ___) |
//   |_/_/   \_\____/|_____|_____|____/ 
var query_test_1 = function(mongo_db) {
  sql_tables.forEach(function(table_name) {
    var currCollection = mongo_db.collection(table_name);
    sql_db.get("SELECT COUNT(*) as count FROM " + table_name, function(err, row) {
      currCollection.count(function(err, mongo_count) {
        console.log("Mongo had " + mongo_count + " docs, sql had " + row.count + " docs");
        expect(row.count).to.equal(mongo_count);
      });
    });
  });
};


//   ____ _____ _   _ ____  _____ ____    ___ _   _ _____ ___  
//  / ___| ____| \ | |  _ \| ____/ ___|  |_ _| \ | |_   _/ _ \ 
// | |  _|  _| |  \| | |_) |  _| \___ \   | ||  \| | | || | | |
// | |_| | |___| |\  |  _ <| |___ ___) |  | || |\  | | || |_| |
//  \____|_____|_| \_|_| \_\_____|____/  |___|_| \_| |_| \___/ 
                                                            
//  __  __  _____     _____ _____ ____  
// |  \/  |/ _ \ \   / /_ _| ____/ ___| 
// | |\/| | | | \ \ / / | ||  _| \___ \ 
// | |  | | |_| |\ V /  | || |___ ___) |
// |_|  |_|\___/  \_/  |___|_____|____/ 

// migrate movie_genres into an embedded array inside Movies called 'genres'
var migrate_2 = function(mongo_db) {
  var currCollection = mongo_db.collection("movies");
  var genreCollection = mongo_db.collection("movies_genres");

};

//  _____ _____ ____ _____     ____ _____ _   _ ____  _____ ____  
// |_   _| ____/ ___|_   _|   / ___| ____| \ | |  _ \| ____/ ___| 
//   | | |  _| \___ \ | |(_) | |  _|  _| |  \| | |_) |  _| \___ \ 
//   | | | |___ ___) || | _  | |_| | |___| |\  |  _ <| |___ ___) |
//   |_| |_____|____/ |_|(_)  \____|_____|_| \_|_| \_\_____|____/ 
                                                               
//  ___ _   _ _____ ___    __  __  _____     _____ _____ ____  
// |_ _| \ | |_   _/ _ \  |  \/  |/ _ \ \   / /_ _| ____/ ___| 
//  | ||  \| | | || | | | | |\/| | | | \ \ / / | ||  _| \___ \ 
//  | || |\  | | || |_| | | |  | | |_| |\ V /  | || |___ ___) |
// |___|_| \_| |_| \___/  |_|  |_|\___/  \_/  |___|_____|____/ 
var query_test_2 = function(mongo_db) {
  var movieCollection = mongo_db.collection("movies");
  movieCollection.findOne({name:"Braveheart"}, function(err, braveheart) {
    console.log("Braveheart has genres: ", braveheart.genres);
    expect(braveheart.genres).to.eql(['Drama', 'War', 'Action']);
  });
};


//  __  __ _____ ____   ____ _____ 
// |  \/  | ____|  _ \ / ___| ____|
// | |\/| |  _| | |_) | |  _|  _|  
// | |  | | |___|  _ <| |_| | |___ 
// |_|  |_|_____|_| \_\\____|_____|
                                
//  ____ ___ ____  _____ ____ _____ ___  ____  ____       _    _   _ ____  
// |  _ \_ _|  _ \| ____/ ___|_   _/ _ \|  _ \/ ___|     / \  | \ | |  _ \ 
// | | | | || |_) |  _|| |     | || | | | |_) \___ \    / _ \ |  \| | | | |
// | |_| | ||  _ <| |__| |___  | || |_| |  _ < ___) |  / ___ \| |\  | |_| |
// |____/___|_| \_\_____\____| |_| \___/|_| \_\____/  /_/   \_\_| \_|____/ 
                                                                        
//  __  __  _____     _____ _____ ____  
// |  \/  |/ _ \ \   / /_ _| ____/ ___| 
// | |\/| | | | \ \ / / | ||  _| \___ \ 
// | |  | | |_| |\ V /  | || |___ ___) |
// |_|  |_|\___/  \_/  |___|_____|____/ 
                                     
var migrate_3 = function(mongo_db) {
  // get rid of movies_directors table
  // and put the reference ID of the Director into the Movie document
};


//  _____ _____ ____ _____    __  __ _____ ____   ____ _____ 
// |_   _| ____/ ___|_   _|  |  \/  | ____|  _ \ / ___| ____|
//   | | |  _| \___ \ | |(_) | |\/| |  _| | |_) | |  _|  _|  
//   | | | |___ ___) || | _  | |  | | |___|  _ <| |_| | |___ 
//   |_| |_____|____/ |_|(_) |_|  |_|_____|_| \_\\____|_____|
                                                          
//  ____ ___ ____  _____ ____ _____ ___  ____  ____       _    _   _ ____  
// |  _ \_ _|  _ \| ____/ ___|_   _/ _ \|  _ \/ ___|     / \  | \ | |  _ \ 
// | | | | || |_) |  _|| |     | || | | | |_) \___ \    / _ \ |  \| | | | |
// | |_| | ||  _ <| |__| |___  | || |_| |  _ < ___) |  / ___ \| |\  | |_| |
// |____/___|_| \_\_____\____| |_| \___/|_| \_\____/  /_/   \_\_| \_|____/ 
                                                                        
//  __  __  _____     _____ _____ ____  
// |  \/  |/ _ \ \   / /_ _| ____/ ___| 
// | |\/| | | | \ \ / / | ||  _| \___ \ 
// | |  | | |_| |\ V /  | || |___ ___) |
// |_|  |_|\___/  \_/  |___|_____|____/ 
var query_test_3 = function(mongo_db) {
  var movieCollection = mongo_db.collection("movies");
  var directorsCollection = mongo_db.collection("directors");
  movieCollection.findOne({name:"Braveheart"}, function(err, braveheart) {
    // braveheart should have a directors array that holds a reference to the director 
    // it should be an Array because a movie can have more than one director
    directorsCollection.findOne({_id: braveheart.directors[0]}, function(err, director) {
      expect(director.last_name).to.eql('Gibson');
    }
  });
};


var migrate_4 = function(mongo_db) {
  // get rid of the Roles table
  // put an JS Array of Objects into the Movies table
  // that looks like this
  // roles: [{role: "Willem Wallace", actor_id: ObjectId("18908129038129831212")}, ...]

};


var query_test_4 = function(mongo_db) {
  var movieCollection = mongo_db.collection("movies");
  movieCollection.findOne({name:"Braveheart"}, function(err, braveheart) {
    // there were 60 roles in Braveheart
    expect(braveheart.roles.length).to.equal(60);
  });
};


MongoClient.connect("mongodb://localhost:27017/movie_mongo", {w:0}, function(err, db) {
  if(err) {
    console.log("Error", err);
  }
  console.log("Connected to mongo");

  // migrate_1(db);
  // query_test_1(db);

  // migrate_2(db);
  // query_test_2(db);
 
  // migrate_3(db);
  // query_test_3(db);
 
  // migrate_4(db);
  // query_test_4(db);

});
