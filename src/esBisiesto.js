function esBisiesto(año) {
    if (año % 400 === 0) {
      return true;
    } else if (año % 100 === 0) {
        return false;
    }
    
    
    };

export default esBisiesto;