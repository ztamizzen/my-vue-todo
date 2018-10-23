import * as helpers from "@/store/helpers/immutable";

describe("helpers are immutable functions for arrays", () => {
  const sortFunction = (one, two) => {
    return one - two;
  };
  // We can use these consts since the functions we
  // call are immutable and will not change the arrays.
  // It's an implicit part of the tests.
  const nilToFour = [0, 1, 2, 3, 4];
  const oneToFour = [1, 2, 3, 4];
  const oneToThree = [1, 2, 3];
  const unorderedArray = [2, 1, 4, 3];

  it("should copy an array", () => {
    expect(helpers.immutableArrayCopy(oneToFour)).toEqual(oneToFour);
  });

  it("should pop", () => {
    expect(helpers.immutablePop(oneToFour)).toEqual(oneToThree);
  });

  it("should shift", () => {
    expect(helpers.immutableShift(oneToFour)).toEqual([2, 3, 4]);
  });

  it("should unshift", () => {
    expect(helpers.immutableUnshift(oneToFour, 0)).toEqual(nilToFour);
  });

  it("should sort an array", () => {
    expect(helpers.immutableSort(unorderedArray, sortFunction)).toEqual(
      oneToFour
    );
  });

  it("should sort an array without chaning it", () => {
    expect(helpers.immutableSort(unorderedArray, sortFunction)).not.toEqual(
      unorderedArray
    );
  });

  it("should reverse an array", () => {
    expect(helpers.immutableReverse(oneToThree)).toEqual([3, 2, 1]);
  });

  it("should push", () => {
    expect(helpers.immutablePush(oneToThree, 4)).toEqual(oneToFour);
  });

  it("should splice", () => {
    expect(helpers.immutableSplice(oneToThree, 1, 1, 4)).toEqual([1, 4, 3]);
  });
  it("should delete", () => {
    expect(helpers.immutableDelete(oneToThree, 1)).toEqual([1, 3]);
  });
});
