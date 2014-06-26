module.exports = function(swig) {
  var page_link = function (doc) {
    var link_name;
    if (typeof doc.title !== "undefined" && doc.title !== "") {
      link_name = doc.title
    } else {
      link_name = "Page "+doc.url_name;
    }
    return "<a href='/wiki/"+doc.url_name+"'>"+link_name+"</a>";
  };

  var marked = function (body) {
    var marked = require('marked');
    return marked(body);
  };

  // marked.safe = true;
  page_link.safe = true;

  swig.setFilter('marked', marked);
  swig.setFilter('page_link', page_link);
};