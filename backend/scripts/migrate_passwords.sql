-- Script SQL para migrar senhas para bcrypt
-- Executar via: mysql -u user -p database < migrate_passwords.sql

-- Passo 1: Adicionar coluna password_hash se não existir
ALTER TABLE admin_users
ADD COLUMN IF NOT EXISTS password_hash VARCHAR(255) NULL AFTER password;

-- Passo 2: Verificar estrutura
SHOW COLUMNS FROM admin_users;

-- Passo 3: Mostrar status atual (antes da migração)
SELECT
    id,
    email,
    (password IS NOT NULL) as has_plain_password,
    (password_hash IS NOT NULL) as has_hash
FROM admin_users;
