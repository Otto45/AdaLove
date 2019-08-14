﻿CREATE TABLE [dbo].[Lesson]
(
	[Id] INT NOT NULL PRIMARY KEY,
	[Name] VARCHAR(50) NOT NULL,
	[Description] VARCHAR(100) NOT NULL,
	[CourseId] INT NOT NULL,
	CONSTRAINT [FK_Lesson_Course] FOREIGN KEY ([CourseId]) REFERENCES [dbo].[Course] ([Id]) ON DELETE CASCADE ON UPDATE CASCADE
)
