import esBisiesto from "./esBisiesto";

describe("Función esBisiesto", () => {
    it("debería retornar true para los años divisibles por 400", () => {
      expect(esBisiesto(2000)).toEqual(true);
      expect(esBisiesto(1600)).toEqual(true);
    });

    it("debería retornar false para los años divisibles por 100 pero no por 400", () => {
        expect(esBisiesto(1700)).toEqual(false);
        expect(esBisiesto(1800)).toEqual(false);
        expect(esBisiesto(1900)).toEqual(false);
        expect(esBisiesto(2100)).toEqual(false);
      });
});