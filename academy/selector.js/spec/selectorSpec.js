describe("selector", function() {
  var elements;

  it("should select one element by id", function() {
    elements = $('#pagetitle');
    expect(elements.length).toEqual(1);
  });

  it("should select the right element by id", function() {
    elements = $('#pagetitle');
    expect(elements[0].innerHTML).toEqual("My Photos");
  });

  it("should select tag names", function() {
    elements = $('h2');
    expect(elements.length).toEqual(3);
  });

  it("should select class", function() {
    elements = $('.photo');
    expect(elements.length).toEqual(4);
  });

  it("should select class, including elements that have multiple classes", function() {
    elements = $('.lead');
    expect(elements.length).toEqual(3);
  });

  it("should select by tag AND className", function() {
    elements = $('h2.small');
    expect(elements.length).toEqual(2);
  });

});
