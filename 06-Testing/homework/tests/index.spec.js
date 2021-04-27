const { expect } = require("chai");
const session = require("supertest-session");
const { sumArray, pluck } = require("../utils.js");
const app = require("../index.js"); // Importo el archivo de entrada del server de express.

const agent = session(app);

describe("Test de APIS", () => {
  describe("GET /", () => {
    it("responds with 200", () => agent.get("/").expect(200));
    it("responds with and object with message `hola`", () =>
      agent.get("/").then((res) => {
        expect(res.body.message).to.be.equal("hola");
      }));
  });

  describe("GET /test", () => {
    it("responds with 200", () => agent.get("/test").expect(200));
    it("responds with and object with message `test`", () =>
      agent.get("/test").then((res) => {
        expect(res.body.message).to.be.equal("test");
      }));
  });

  describe("POST /sum", () => {
    it("responds with 200", () => agent.post("/sum").expect(200));
    it("responds with the sum of 2 and 3", () =>
      agent
        .post("/sum")
        .send({ a: 2, b: 3 })
        .then((res) => {
          expect(res.body.result).to.be.equal(5);
        }));
  });

  describe("POST /producto", () => {
    it("responds with 200", () => agent.post("/product").expect(200));
    it("responds with the product of 2 and 3", () =>
      agent
        .post("/product")
        .send({ a: 2, b: 3 })
        .then((res) => {
          expect(res.body.result).to.be.equal(6);
        }));
  });

  describe("POST /sumArray", () => {
    it("responds with 200", () =>
      agent.post("/sumArray").send({ array: [], num: 1 }).expect(200));
    it("return true when invoked with [2, 5, 7, 10, 11, 15, 20] and 13", () =>
      agent
        .post("/sumArray")
        .send({ array: [2, 5, 7, 10, 11, 15, 20], num: 13 })
        .then((res) => {
          expect(res.body.result).to.be.equal(true);
        }));
    it("return false when invoked with [2, 5, 7, 10, 11, 15, 20] and 99", () =>
      agent
        .post("/sumArray")
        .send({ array: [2, 5, 7, 10, 11, 15, 20], num: 99 })
        .then((res) => {
          expect(res.body.result).to.be.equal(false);
        }));
  });

  describe("GET /numString", () => {
    it("responds with 200", () => agent.get("/numString?string=a").expect(200));
    it("responds with arrays length for hola", () =>
      agent.get("/numString?string=hola").then((res) => {
        expect(res.body.result).to.be.equal(4);
      }));
    it("responds with arrays length for lighuen", () =>
      agent.get("/numString?string=lighuen").then((res) => {
        expect(res.body.result).to.be.equal(7);
      }));
    it("responds with 400 if string is a number", () => {
      agent.get("/numString?string=5").expect(400);
    });
    it("responds with 400 if string is empty", () => {
      agent.get("/numString").expect(400);
    });
  });

  describe("POST /pluck", () => {
    const products = [
      { name: "Notebook", price: 1000 },
      { name: "Smart Phone", price: 400 },
    ];
    it("responds with 200", () =>
      agent.post("/pluck").send({ array: [], prop: "a" }).expect(200));
    it("responds correct properties", () =>
      agent
        .post("/pluck")
        .send({ array: products, prop: "name" })
        .then((res) => {
          expect(res.body.result).to.deep.equal(["Notebook", "Smart Phone"]);
        }));
    it("responds with 400 if array is not an array", () =>
      agent.post("/pluck").send({ array: 123, prop: "name" }).expect(400));
    it("responds with 400 if prop is an empty string", () =>
      agent.post("/pluck").send({ array: products, prop: "" }).expect(400));
  });
});
