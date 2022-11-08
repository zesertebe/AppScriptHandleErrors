
/**
 * @class HandleErrors
 * @author: Arturo G - zesertebe@gmail.com  - https://ocancelada.dev
 * @version: 1.0.0
 * @classdesc: Clase que permite manejar errores en una función
 * se recomienda usar la extension de Chrome para una mejor visualizacion: https://chrome.google.com/webstore/detail/gase-google-appscript-edi/lefcemnilieamgifcegilmkaclmhakfc

 * */
class HandleErrors {

  /**
   * ### *constructor*
   * 
   * @param{Boolean} logError - Booleano que define si los errores se deben enviar por email
   * @param{string} logEmail - El correo al cual se deben enviar los registros de errores
   * @param{string} nameApp - El nombre de la aplicación
   * @param{string} urlApp - la url del proyecto AppScript
   * 
   */
  constructor( logError = false, logEmail = '', nameApp = '', urlApp = '', authorName = '', authorLink = '' ) {
    this.logError = logError;
    this.logEmail = logEmail;
    this.nameApp = nameApp;
    this.urlApp = urlApp;
    this.authorName = authorName;
    this.authorLink = authorLink;
  }

  /**
   * #### metodo encargado de manejar los errores de otras funciones
   * ```javascript
   * const CATCH_ERROR = new HandleErrors(
   * true,
   * GLOBAL_DATA.adminEmail,
   * GLOBAL_DATA.appName,
   * GLOBAL_DATA.appUrl,
   * 'Arturo',
   * 'https://ocancelada.dev'
   * );
   * 
   * function miFuncion_(dato){
   *  console.log(dato);
   * }
   * const revisarErrores = () => CATCH_ERROR.handling(miFuncion_, 123);
   * ```
   * @param{function} func La funcion que queremos manejar
   * @param{Object} args Los distintos argumentos que reciben las funciones a manejar
   */
  handling(func, ...args) {
    try {
      return func(...args);
    } catch (error) {
      const eR = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/;
      if (this.logError && eR.test(this.logEmail) ) {
        GmailApp.sendEmail(this.logEmail,
          `Se ha registrado un error en ${this.nameApp}`,
          ``,
          {
            htmlBody: `<table width="700px" style="border-spacing: 0px; margin: 0 auto; text-align: center; font-family: arial, sans-serif; font-size: 26px; line-height: 20px; color: #0a0937; background-color: #7F5BB5; border-radius:8px;" border="0px" cellpadding="0px"cellspacing="0"><tr><td><p><strong style="color: #99FFC1; font-weight: bold;">Se ha encontrado el siguiente error en ${this.nameApp}</strong></p></td></tr><tr><td><table style="border-spacing: 0px; margin: 0 auto; text-align: center; font-family: arial, sans-serif; font-size: 20px; line-height: 26px; color: #0a0937;" cellpadding="15px" cellspacing="0"><tr><td><div style="width: 90%; height: auto; margin: 0 5%; display: block;">Notificador de errores informa que::</div></td></tr><tr><td style="background-color: #dddddd;"><div style="width: 90%; height: auto; margin: 0 5%; display: block;"><table style="border-spacing: 0px; text-align: left; font-family: arial, sans-serif; font-size: 16px; line-height: 26px; margin: 10px 0;" cellpadding="0" cellspacing="0"><thead style="text-align: center; border-bottom: 1px solid #111;"><tr><td style="border-bottom: 1px solid #111;"> Nombre de la funcion</td><td style="border-bottom: 1px solid #111;">Descripcion del error</td></tr></thead><tbody style="text-align:center;"><tr><td style="padding-right: 10px; border-right: 1px solid #111;"><b>${func.name}</b></td><td>${error}</td></tr></tbody></table></div></td></tr></table></td></tr><tr><td><table style="border-spacing: 0px; text-align: center; font-family: arial, sans-serif; font-size: 16px; line-height: 26px; color: #0a0937; margin: 10px 0;" cellpadding="0" cellspacing="0"><tr><td width="30px" style="vertical-align: bottom;">&nbsp;</td><td width="590px"><p style="margin: 0;">Su correo se encuentra como responsable del aplicativo: <a style="color: #fff;" href="${this.urlApp}">Enlace</a> </p></td><td width="30px"></td></tr></table></td></tr><tr><td><table style="border-spacing: 0px; text-align: center; font-family: arial, sans-serif; font-size: 14px; line-height: 26px; color: #686868; margin: 5px 0;" cellpadding="0" cellspacing="0"><tr><td width="30px" style="vertical-align: bottom;">&nbsp;</td><td width="590px"><p style="color: #ccc; margin: 0;">Solución desarrollada por <a style="color: #eee;" href="${this.authorLink}">${this.authorName}</a> </p></td><td width="30px"></td></tr></table></td></tr></table>`
          });
      };
      return { status: null, content: error };
    }
    
  }



}
