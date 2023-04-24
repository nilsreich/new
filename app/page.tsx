import {createClient} from '@supabase/supabase-js'

export const revalidate = 0

export default async function Page() {
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

  const data = await supabase.from('posts').select('*')

  console.log(data)

  return (
    <pre>nix</pre>
  )
}
