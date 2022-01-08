const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar",() => {
    it("should return false if the shift amount is 0", () => {
        const input = "secret message";
        const shift = 0;        
        const actual = caesar(input, shift, (encode = true));
        const expected = false

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it("should return false if the shift amount is above 25", () => {
        const input = "secret message";
        const shift = 26;        
        const actual = caesar(input, shift, (encode = true));
        const expected = false

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it("should return false if the shift amount is less than 25", () => {
        const input = "secret message";
        const shift = -26;        
        const actual = caesar(input, shift, (encode = true));
        const expected = false

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it("should encode a massage by shifting the letters", () => {
        const input = "secret message";
        const shift = 3;        
        const actual = caesar(input, shift, (encode = true));
        const expected = "vhfuhw phvvdjh"

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it("should leave spaces and other symbols as is", () => {
        const input = "secret message.";
        const shift = 3;        
        const actual = caesar(input, shift, (encode = true));
        const expected = "vhfuhw phvvdjh."

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const input = "Secret Message";
        const shift = 3;        
        const actual = caesar(input, shift, (encode = true));
        const expected = "vhfuhw phvvdjh"

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it("should handle letters at the end of the alphabet", () => {
        const input = "z";
        const shift = 3;        
        const actual = caesar(input, shift, (encode = true));
        const expected = "c"

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift that will shift to the left", () => {
        const input = "secret message";
        const shift = -3;        
        const actual = caesar(input, shift, (encode = true));
        const expected = "pbzobq jbppxdb"

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it("should decode a massage by shifting the letters in the opposite direction", () => {
        const input = "vhfuhw phvvdjh";
        const shift = 3;        
        const actual = caesar(input, shift, false);
        const expected = "secret message"

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it("should leave spaces and other symbols as is", () => {
        const input = "vhfuhw phvvdjh.";
        const shift = 3;        
        const actual = caesar(input, shift, false);
        const expected = "secret message."

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const input = "vhfuhw phvvdjh";
        const shift = 3;        
        const actual = caesar(input, shift, false);
        const expected = "secret message"

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it("should appropriately handle letters at the end of the alphabet", () => {
        const input = "c";
        const shift = 3;        
        const actual = caesar(input, shift, false);
        const expected = "z"

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift that will shift to the left", () => {
        const input = "pbzobq jbppxdb";
        const shift = -3;        
        const actual = caesar(input, shift, false);
        const expected = "secret message"

        expect(actual);
        expect(actual).to.equal(expected);
    });    
});
