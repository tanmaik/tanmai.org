"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { streamComponent } from "./actions";
import DynamicComponent from "./DynamicComponent";

export default function Page() {
  const [component, setComponent] = useState<string>("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await streamComponent(e.currentTarget.input.value);

          setComponent(result);
        }}
      >
        <Input type="text" name="input" />
        <Button>Submit</Button>
      </form>
      <div>
        {component.length > 0 && (
          <>
            <DynamicComponent html={component} />
          </>
        )}
      </div>
    </div>
  );
}
