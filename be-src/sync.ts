import { sequelize } from "./models/conection";
import { User, Pet, Auth} from "./models"

User.sequelize.sync({ alter: true })
.then(res => console.log(res) )