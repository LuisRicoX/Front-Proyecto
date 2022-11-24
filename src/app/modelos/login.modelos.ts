import { DatosModelo } from "./datos.modelos";

export class LoginModelo{
    datos?: DatosModelo;
    token?: string;
    enSesion: boolean = false;
}