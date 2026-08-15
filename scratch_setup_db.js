const { Client } = require('pg');

const connectionString = 'postgresql://postgres:kLMcHXzdyUfy1DPZ@db.kysjyjrburbfziqkoaky.supabase.co:5432/postgres';

const client = new Client({
  connectionString,
});

async function setupDatabase() {
  try {
    await client.connect();
    console.log("Connected to Supabase PostgreSQL.");

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS public.leads (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT NOT NULL,
        workflow_constraint TEXT NOT NULL
      );
    `;

    await client.query(createTableQuery);
    console.log("Table 'leads' created successfully.");

  } catch (err) {
    console.error("Error setting up database:", err);
  } finally {
    await client.end();
  }
}

setupDatabase();
