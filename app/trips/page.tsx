"use client";

import { Card } from "@/app/_components/card";
import Link from "next/link";

const Trips = () => {
  return (
    <div className="flex gap-8">
      <Link href="/trips/morocco23">
        <Card
          imageUrl="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyb2Njb3xlbnwwfHwwfHx8MA%3D%3D"
          title="Marokko"
          description="This is a description of a beautiful landscape."
        />
      </Link>

      <Link href="/trips/mexico22">
        <Card
          imageUrl="https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWV4aWNvfGVufDB8fDB8fHww"
          title="Mexico"
          description="This is a description of a beautiful landscape."
        />
      </Link>
    </div>
  );
};

export default Trips;
