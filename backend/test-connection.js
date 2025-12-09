import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const testConnection = async () => {
  console.log('🔍 Testing MongoDB Connection...\n');
  
  const mongoUri = process.env.MONGODB_URI;
  
  console.log('Connection String (hidden password):');
  const hiddenUri = mongoUri.replace(/:[^@]*@/, ':****@');
  console.log(hiddenUri);
  console.log('\n');
  
  try {
    console.log('⏳ Connecting to MongoDB...');
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 5000,
    });
    
    console.log('✅ MongoDB Connected Successfully!');
    console.log('Server Address:', mongoose.connection.host);
    console.log('Database:', mongoose.connection.name);
    console.log('Ready State:', mongoose.connection.readyState);
    
    await mongoose.disconnect();
    console.log('\n✅ Connection test passed!');
    
  } catch (error) {
    console.error('\n❌ Connection Failed');
    console.error('Error Type:', error.name);
    console.error('Error Message:', error.message);
    
    if (error.message.includes('ip_not_in_whitelist')) {
      console.error('\n⚠️  Your IP is not whitelisted in MongoDB Atlas');
      console.error('Please add your IP to the whitelist at:');
      console.error('https://cloud.mongodb.com → Network Access');
    } else if (error.message.includes('Authentication failed')) {
      console.error('\n⚠️  Authentication failed - check username/password');
    } else if (error.message.includes('getaddrinfo')) {
      console.error('\n⚠️  Cannot resolve cluster hostname');
    }
    
    process.exit(1);
  }
};

testConnection();
