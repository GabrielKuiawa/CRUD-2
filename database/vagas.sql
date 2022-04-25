-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 25/04/2022 às 17:42
-- Versão do servidor: 8.0.28-0ubuntu0.20.04.3
-- Versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `vagas`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `candidatar`
--

CREATE TABLE `candidatar` (
  `id_vaga` int NOT NULL,
  `id_usuario` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `candidatar`
--

INSERT INTO `candidatar` (`id_vaga`, `id_usuario`) VALUES
(8, 'teste3@email'),
(8, 'teste3@email'),
(8, 'teste3@email'),
(8, 'teste3@email');

-- --------------------------------------------------------

--
-- Estrutura para tabela `empresas`
--

CREATE TABLE `empresas` (
  `id` int NOT NULL,
  `nome` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `empresas`
--

INSERT INTO `empresas` (`id`, `nome`) VALUES
(24, NULL),
(25, 'teorema'),
(26, 'teoremaaa'),
(27, 'teoremaaa'),
(28, 'teoremaaa'),
(30, 'teoremaaa'),
(31, 'teoremaaa');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`email`, `senha`, `nome`) VALUES
('alan;', '$2b$10$GBhsmBuO7vtzhrIdytOFcO5q9mJx/RRNn7GJQBhKYJtFF0ILRowEq', 'alan'),
('teste1@email', 'alan', '$2b$10$3ymGev/amJGIoFPLgjYzn.WADGtz44ylpSTYhjz1xM3my6X1yxQ76'),
('teste2@email', '$2b$10$ihubIh49UuOr4fu/ziuM..BCYJQigEyBjUttFSfjQP5s.ji2WL1ae', 'alan'),
('teste3@email', '$2b$10$5ERZcomA/pA0snnHaoH4WeKasdiWZ41NKKrmsUxJHehRoPx3LbOL.', 'alan');

-- --------------------------------------------------------

--
-- Estrutura para tabela `vagas_emprego`
--

CREATE TABLE `vagas_emprego` (
  `id` int NOT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `salario` float DEFAULT NULL,
  `descricao` text,
  `empresa_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `vagas_emprego`
--

INSERT INTO `vagas_emprego` (`id`, `titulo`, `salario`, `descricao`, `empresa_id`) VALUES
(7, 'teste', 23333, 'alguma coisa', 26),
(8, 'teste2', 2, 'funcionaaaaaaaaaaaaaaa', 25),
(9, 'teste21', 33, 'lol', NULL),
(15, 'teste21', 33, 'lol', 24),
(17, 'teste21', 33, 'lol', 24),
(18, 'teste21', 33, 'lolk12121212121', 24),
(19, 'teste21', 33, 'lolk12121212121', 24),
(20, 'teste21', 33, 'lolk12121212121', 24),
(21, 'teste21', 33, 'lolk12121212121', 24),
(22, 'teste21', 33, 'lolk12121212121', 24),
(23, 'teste21', 33, 'lolk12121212121', 24),
(24, 'teste21', 33, 'lolk121212llkk48487788712121', 24),
(25, 'teste21', 33, 'lolk121212llkk484877887rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr12121', 24);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `candidatar`
--
ALTER TABLE `candidatar`
  ADD KEY `FK_vaga` (`id_vaga`),
  ADD KEY `FK_usuario` (`id_usuario`);

--
-- Índices de tabela `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`email`);

--
-- Índices de tabela `vagas_emprego`
--
ALTER TABLE `vagas_emprego`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vagas_emprego_FK` (`empresa_id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de tabela `vagas_emprego`
--
ALTER TABLE `vagas_emprego`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `candidatar`
--
ALTER TABLE `candidatar`
  ADD CONSTRAINT `FK_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`email`) ON DELETE RESTRICT,
  ADD CONSTRAINT `FK_vaga` FOREIGN KEY (`id_vaga`) REFERENCES `vagas_emprego` (`id`) ON DELETE RESTRICT;

--
-- Restrições para tabelas `vagas_emprego`
--
ALTER TABLE `vagas_emprego`
  ADD CONSTRAINT `vagas_emprego_FK` FOREIGN KEY (`empresa_id`) REFERENCES `empresas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
