import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const testConnection = async () => {
  try {
    console.log('Testing MongoDB Connection with extended timeout...');
    
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 15000,  // Increased to 15 seconds
      socketTimeoutMS: 15000,
      connectTimeoutMS: 15000,
      retryWrites: true,
      w: 'majority'
    });
    
    console.log('✅ MongoDB Connected Successfully!');
    const dbName = mongoose.connection.db.getName();
    console.log('Database Name:', dbName);
    
    await mongoose.disconnect();
    console.log('✅ Connection Test Completed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Connection Error:');
    console.error('Message:', error.message);
    process.exit(1);
  }
};

testConnection();
