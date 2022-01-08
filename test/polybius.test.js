const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius",() => {
    it ("should encode a message by translating each letter into number pairs", () => {
        const input = "message";
        const actual = polybius(input, (encode = true));
        const expected = "23513434112251";

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it ("should translate i and j into 42", () => {
        const input = "jiggle";
        const actual = polybius(input, (encode = true));
        const expected = "424222221351";

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it ("should should leave spaces as is", () => {
        const input = "my message";
        const actual = polybius(input, (encode = true));
        const expected = "2345 23513434112251";

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it ("should decode a massage by translating each pair of numbers into a letter", () => {
        const input = "23513434112251";
        const actual = polybius(input, (encode = false));
        const expected = "message"

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it ("should translate 42 to both i and j", () => {
        const input = "424222221351";
        const actual = polybius(input, (encode = false));
        const expected = "i/j"

        expect(actual);
        expect(actual).to.include(expected);
    });
    it ("should return false if the length of all the numbers is odd", () => {
        const input = "2345 235134341122514";
        const actual = polybius(input, (encode = false));
        const expected = false

        expect(actual);
        expect(actual).to.equal(expected);
    });   
});
