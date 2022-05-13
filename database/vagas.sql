-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 13/05/2022 às 17:22
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
  `id_usuario` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `empresas`
--

CREATE TABLE `empresas` (
  `id` int NOT NULL,
  `cnpj` varchar(15) DEFAULT NULL,
  `nome` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `senha` text NOT NULL,
  `imagem` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `empresas`
--

INSERT INTO `empresas` (`id`, `cnpj`, `nome`, `senha`, `imagem`) VALUES
(69, '111.222.333', 'teorema', '$2b$10$ryUt5JrniwdGTeFv0cLlIurEsJrBN/72MYxF.SgX6zcj.UYmFRfIG', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `imagem` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`email`, `senha`, `nome`, `imagem`) VALUES
('alan@email.com', '$2b$10$cbOnFDeGTMemSgf5iyPAAueTP7jCVVBzPWeElobt.b77Nya1jjJyG', 'alan', 'uploads/2022-05-11T17:06:23.719ZCaptura de tela de 2022-03-30 14-05-28.png'),
('teste2@email', '$2b$10$hJ5vLrjBbkMoo2cbxcRJtuO9vGWJqgzsjSvLFsa/TpHHSnmFtDUzC', 'alan', 'uploads/2022-04-29T16:48:48.448ZCaptura de tela de 2022-04-06 14-26-38.png'),
('teste3@email', '$2b$10$D13R0YIYpe7CU.MKGsCQVu0W.PtYiVAfAJC9zspuyNCX61IM/1oQS', 'alan', 'uploads/2022-05-04T18:09:27.944ZCaptura de tela de 2022-03-30 14-05-28.png'),
('teste4@email', '$2b$10$NHMsUL4ArUI0Wqls8cGgt.qc8Bi6dFa2N21U5bi5ykHgrLoHjAVPa', 'alan', 'uploads/2022-05-04T18:09:49.514ZCaptura de tela de 2022-03-30 14-05-28.png');

-- --------------------------------------------------------

--
-- Estrutura para tabela `vagas_emprego`
--

CREATE TABLE `vagas_emprego` (
  `id_vag` int NOT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `salario` float DEFAULT NULL,
  `descricao` text,
  `empresa_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `candidatar`
--
ALTER TABLE `candidatar`
  ADD KEY `FK_usuario` (`id_usuario`),
  ADD KEY `FK_vaga` (`id_vaga`);

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
  ADD PRIMARY KEY (`id_vag`),
  ADD KEY `vagas_emprego_FK` (`empresa_id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT de tabela `vagas_emprego`
--
ALTER TABLE `vagas_emprego`
  MODIFY `id_vag` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `candidatar`
--
ALTER TABLE `candidatar`
  ADD CONSTRAINT `FK_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_vaga` FOREIGN KEY (`id_vaga`) REFERENCES `vagas_emprego` (`id_vag`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `vagas_emprego`
--
ALTER TABLE `vagas_emprego`
  ADD CONSTRAINT `vagas_emprego_FK` FOREIGN KEY (`empresa_id`) REFERENCES `empresas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
