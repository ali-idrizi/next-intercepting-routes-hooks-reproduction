"use client";

import { useRouter } from "next/navigation";

const AboutModal = () => {
  const router = useRouter();

  return (
    <dialog open>
      <p>about modal</p>
      <form
        method="dialog"
        onSubmit={() => {
          router.back();
        }}
      >
        <button>OK</button>
      </form>
    </dialog>
  );
};

export default AboutModal;
