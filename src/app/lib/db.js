

const { username, password } = process.env;

export const connectionstr = `mongodb+srv://${username}:${password}@fooddeliveryapp.bwzkx.mongodb.net/restoDB?retryWrites=true&w=majority&appName=FoodDeliveryApp`