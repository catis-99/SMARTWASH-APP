# Página de Perfil - SmartWash

## 📱 Descrição
A página de perfil foi criada seguindo o design fornecido, com todas as funcionalidades principais implementadas.

## ✨ Funcionalidades Implementadas

### 1. **Cabeçalho do Perfil**
- Foto de perfil circular com bordas arredondadas
- Nome do usuário (atualmente "Tiago")
- Ícone de pessoa como placeholder quando não há foto

### 2. **Menu de Opções**
- ✅ **Cupões** - Acesso aos cupões de desconto
- ✅ **Reservas** - Visualizar reservas agendadas
- ✅ **Dados pessoais** - Editar informações pessoais
- ✅ **Ajuda** - Central de ajuda
- ✅ **Apoio ao cliente** - Suporte ao cliente
- ✅ **Sair** - Logout com confirmação

### 3. **Navegação Inferior**
- 🏠 Home
- 📱 QR Code Scanner
- 💧 Botão central de ação (FAB)
- 🕐 Histórico
- 👤 Perfil (ativo)

## 🎨 Design
- Layout limpo e moderno
- Ícones intuitivos com fundo colorido
- Barra de navegação inferior fixa com botão flutuante central
- Cores: Azul primário (#3b6cff) e verde para o FAB (#5dd8a8)

## 🚀 Como Usar

### Acessar a Página
1. A partir da home: clique no botão "Ver Perfil" ou no ícone de perfil no cabeçalho
2. Direto pela URL: `/perfil`

### Personalizar o Perfil
No arquivo `perfil.page.ts`, você pode alterar:

```typescript
userName: string = 'Tiago';  // Altere o nome
userPhoto: string = '';       // Adicione URL da foto
```

Para adicionar uma foto real:
```typescript
userPhoto: string = 'assets/icon/seu-avatar.jpg';
```

## 📝 Próximos Passos

### Páginas a Criar (TODOs):
1. **Página de Cupões** - Lista de cupões disponíveis e usados
2. **Página de Reservas** - Histórico e agendamento de reservas
3. **Página de Dados Pessoais** - Formulário de edição de perfil
4. **Página de Ajuda** - FAQ e tutoriais
5. **Página de Apoio ao Cliente** - Chat ou formulário de contato
6. **Página de Scan** - Scanner de QR Code
7. **Página de Histórico** - Histórico de lavagens

### Funcionalidades Futuras:
- [ ] Integração com backend para dados reais do usuário
- [ ] Upload de foto de perfil
- [ ] Sistema de autenticação e logout real
- [ ] Navegação completa entre todas as páginas
- [ ] Notificações e badges nos itens do menu

## 🔧 Arquivos Criados/Modificados

1. `src/app/perfil/perfil.page.html` - Template da página
2. `src/app/perfil/perfil.page.scss` - Estilos da página
3. `src/app/perfil/perfil.page.ts` - Lógica da página
4. `src/app/home/home.page.html` - Adicionado link para perfil
5. `src/app/app-routing.module.ts` - Rota automática criada

## 💡 Dicas

- Para testar, execute: `ionic serve`
- A página é responsiva e adapta-se a diferentes tamanhos de tela
- Os ícones usam o Ionicons (biblioteca padrão do Ionic)
- O botão de voltar retorna para a home

## 🎯 Navegação

```
Home (/home) 
  └─> Perfil (/perfil)
        ├─> Cupões (TODO)
        ├─> Reservas (TODO)
        ├─> Dados Pessoais (TODO)
        ├─> Ajuda (TODO)
        ├─> Apoio ao Cliente (TODO)
        └─> Sair (com confirmação)
```
