const venom = require('venom-bot');
let client = null;

(async () => {
  if(!client){
    client = await venom.create()
  }
})();

module.exports = {
  async store(request,response){

      const {phone, message} = request.body;

      client
      .sendText(`${phone}@c.us`, message)
      .then(() => {})
      .catch((erro) => {
        console.error('Erro ao enviar mensagem: ', erro);
      });

      return response.json(message);
      
  },

}