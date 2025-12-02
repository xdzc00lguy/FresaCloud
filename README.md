# 🌥️ **FresaCloud — Checklist**

---

## ✅ **1. Planejamento Inicial**

**MVP**

* [ ] Bot responde comandos básicos
* [ ] Backend inicia/paralisa apps
* [ ] Dashboard exibe status e logs simples
* [ ] Execução de apps Python e JavaScript

**Postergar para depois**

* [ ] Autenticação avançada
* [ ] Limites de CPU/RAM
* [ ] Sistema de billing
* [x] Deploy via GitHub

---

## 🧩 **2. Arquitetura**

* [x] Definir arquitetura geral (Bot → API → Engine → Dashboard)
* [x] Criar diagrama
* [x] Escolher tecnologias definitivas

---

## 📁 **3. Repositório**

* [x] Criar repositório `fresacloud/`
* [x] Criar README inicial
* [x] Criar pastas:

  * [x] `/bot`
  * [x] `/backend`
  * [x] `/engine`
  * [x] `/dashboard`
* [x] Configurar ambiente e dependências

---

## 🤖 **4. Discord Bot**

### **Estrutura Básica**

* [ ] Criar bot no Discord Developer Portal
* [ ] Comando `/ping`
* [ ] Comandos principais:

  * [ ] `/start`
  * [ ] `/stop`
  * [ ] `/status`

### **Integração**

* [ ] Bot envia requisições ao backend
* [ ] Tratamento de erros
* [ ] Respostas formatadas (embeds, mensagens claras)

---

## 🛠 **5. Backend (API)**

### **Setup Base**

* [x] Criar projeto FastAPI ou Express
* [ ] Endpoint GET `/status`
* [x] Estrutura principal de rotas

### **Endpoints Essenciais**

* [ ] POST `/apps/start`
* [ ] POST `/apps/stop`
* [ ] GET `/apps/status`
* [ ] Sistema simples de logs

### **Banco de Dados**

* [ ] Configurar PostgreSQL
* [ ] Tabelas de usuários/apps
* [ ] Registro de estado das aplicações

---

## ⚙ **6. Engine de Execução**

### **Execução**

* [ ] Função para rodar apps Python
* [ ] Função para rodar apps JavaScript
* [ ] Suporte a Docker ou subprocessos
* [ ] Captura de logs
* [ ] Sistema de kill/stop

### **Gerenciamento**

* [ ] Monitoramento do processo
* [ ] Reinício automático (fase posterior)

---

## 🖥 **7. Dashboard**

### **Estrutura Base**

* [ ] Criar projeto React/Next.js
* [ ] Página inicial com dados da API
* [ ] Lista de apps
* [ ] Status online/offline

### **Controles**

* [ ] Botão “Start”
* [ ] Botão “Stop”
* [ ] Visualização de logs (fase posterior)

---

## 🔗 **8. Integração Completa**

* [ ] Bot controla backend
* [ ] Backend controla engine
* [ ] Dashboard consulta backend
* [ ] Testes de ciclo completo (start → status → logs → stop)

---

## 🧪 **9. Testes**

**Unitários**

* [ ] Testar bot
* [ ] Testar API
* [ ] Testar engine

**Fluxo Final**

* [ ] Testar via Discord
* [ ] Testar via Dashboard
* [ ] Testes de falhas (erros, loops infinitos, travamentos)

---

## 🚀 **10. Deploy do MVP**

* [ ] Deploy da API em VPS
* [ ] Deploy do bot (na mesma VPS ou separado)
* [ ] Deploy do dashboard (Vercel, VPS, etc.)
* [ ] Configurar logs persistentes
* [ ] PM2 / systemd / Docker Compose

---

## 🔮 **11. Melhorias Futuras**

* [ ] Dashboard com WebSockets
* [ ] Templates de aplicações
* [ ] Limite de uso (CPU/RAM)
* [ ] Autenticação avançada
* [ ] Billing e planos premium
