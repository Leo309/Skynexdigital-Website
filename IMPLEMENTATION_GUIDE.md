# Implementation Guide for SKYNEX Website Updates

## Image Management

I've created dedicated directories for different types of images:

1. **Product Screenshots**: `/public/images/tools/`
   - `Real_Return_Analyzer.png` — Real Return Analyzer screenshot
   - `CollabOS.png` — CollabZen.ai screenshot (to be replaced with updated branding)
   - GeoGrade.ai screenshot — to be added

2. **Location Images**: `/public/images/locations/`
   - Store location-specific images here

## Supabase Contact Form Integration

### Step 1: Set Up Supabase Project

1. Go to [Supabase](https://supabase.com) and create a new project
2. Once your project is created, go to the SQL Editor
3. Copy and paste the content from `lib/supabase/schema.sql` into the SQL Editor and run it to create the necessary tables and policies

### Step 2: Configure Environment Variables

1. Update the `.env.local` file with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

2. Get these values from your Supabase project settings (API section)

### Step 3: Testing the Contact Form

1. Start your development server:
   ```
   npm run dev
   ```

2. Navigate to the contact page
3. Fill out the form and submit
4. Check the Supabase Table Editor to verify your submission was received

### Step 4: Viewing Submissions

To view contact form submissions:

1. Log in to your Supabase dashboard
2. Go to the Table Editor
3. Select the `contact_submissions` table
4. All submissions will be listed here

## Additional Information

- The contact form API endpoint is at `/app/api/contact/route.ts`
- The Supabase client setup is in `/lib/supabase/client.ts`
- Form submissions are stored in the `contact_submissions` table with appropriate security policies

## Deployment Considerations

When deploying to production:

1. Make sure to set the environment variables in your hosting provider
2. Test the form submission in the production environment
3. Consider setting up email notifications in Supabase for new form submissions using Edge Functions

## Troubleshooting

If you encounter issues with the contact form:

1. Check the browser console for any JavaScript errors
2. Verify that your Supabase credentials are correct
3. Ensure your Supabase project is active and the table is created correctly
4. Check the Network tab in browser developer tools to see the API response
