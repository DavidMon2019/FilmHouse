import {Action} from './shared/chat/shared/model/action';

export class Property {
    constructor(
        public id: string,
        public nombre: string,
        public genero: string,
        public idioma: string,
        public fechaEstreno: string,
        public duracion: string,
        public clasificacion: string,
        public resumen: string,
        public link: string,
        public propertyStatus: string[]
    ) {
    }
}


// clase genero
export class Genero {
    constructor(
        public id: number,
        public genero: string,
        public observacion: string
    ) {
    }
}

// clase lenguaje
export class Lenguaje {
    constructor() {
    }
}

// clase subtitulos
export class Subtitulo {
    constructor() {
    }
}

// clase Clasificacion
export class Clasificacion {
    constructor() {
    }
}

export interface Comentarios {
    id: string;
    usuario: string;
    comentario: string;
    idPelicula: string;
    action?: Action;
}


// export class Property {
//     public id: number;
//     public title: string;
//     public desc: string;
//     public propertyType: string;
//     public propertyStatus: string[];
//     public city: string;
//     public zipCode: string;
//     public neighborhood: string[];
//     public street: string[];
//     public location: Location;
//     public formattedAddress: string;
//     public features: string[];
//     public featured: boolean;
//     public priceDollar: Price;
//     public priceEuro: Price;
//     public bedrooms: number;
//     public bathrooms: number;
//     public garages: number;
//     public area: Area;
//     public yearBuilt: number;
//     public ratingsCount: number;
//     public ratingsValue: number;
//     public additionalFeatures: AdditionalFeature[];
//     public gallery: Gallery[];
//     public plans: Plan[];
//     public videos: Video[];
//     public published: string;
//     public lastUpdate: string;
//     public views: number
// }


export class Area {
    constructor(public id: number,
                public value: number,
                public unit: string) {
    }
}

export class AdditionalFeature {
    constructor(public id: number,
                public name: string,
                public value: string) {
    }
}

export class Location {
    constructor(public id: number,
                public lat: number,
                public lng: number) {
    }
}

export class Price {
    public sale: number;
    public rent: number;
}


export class Gallery {
    constructor(public id: number,
                public small: string,
                public medium: string,
                public big: string) {
    }
}

export class Plan {
    constructor(public id: number,
                public name: string,
                public desc: string,
                public area: Area,
                public rooms: number,
                public baths: number,
                public image: string) {
    }
}

export class Video {
    constructor(public id: number,
                public name: string,
                public link: string) {
    }
}

export class Pagination {
    constructor(public page: number,
                public perPage: number,
                public prePage: number,
                public nextPage: number,
                public total: number,
                public totalPages: number) {
    }
}


