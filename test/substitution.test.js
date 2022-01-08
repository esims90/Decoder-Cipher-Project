const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("subsitution", () => {
    it ("should return false if the substitution alphabet is missing", () => {
        const input = "message";
        const alphabet = "";
        const actual = substitution(input, alphabet, (encode = true));
        const expected = false

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it ("should return false if the substitution alphabet is not equal to 26 character", () => {
        const input = "message";
        const alphabet = "a";
        const actual = substitution(input, alphabet, (encode = true));
        const expected = false

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it ("should return false if the substitution alphabet does not contain a unique set of characters", () => {
        const input = "message";
        const alphabet = "ababababababababababababab";
        const actual = substitution(input, alphabet, (encode = true));
        const expected = false

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it ("should encode a message by using the given substition alphabet", () => {
        const input = "message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input, alphabet, (encode = true));
        const expected = "ykrrpik"

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it ("should work with unique characters", () => {
        const input = "message";
        const alphabet = "plmoknijbuhv.gctfxrdzeswaq";
        const actual = substitution(input, alphabet, (encode = true));
        const expected = ".krrpik"

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it ("should leave spaces as is", () => {
        const input = "my message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input, alphabet, (encode = true));
        const expected = "ya ykrrpik"

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it ("should decode a message by using the given substition alphabet", () => {
        const input = "ykrrpik";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input, alphabet, (encode = false));
        const expected = "message"

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it ("should work with unique characters", () => {
        const input = ".krrpik";
        const alphabet = "plmoknijbuhv.gctfxrdzeswaq";
        const actual = substitution(input, alphabet, (encode = false));
        const expected = "message"

        expect(actual);
        expect(actual).to.equal(expected);
    });
    it ("should leave spaces as is", () => {
        const input = "ya ykrrpik";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input, alphabet, (encode = false));
        const expected = "my message"

        expect(actual);
        expect(actual).to.equal(expected);
    });
});
