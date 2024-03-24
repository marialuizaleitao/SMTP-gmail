# Projeto de Envio de E-mails via SMTP do Gmail

Este projeto consiste em um script em Node.js que utiliza o serviço SMTP (Simple Mail Transfer Protocol) do Gmail para enviar e-mails. Ele é útil para automatizar o envio de mensagens de forma programática, por exemplo, para notificações, alertas ou comunicações automatizadas.

## O que é SMTP do Gmail?

SMTP (Simple Mail Transfer Protocol) é um protocolo de comunicação usado para enviar e-mails pela Internet. O Gmail fornece um serviço SMTP que permite aos usuários enviar e-mails usando suas contas do Gmail através de clientes de e-mail ou aplicativos de terceiros.

## Como o projeto funciona?

O projeto é composto por três arquivos principais:

1. **package-lock.json**: Este arquivo é gerado automaticamente pelo npm e lista as dependências exatas do projeto, garantindo que as mesmas versões das dependências sejam instaladas em diferentes máquinas.

2. **package.json**: Contém metadados sobre o projeto, bem como as dependências necessárias para executá-lo.

3. **sendEmail.js**: Este é o arquivo principal do projeto. Ele contém o script em Node.js que utiliza a biblioteca Nodemailer para enviar e-mails através do serviço SMTP do Gmail. O script carrega as credenciais de e-mail do Gmail e outras configurações de um arquivo `.env` e envia um e-mail de exemplo para um destinatário especificado.

## Como usar o projeto?

Para usar este projeto, siga as instruções abaixo:

1. Clone o repositório para o seu ambiente de desenvolvimento.
2. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
3. Configure as variáveis de ambiente necessárias no arquivo `.env` na raiz do projeto, incluindo seu endereço de e-mail do Gmail e uma senha de aplicativo gerada.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Execute o comando `node sendEmail.js` para enviar o e-mail de exemplo.

## Nota de segurança

É importante observar que este projeto utiliza variáveis de ambiente para armazenar credenciais sensíveis, como o endereço de e-mail e a senha do Gmail. Certifique-se de não compartilhar essas informações publicamente e mantenha-as seguras.

---

Espero que este README ajude a entender o projeto e como utilizá-lo. Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.
# Projeto de Envio de E-mails via SMTP do Gmail

Este projeto consiste em um script em Node.js que utiliza o serviço SMTP (Simple Mail Transfer Protocol) do Gmail para enviar e-mails. Ele é útil para automatizar o envio de mensagens de forma programática, por exemplo, para notificações, alertas ou comunicações automatizadas.

## O que é SMTP do Gmail?

SMTP (Simple Mail Transfer Protocol) é um protocolo de comunicação usado para enviar e-mails pela Internet. O Gmail fornece um serviço SMTP que permite aos usuários enviar e-mails usando suas contas do Gmail através de clientes de e-mail ou aplicativos de terceiros.

## Como o projeto funciona?

O projeto é composto por três arquivos principais:

1. **package-lock.json**: Este arquivo é gerado automaticamente pelo npm e lista as dependências exatas do projeto, garantindo que as mesmas versões das dependências sejam instaladas em diferentes máquinas.

2. **package.json**: Contém metadados sobre o projeto, bem como as dependências necessárias para executá-lo.

3. **sendEmail.js**: Este é o arquivo principal do projeto. Ele contém o script em Node.js que utiliza a biblioteca Nodemailer para enviar e-mails através do serviço SMTP do Gmail. O script carrega as credenciais de e-mail do Gmail e outras configurações de um arquivo `.env` e envia um e-mail de exemplo para um destinatário especificado.

## Como usar o projeto?

Para usar este projeto, siga as instruções abaixo:

1. Clone o repositório para o seu ambiente de desenvolvimento.
2. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
3. Configure as variáveis de ambiente necessárias no arquivo `.env` na raiz do projeto, incluindo seu endereço de e-mail do Gmail e uma senha de aplicativo gerada.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Execute o comando `node sendEmail.js` para enviar o e-mail de exemplo.

## Nota de segurança

É importante observar que este projeto utiliza variáveis de ambiente para armazenar credenciais sensíveis, como o endereço de e-mail e a senha do Gmail. Certifique-se de não compartilhar essas informações publicamente e mantenha-as seguras.

---

Espero que este README ajude a entender o projeto e como utilizá-lo. Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.
