create table Apartments (
	id int identity(1,1) primary key,
	propertyType varchar(50) not null,
	hostEmail nvarchar(64) foreign key references Hosts(email) not null,
	name nvarchar(50),
	description nvarchar(MAX),
	img nvarchar(256),
	neighborhood nvarchar(256),
	latitude varchar(10),
	longtitude varchar(10),
	roomType varchar(20),
	numBathrooms varchar(20),
	numBedrooms tinyint,
	numBeds tinyint,
	accommodates tinyint not null,
	amenities varchar(256),
	price smallint not null,
	minNights tinyint,
	maxNights smallint,
	rating float,
	reviewAccuracy float,
	reviewsClean float,
	reviewLocation float
)
