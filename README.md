# API description

KusServer API documentation

No Guarantee No Warranty No Return

## POST Insert|Update request (/api/post/<string: TableName>)

POST Insert request allows you to insert data in app database. There are three insert mods:

All POST Insert|Update requests end with the name of the target table (object table).

### insert new object `-id, all data`

If you want to insert a completely new object into the database, you must specify all the object data in the body of the post request, except for the object ID (or with an identifier equaled to zero).

result: ID of the created object.

### update existing object `id, some data`

To update an existing object, you must specify the ID of the target object. After that, you can freely choose which data you want to change: if some property of objects is excluded from the post request body, when it will not be changed.

result: ID of the updated object.

### Many-To-Many request `many-to-many type, (-id, all data)/(id), arrays of indexes`

To start inserting "Many to Many", you need to specify the many_to_many field in the request body with one of two values:
`add` - add connections to existing ones 
`replace` - create a new connection and delete old ones


If you do not specify the object identifier (or its identifier is zero), then the specified data will be used to create a new object using the rules of the insert new object function, and the resulting identifier will be used in the next step.
 
The "Many to many" request connects the selected object (by ID) from the <string: TableName> with all objects from the array of IDs specified as a parameter of the request body. The name of the array property must match the TableName of the objects.
