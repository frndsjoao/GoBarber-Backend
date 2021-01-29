# Recuperação de senha
**Requisitos Funcionais**
- O usuario deve poder recuperar sua senha informando o seu e-mail;
- O usuario deve receber um e-mail com instruções de recuperação de senha;
- O usuario deve poder resetar sua senha. 

**Requisitos Não Funcionais**
- Utilizar mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mail deve acontecer em segundo plano (background job).

**Regras de Negócios**
- O link enviado por e-mail deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil 
**Requisitos Funcionais**
- O usuario deve poder atualizar seu perfil (nome, email e senha);

**Requisitos Não Funcionais**

**Regras de Negócios**
- O usuário não pode alterar seu e-mail para um e-mail já utilizado.
- Para atualizar a senha, o usuário deve informar a senha antiga;
- Para atualizar a senha, o usuário deve confirmar a nova senha;


# Painel do prestador
**Requisitos Funcionais**
- O usuário deve poder visualizar todos os agendamentos listados de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas.

**Requisitos Não Funcionais**
- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando o Socket.io;

**Regras de Negócios**
- A notificação deve ter um status de lida ou não-lida para que o prestador possa gerenciar;


# Agendamento de serviços
**Requisitos Funcionais**
- O usuario deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder visualizar as datas com horário disponíveis para agendamento com um prestador;
- O usuario deve poder listar horário disponiveis para agendamento em um dia especifico com um prestador;
- O usuário deve poder realizar o agendamento de um serviço.

**Requisitos Não Funcionais**
- A listagem de prestadores deve ser armazenada em cache;
- 

**Regras de Negócios**
- Cada agendamento deve durar exatamente 1h;
- Os agendamentos devem estar disponiveis entre 8h às 18h;
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo.
