import app from './app';
import { connectDB } from './db';


async  function main(){
  try{
    await connectDB()
    app.listen(3000);
    console.log('Server on port 3000');
  }
  catch(e:any){
    console.log(e.message);
  }
}

main()