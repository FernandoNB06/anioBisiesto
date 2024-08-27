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

      it("debería retornar true para los años divisibles por 4 pero no por 100", () => {
        expect(esBisiesto(2008)).toEqual(true);
        expect(esBisiesto(2012)).toEqual(true);
        expect(esBisiesto(2016)).toEqual(true);
      });

      it("debería retornar false para los años que no son divisibles por 4", () => {
        expect(esBisiesto(2017)).toEqual(false);
        expect(esBisiesto(2018)).toEqual(false);
        expect(esBisiesto(2019)).toEqual(false);
      });
});