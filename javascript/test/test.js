import chai from "chai"
import { filter, all, any, find } from "../index"

let expect = chai.expect

describe("filter", () => {
  it("returns the exact array that was passed to the function if the predicate returns true every time", () => {
    var input = [1,2,3]
    var predicate = x => true
    var expectedOutput = [1,2,3]
    expect(filter(input, predicate)).to.eql(expectedOutput)
  })
  it("returns an empty array", () => {
    var input = [1,2,3]
    var predicate = x => false
    var expectedOutput = []
    expect(filter(input, predicate)).to.eql(expectedOutput)
  })
  it("returns array containing [true, true]", () => {
    var input = [true,false,true]
    var predicate = x => x
    var expectedOutput = [true, true]
    expect(filter(input, predicate)).to.eql(expectedOutput)
  })
  it("returns array containing ['a','c']", () => {
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
  it('returns the first element of inputArray that predicateFn returns true for, or null if none exist function find(inputArray, predicateFn)', () => {
    expect(find([1,2,3,4,5], (x) => x > 3)).to.eq(4)
    expect(find([1,2,3,5,4], (x) => x < 1)).to.eq(null)
  })
})
