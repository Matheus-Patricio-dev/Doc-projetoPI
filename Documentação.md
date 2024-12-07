<h1 align="center">Documentação Projeto Integrador I</h1>

### Integrantes do Grupo:
- [**Matheus Patricio**](https://github.com/Matheus-Patricio-dev) - Integrante -> Pagina de vendas(3) & pagina de sobre nos(2)
- [**Bruno Barboza**](https://github.com/BrunoBarbozaDeLima)  - Integrante. -> Pagina de FeedBack(4)
- [**Kleita Barbosa**](https://github.com/kleitadenje)  - Integrante. -> Pagina contato(5)
- [**Eduardo Terrone**](https://github.com/terronemusic)  - Integrante. -> Pagina home(1)



## Objetivo I:
Desenvolver um layout com 5 páginas de um projeto em front-end (sem código).

## Tema/Conceito do projeto:

### E-commerce de Satélites na orbita da Terra.
Venda Nichada para Empresas que necessitam de serviços, operações tecnológicas que envolvem o uso dos nossos poderosos
Satélites de ultima geração.

- Serviços de Comunicação de Alta Velocidade
- Análises Geoespaciais e Mapas
- Monitoramento de Equipamentos
- Sistemas de Backup para Empresas
- Monitoramento e Prevenção de Desastres
- Defesa contra objetos espaciais
  
### Tarefas:
- [x] Definir qual o tema e conceito
- [x] Definir qual vai ser o conteúdo da aplicação
- [x] Definir quem vai ficar com qual página para desenvolvimento
- [x] Desenvolver o Layout da aplicação

### Anotações:

Layout KLEITA : 

![image 2](https://github.com/user-attachments/assets/c9eb1d84-b8a7-4e4a-bda4-064b95caf5d2)

Layout Bruno: 

https://docs.google.com/document/d/1THJvoWKjZ-ZsR4N1O4lGtmaLcRsZKxSe4yb4VqrIO-A/edit?usp=sharing 

Layout Eduardo: 

![image](https://github.com/user-attachments/assets/259d74cc-dc06-43ba-8bb9-51ab2f1b60c8)
![image](https://github.com/user-attachments/assets/e146d335-a6bb-4f01-9235-80ff8a1f0c8c)


layout matheus: 
https://www.starlink.com/br/residential


# 🏗️ **Configuração Inicial**

Antes de começar, assegure-se de que:

1. **O repositório foi criado no seu GitHub.**  
   Por exemplo: `https://github.com/seu-usuario/nome-do-repositorio`
   
2. **Os colaboradores têm acesso ao repositório.**  
   No GitHub, vá para a seção **Settings > Manage access** e adicione os colaboradores.

---

## 📂 **Passos para Cada Integrante**

Cada membro da equipe deve seguir este fluxo individualmente para trabalhar em sua página corretamente.

---

### 1️⃣ **Clonar o Repositório**

Cada membro deve clonar o repositório para seu ambiente local:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2️⃣ Criar um Branch para Sua Página
Cada membro deve criar um branch próprio para trabalhar em sua página. O branch deve ter um nome claro, relacionado à página que está sendo desenvolvida:

```bash
git checkout -b nome-da-pagina
```

### 3️⃣ Desenvolver Sua Página
Cada membro deve desenvolver sua respectiva página no ambiente local:

Criar/editar arquivos HTML, CSS ou JavaScript conforme a responsabilidade atribuída.
Testar localmente para garantir que tudo funciona corretamente.


### 4️⃣ Commitar as Alterações
Após finalizar as alterações, o membro deve adicionar e realizar o commit das mudanças:

````bash
git add .
git commit -m "Adicionando/Atualizando a página X"
````

### 5️⃣ Enviar o Branch para o Repositório Remoto
O membro deve enviar seu branch para o repositório remoto:

```bash
git push origin nome-da-pagina
```

### 6️⃣ Abrir um Pull Request
Após enviar seu branch para o repositório remoto, o membro deve abrir um Pull Request (PR):

- Acesse o repositório no GitHub.
- O GitHub exibirá automaticamente um botão "Compare & pull request".
- Clique em "Compare & pull request".
- Preencha a descrição do PR com detalhes relevantes sobre o que foi feito.
- Clique em "Create Pull Request".

### 7️⃣ Revisão de Código
Os outros membros da equipe devem revisar o Pull Request. Durante essa revisão:

- Sugestões ou correções podem ser solicitadas.
- Se necessário, o autor pode fazer novas alterações no mesmo branch e enviar (com git push) para atualizar o PR.

### 8️⃣ Merge da Branch no Main
Após a aprovação do Pull Request, você ou o responsável pelo repositório pode fazer o merge no branch principal (geralmente chamado de main ou master).

- Clique no botão "Merge pull request" no GitHub.
- Apague o branch no repositório remoto (se necessário):

```
git push origin --delete nome-da-pagina
```

### 🔄 Manter o Ambiente Atualizado
Antes de começar qualquer nova tarefa, cada membro deve garantir que seu ambiente local esteja atualizado com as mudanças mais recentes do branch principal:

````
git checkout main
git pull origin main
````

### 🧹 Boas Práticas
- Mensagens de Commit Claras: Use mensagens de commit descritivas.
- Branches Específicos: Cada membro deve trabalhar em um branch separado para evitar conflitos.
- Testar Localmente: Antes de enviar o Pull Request, teste todas as mudanças localmente.
- Revisar PRs: Sempre revise os PRs antes de realizar o merge.
- Evitar Trabalhar Diretamente no main: Sempre use branches separados.
