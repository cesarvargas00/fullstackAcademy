describe("Bubble Sort", function() {
    //BubbleSort
    it("handles an empty array", function() {
        expect(bubbleSort([])).toEqual([]);
    });

    it("should handle an array with one element",function(){
      expect(bubbleSort([10])).toEqual([10]);
    });

    it("should handle an array with multiple elements",function(){
      expect(bubbleSort([10,5,17,32,3,4])).toEqual([3,4,5,10,17,32]);
    });

    it("should handle an array with (multiple * 4) elements",function(){
      expect(bubbleSort([10,25,24,1,75,4326,324,43,623,5,23,100,17,32,3,4])).toEqual([ 1, 3, 4, 5, 10, 17, 23, 24, 25, 32, 43, 75, 100, 324, 623, 4326 ]);
    });

});

describe("Merge Sort", function(){
   it("is able to merge two arrays", function() {
        expect(merge([67,78,103,800],[5,23,100,103])).toEqual([ 5,23,67,78,100,103,103,800]);
    });
});

