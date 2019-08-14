CREATE TABLE [dbo].[StudentCourse]
(
	[StudentId] UNIQUEIDENTIFIER NOT NULL,
	[CourseId] INT NOT NULL,
	CONSTRAINT [PK_StudentCourse] PRIMARY KEY CLUSTERED ([StudentId], [CourseId] ASC),
	CONSTRAINT [FK_StudentCourse_Student] FOREIGN KEY ([StudentId]) REFERENCES [dbo].[Student] ([Id]) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT [FK_StudentCourse_Course] FOREIGN KEY ([CourseId]) REFERENCES [dbo].[Course] ([Id]) ON DELETE CASCADE ON UPDATE CASCADE
)
