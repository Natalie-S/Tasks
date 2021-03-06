USE [master]
GO
/****** Object:  Database [UsabilityTesting]    Script Date: 22/05/2013 15:44:50 ******/
CREATE DATABASE [UsabilityTesting] ON  PRIMARY 
( NAME = N'UsabilityTesting', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL10.SQLEXPRESS\MSSQL\DATA\UsabilityTesting.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'UsabilityTesting_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL10.SQLEXPRESS\MSSQL\DATA\UsabilityTesting_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [UsabilityTesting] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [UsabilityTesting].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [UsabilityTesting] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [UsabilityTesting] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [UsabilityTesting] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [UsabilityTesting] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [UsabilityTesting] SET ARITHABORT OFF 
GO
ALTER DATABASE [UsabilityTesting] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [UsabilityTesting] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [UsabilityTesting] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [UsabilityTesting] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [UsabilityTesting] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [UsabilityTesting] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [UsabilityTesting] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [UsabilityTesting] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [UsabilityTesting] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [UsabilityTesting] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [UsabilityTesting] SET  DISABLE_BROKER 
GO
ALTER DATABASE [UsabilityTesting] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [UsabilityTesting] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [UsabilityTesting] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [UsabilityTesting] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [UsabilityTesting] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [UsabilityTesting] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [UsabilityTesting] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [UsabilityTesting] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [UsabilityTesting] SET  MULTI_USER 
GO
ALTER DATABASE [UsabilityTesting] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [UsabilityTesting] SET DB_CHAINING OFF 
GO
/* For security reasons the login is created disabled and with a random password. */
/****** Object:  Login [UsabilityTestingSite]    Script Date: 22/05/2013 15:44:50 ******/
CREATE LOGIN [UsabilityTestingSite] WITH PASSWORD=N'&¦ ;ï¿?K&MøðøÁÊ+¯|{}!Lg3', DEFAULT_DATABASE=[UsabilityTesting], DEFAULT_LANGUAGE=[us_english], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO
ALTER LOGIN [UsabilityTestingSite] DISABLE
GO
/****** Object:  Login [Tony\Natalie]    Script Date: 22/05/2013 15:44:50 ******/
CREATE LOGIN [Tony\Natalie] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT SERVICE\MSSQL$SQLEXPRESS]    Script Date: 22/05/2013 15:44:50 ******/
CREATE LOGIN [NT SERVICE\MSSQL$SQLEXPRESS] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [NT AUTHORITY\SYSTEM]    Script Date: 22/05/2013 15:44:50 ******/
CREATE LOGIN [NT AUTHORITY\SYSTEM] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/****** Object:  Login [BUILTIN\Users]    Script Date: 22/05/2013 15:44:50 ******/
CREATE LOGIN [BUILTIN\Users] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english]
GO
/* For security reasons the login is created disabled and with a random password. */
/****** Object:  Login [##MS_PolicyTsqlExecutionLogin##]    Script Date: 22/05/2013 15:44:50 ******/
CREATE LOGIN [##MS_PolicyTsqlExecutionLogin##] WITH PASSWORD=N'¨æz§6=C¿¥á÷³ÌCBÜ''ÌP¾Ô"Í', DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english], CHECK_EXPIRATION=OFF, CHECK_POLICY=ON
GO
ALTER LOGIN [##MS_PolicyTsqlExecutionLogin##] DISABLE
GO
/* For security reasons the login is created disabled and with a random password. */
/****** Object:  Login [##MS_PolicyEventProcessingLogin##]    Script Date: 22/05/2013 15:44:50 ******/
CREATE LOGIN [##MS_PolicyEventProcessingLogin##] WITH PASSWORD=N'ãRuNV0`	H¬Ôú±l¸äØ#ä«ùE', DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english], CHECK_EXPIRATION=OFF, CHECK_POLICY=ON
GO
ALTER LOGIN [##MS_PolicyEventProcessingLogin##] DISABLE
GO
ALTER AUTHORIZATION ON DATABASE::[UsabilityTesting] TO [Tony\Natalie]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [UsabilityTestingSite]
GO
ALTER SERVER ROLE [securityadmin] ADD MEMBER [UsabilityTestingSite]
GO
ALTER SERVER ROLE [serveradmin] ADD MEMBER [UsabilityTestingSite]
GO
ALTER SERVER ROLE [setupadmin] ADD MEMBER [UsabilityTestingSite]
GO
ALTER SERVER ROLE [processadmin] ADD MEMBER [UsabilityTestingSite]
GO
ALTER SERVER ROLE [diskadmin] ADD MEMBER [UsabilityTestingSite]
GO
ALTER SERVER ROLE [dbcreator] ADD MEMBER [UsabilityTestingSite]
GO
ALTER SERVER ROLE [bulkadmin] ADD MEMBER [UsabilityTestingSite]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [Tony\Natalie]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [NT SERVICE\MSSQL$SQLEXPRESS]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [NT AUTHORITY\SYSTEM]
GO
USE [UsabilityTesting]
GO
/****** Object:  User [UsabilityTestingSite]    Script Date: 22/05/2013 15:44:50 ******/
CREATE USER [UsabilityTestingSite] FOR LOGIN [UsabilityTestingSite] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [UsabilityTestingSite]
GO
ALTER ROLE [db_accessadmin] ADD MEMBER [UsabilityTestingSite]
GO
ALTER ROLE [db_securityadmin] ADD MEMBER [UsabilityTestingSite]
GO
ALTER ROLE [db_ddladmin] ADD MEMBER [UsabilityTestingSite]
GO
ALTER ROLE [db_backupoperator] ADD MEMBER [UsabilityTestingSite]
GO
ALTER ROLE [db_datareader] ADD MEMBER [UsabilityTestingSite]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [UsabilityTestingSite]
GO
ALTER ROLE [db_denydatareader] ADD MEMBER [UsabilityTestingSite]
GO
ALTER ROLE [db_denydatawriter] ADD MEMBER [UsabilityTestingSite]
GO
/****** Object:  UserDefinedFunction [dbo].[checkingUp]    Script Date: 22/05/2013 15:44:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[checkingUp] (@name varchar(50), @pd varchar(50)) 
returns bit
as 
begin

    if exists(select * from dbo.Users where login = @name and password = @pd)  return cast(1 as bit);

    return cast(0 as bit);
end;

GO
ALTER AUTHORIZATION ON [dbo].[checkingUp] TO  SCHEMA OWNER 
GO
/****** Object:  UserDefinedFunction [dbo].[getLastId]    Script Date: 22/05/2013 15:44:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[getLastId] ()
RETURNS int
AS
BEGIN
DECLARE @result int
select @result = MAX(id) from dbo.Main
RETURn @result
END

GO
ALTER AUTHORIZATION ON [dbo].[getLastId] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Main]    Script Date: 22/05/2013 15:44:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Main](
	[id] [int] NOT NULL,
	[statusId] [int] NOT NULL,
	[success] [int] NOT NULL,
	[summary] [float] NULL,
	[data] [smalldatetime] NULL,
 CONSTRAINT [PK_Main] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER AUTHORIZATION ON [dbo].[Main] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Main1]    Script Date: 22/05/2013 15:44:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Main1](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[statusId] [int] NOT NULL,
	[success] [int] NOT NULL,
 CONSTRAINT [PK_Main1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER AUTHORIZATION ON [dbo].[Main1] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Questionnaire]    Script Date: 22/05/2013 15:44:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Questionnaire](
	[questionnaireId] [int] NOT NULL,
	[questionId] [int] NOT NULL,
	[answer] [int] NOT NULL
) ON [PRIMARY]

GO
ALTER AUTHORIZATION ON [dbo].[Questionnaire] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Questions]    Script Date: 22/05/2013 15:44:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Questions](
	[id] [int] NOT NULL,
	[question] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
ALTER AUTHORIZATION ON [dbo].[Questions] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Status]    Script Date: 22/05/2013 15:44:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Status](
	[id] [int] NOT NULL,
	[name] [nchar](10) NOT NULL,
 CONSTRAINT [PK_Status] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER AUTHORIZATION ON [dbo].[Status] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Users]    Script Date: 22/05/2013 15:44:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[login] [varchar](50) NOT NULL,
	[password] [varchar](50) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
ALTER AUTHORIZATION ON [dbo].[Users] TO  SCHEMA OWNER 
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (1, 2, 0, 67, NULL)
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (2, 2, 0, 45.6, NULL)
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (3, 1, 1, 60, NULL)
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (4, 2, 1, 89, CAST(0xA0140000 AS SmallDateTime))
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (7, 1, 1, 59.6, NULL)
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (8, 1, 0, 76, NULL)
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (9, 2, 1, 83, CAST(0xA1910000 AS SmallDateTime))
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (10, 3, 0, 50, CAST(0xA1920000 AS SmallDateTime))
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (11, 3, 0, 87, NULL)
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (12, 2, 0, 74, NULL)
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (13, 2, 1, 69.8, NULL)
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (14, 1, 0, 20, CAST(0xA1A60000 AS SmallDateTime))
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (15, 3, 1, 75, NULL)
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (16, 1, 1, 80, CAST(0xA1A00000 AS SmallDateTime))
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (17, 3, 0, 62.5, CAST(0xA1B10000 AS SmallDateTime))
GO
INSERT [dbo].[Main] ([id], [statusId], [success], [summary], [data]) VALUES (18, 2, 1, 52.5, CAST(0xA1AF052D AS SmallDateTime))
GO
SET IDENTITY_INSERT [dbo].[Main1] ON 

GO
INSERT [dbo].[Main1] ([id], [statusId], [success]) VALUES (1, 2, 0)
GO
SET IDENTITY_INSERT [dbo].[Main1] OFF
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (1, 1, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (1, 2, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (1, 3, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (1, 4, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (1, 5, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (1, 6, 5)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (1, 7, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (1, 8, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (1, 9, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (1, 10, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (2, 1, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (2, 2, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (2, 3, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (2, 4, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (2, 5, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (2, 6, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (2, 7, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (2, 8, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (2, 9, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (2, 10, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (3, 1, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (3, 2, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (3, 3, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (3, 4, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (3, 5, 5)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (3, 6, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (3, 7, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (3, 8, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (3, 9, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (3, 10, 5)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (7, 1, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (7, 2, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (8, 1, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (8, 2, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (11, 1, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (11, 2, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (12, 1, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (12, 2, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (12, 3, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (12, 4, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (12, 5, 5)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (12, 6, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (12, 7, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (12, 8, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (12, 9, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (12, 10, 5)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (13, 1, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (13, 2, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (13, 3, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (13, 4, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (13, 5, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (13, 6, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (13, 7, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (13, 8, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (13, 9, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (13, 10, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (14, 1, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (14, 2, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (14, 3, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (14, 4, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (14, 5, 5)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (14, 6, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (14, 7, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (14, 8, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (14, 9, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (14, 10, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (15, 1, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (15, 2, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (15, 4, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (15, 5, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (15, 6, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (15, 7, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (15, 8, 5)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (15, 9, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (15, 10, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (16, 1, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (16, 2, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (16, 3, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (16, 4, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (16, 5, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (16, 6, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (16, 7, 5)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (16, 8, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (16, 9, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (16, 10, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (18, 1, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (18, 2, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (18, 3, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (18, 4, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (18, 5, 5)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (18, 6, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (18, 7, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (18, 8, 3)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (18, 9, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (18, 10, 5)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (15, 3, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (17, 1, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (17, 2, 1)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (17, 3, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (17, 4, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (17, 5, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (17, 6, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (17, 7, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (17, 8, 2)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (17, 9, 4)
GO
INSERT [dbo].[Questionnaire] ([questionnaireId], [questionId], [answer]) VALUES (17, 10, 1)
GO
INSERT [dbo].[Questions] ([id], [question]) VALUES (1, N'1) Я бы хотел(а) еще поработать с этой программой.')
GO
INSERT [dbo].[Questions] ([id], [question]) VALUES (2, N'2) Программа слишком сложнаяю')
GO
INSERT [dbo].[Questions] ([id], [question]) VALUES (3, N'3) Этой программой легко пользоваться.')
GO
INSERT [dbo].[Questions] ([id], [question]) VALUES (4, N'4) Мне понадобится помощь, чтобы научиться пользоваться этой программой.')
GO
INSERT [dbo].[Questions] ([id], [question]) VALUES (5, N'5) Разные функции в этом приложении правильно сгруппированы.')
GO
INSERT [dbo].[Questions] ([id], [question]) VALUES (6, N'6) В приложении слишком много несоответствий.')
GO
INSERT [dbo].[Questions] ([id], [question]) VALUES (7, N'7) БольшАя часть людей очень быстро научится пользоваться этой программой.')
GO
INSERT [dbo].[Questions] ([id], [question]) VALUES (8, N'8) Это приложение очень трудно использовать.')
GO
INSERT [dbo].[Questions] ([id], [question]) VALUES (9, N'9) Я уверенно себя чувтвовал(а), используя это приложение.')
GO
INSERT [dbo].[Questions] ([id], [question]) VALUES (10, N'10) Мне пришлось многому научиться, прежде чем я смог(ла) работать с приложением.')
GO
INSERT [dbo].[Status] ([id], [name]) VALUES (1, N'Ученик    ')
GO
INSERT [dbo].[Status] ([id], [name]) VALUES (2, N'Студент   ')
GO
INSERT [dbo].[Status] ([id], [name]) VALUES (3, N'Учитель   ')
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

GO
INSERT [dbo].[Users] ([id], [login], [password]) VALUES (1, N'1', N'12')
GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[Main]  WITH CHECK ADD  CONSTRAINT [FK_Main_Status] FOREIGN KEY([statusId])
REFERENCES [dbo].[Status] ([id])
GO
ALTER TABLE [dbo].[Main] CHECK CONSTRAINT [FK_Main_Status]
GO
ALTER TABLE [dbo].[Questionnaire]  WITH CHECK ADD  CONSTRAINT [FK_Questionnaire_Main] FOREIGN KEY([questionnaireId])
REFERENCES [dbo].[Main] ([id])
GO
ALTER TABLE [dbo].[Questionnaire] CHECK CONSTRAINT [FK_Questionnaire_Main]
GO
ALTER TABLE [dbo].[Questionnaire]  WITH CHECK ADD  CONSTRAINT [FK_Questionnaire_Questions] FOREIGN KEY([questionId])
REFERENCES [dbo].[Questions] ([id])
GO
ALTER TABLE [dbo].[Questionnaire] CHECK CONSTRAINT [FK_Questionnaire_Questions]
GO
USE [master]
GO
ALTER DATABASE [UsabilityTesting] SET  READ_WRITE 
GO
