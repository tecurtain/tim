import chai from "chai"
import { filter, all, any, find } from "../index"

let expect = chai.expect

describe("filter", () => {
  it("returns a new array containing only the elements from the input array which meet the predicate", () => {
    var input = ['a', 'b', 'c']
    var predicate = x => x != 'b'
    var expectedOutput = ['a', 'c']
    expect(filter(input, predicate)).to.eql(expectedOutput)
  })
})

describe("all", () => {
  it("returns true if all elements in the array meet the predicate", () => {
    expect(all([1,2,3,4,5], (x) => x < 6)).to.eq(true)
  })

  it("returns false if any elements in the array fail the predicate", () => {
    expect(all([1,2,3,4,5], (x) => x < 5)).to.eq(false)
  })
})

describe("any", () => {
  it('returns true if any elements in the array meet the predicate', () => {
    expect(any([1,2,3,4,5], (x) => x > 3)).to.eq(true)
  })

  it('returns false if all elements in the array fail the predicate', () => {
    expect(any([1,2,3,4,5], (x) => x < 1)).to.eq(false)
  })
})

describe("find", () => {
  it('returns the first element of inputArray that meets the predicate', () => {
    expect(find([1,2,3,4,5], (x) => x > 3)).to.eq(4)
  })

  it('returns null if no elements in the inputArray meet the predicate', () => {
    expect(find([1,2,3,5,4], (x) => x < 1)).to.eq(null)
  })
})
