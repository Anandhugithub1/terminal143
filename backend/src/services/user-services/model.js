const AWS = require('@aws-sdk/client-dynamodb');
const dynamo = new AWS.DynamoDBClient();

const USER_TABLE = 'Users';

class UserModel {
  constructor({ userId, name, email, password, age, gender, interests, bio, popularity }) {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = bio;
    this.popularity = popularity;
  }

  async save() {
    const command = new AWS.PutItemCommand({
      TableName: USER_TABLE,
      Item: {
        userId: { S: this.userId },
        name: { S: this.name },
        email: { S: this.email },
        password: { S: this.password },
        age: { N: this.age.toString() },
        gender: { S: this.gender },
        interests: { S: JSON.stringify(this.interests) },
        bio: { S: this.bio },
        popularity: this.popularity ? { N: this.popularity.toString() } : undefined,
      },
    });
    await dynamo.send(command);
  }
}

module.exports = UserModel;
