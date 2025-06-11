import "../estilos/MenuAdmistracion.css";
import LogFondo from "../recursos/MenuAdm/LogFondo.png";
import LogGestionUsuario from "../recursos/MenuAdm/LogGestionUsuario.png";
import LogNotiAlerta from "../recursos/MenuAdm/LogNotiAlerta.png";
import LogValidarAlerta from "../recursos/MenuAdm/LogValidarAlerta.png";

const MenuAdministracion = () => {
  return (
    <div className="menu-admin-fondo">
      <header className="menu-admin-header">
        <div className="menu-admin-logo">
          <img src={LogFondo} alt="Logo Quito" className="logo-quito" />
          <span className="ponte-once">
            <span className="ponte">¡PONTE</span> <span className="once">ONCE!</span>
          </span>
        </div>
        <div className="menu-admin-user">
          <span className="icono-engranaje">⚙️</span>
          <span className="nombre-usuario">César M</span>
          <span className="icono-desplegar">▼</span>
        </div>
      </header>
      <main className="menu-admin-main">
        <h1 className="menu-admin-titulo">Menú de Administrador</h1>
        <div className="menu-admin-opciones">
          <div className="opcion-admin">
            <button className="btn-opcion rojo-morado">Gestión de Usuarios</button>
            <img src={LogGestionUsuario} alt="Gestión de Usuarios" className="img-opcion" />
          </div>
          <div className="opcion-admin">
            <button className="btn-opcion rojo-morado">Notificaciones de Alertas</button>
            <img src={LogNotiAlerta} alt="Notificaciones de Alertas" className="img-opcion" />
          </div>
          <div className="opcion-admin">
            <button className="btn-opcion rojo-morado">Validar Alertas</button>
            <img src={LogValidarAlerta} alt="Validar Alertas" className="img-opcion" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuAdministracion;