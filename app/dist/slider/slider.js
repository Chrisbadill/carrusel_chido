function slider(nombre,velocidad) {
    this.velocidad=velocidad;
     if (!velocidad) {
      this.velocidad=2000;
     }

    this.nombre=nombre;
    this.index=1;
    this.start
    this.contenedor=document.getElementById(nombre);
    this.diapositivas=this.contenedor.getElementsByClassName("diapositiva");
    this.nDiapositivas=this.diapositivas.length

    slider.prototype.mostrarDiapositiva=function (n) {
      this.diapositivas[n-1].style.display="block";
    }
    slider.prototype.ocultarDiapositiva=function (n) {
      this.diapositivas[n-1].style.display="none";
    }

    slider.prototype.ocultarTodasDiapositiva=function () {
      for (var i = 0; i < this.diapositivas.length; i++) {
        this.diapositivas[i].style.display="none";
      }

    }

    slider.prototype.siguiente=function () {
      if (this.index == this.nDiapositivas) {
        this.index=1;
        console.log(this.index);
      } else {
        this.index ++
        console.log(this.index);
      }
      return this.index
    }

    slider.prototype.anterior=function () {
      if (this.index == 1) {
        this.index= this.nDiapositivas;
      } else {
        this.index --
      }
      return this.index
    }

    slider.prototype.reproducir = function () {
      this.start=setInterval(this.siguiente.bind(this), this.velocidad);
    }

    slider.prototype.stop = function () {
      clearInterval(this.start);
    }


    slider.prototype.controlSiguiente=function () {
      this.ocultarDiapositiva(this.index);
      this.mostrarDiapositiva(this.siguiente(this.index));
    }

    slider.prototype.controlAtras=function () {
      this.ocultarDiapositiva(this.index);
      this.mostrarDiapositiva(this.anterior(this.index));
    }

    slider.prototype.reproducirDos = function () {
      this.start=setInterval(this.controlSiguiente.bind(this), this.velocidad);
    }

}
