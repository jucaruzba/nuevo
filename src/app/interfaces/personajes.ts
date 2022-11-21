export interface Personajes {
  Personajes: Personaje[];
}

export interface Personaje {
  descripcion: string;
  id: number;
  img: string;
  nombre: string;
  procedencia: string;
  tipo: string;
}

export interface DetallePersonaje {
  descripcion?: string;
  id?: number;
  img?: string;
  nombre?: string;
  procedencia?: string;
  tipo?: string;
}

