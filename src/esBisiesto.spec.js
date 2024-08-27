import esBisiesto from "./esBisiesto";

describe("Función esBisiesto", () => {
    it("debería retornar true para los años divisibles por 400", () => {
      expect(esBisiesto(2000)).toEqual(true);
      expect(esBisiesto(1600)).toEqual(true);
    });
});