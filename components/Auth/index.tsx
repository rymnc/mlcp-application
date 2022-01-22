import { Auth, Typography, Button } from "@supabase/ui";
const { Text } = Typography;
import type { NextComponentType } from "next";
import { supabase } from "../../supabase";

function Profile(props: any) {
  const { user } = Auth.useUser();
  if (user)
    return (
      <>
        <Text>Signed in: {user.email}</Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    );
  return props.children;
}

const AuthProfile: NextComponentType = () => {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Profile supabaseClient={supabase}>
            <Auth supabaseClient={supabase} />
      </Profile>
    </Auth.UserContextProvider>
  );
};

export default AuthProfile;
