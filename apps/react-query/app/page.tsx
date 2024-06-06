import { prefetchUsersControllerFindAll } from "@/api/endpoints/genAll";
import { UsersList } from "@/components/UsersList";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();
  await prefetchUsersControllerFindAll(queryClient);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <UsersList />
      </HydrationBoundary>
    </main>
  );
}
