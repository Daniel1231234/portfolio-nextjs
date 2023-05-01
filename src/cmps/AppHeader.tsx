"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import HireMeModal from "./HireMeModal";

const AppHeader = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const showHireMeModal = () => {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="container"
    >
      <div className="flex items-center justify-between max-w-screen-lg py-6 xl:max-w-screen-xl z-10">
        <div className="flex justify-between items-center px-4 sm:px-0">
          <Link href="/" className="rounded-sm">
            <Image
              src="/header.png"
              className="w-8 hover:opacity-80 transition-opacity cursor-pointer"
              alt="Dark Logo"
              width={150}
              height={120}
            />
          </Link>
        </div>

        <button
          onClick={showHireMeModal}
          className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
          aria-label="Hire Me Button"
        >
          Hire Me
        </button>
      </div>
      <div>
        {showModal && (
          <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
        )}
      </div>
    </motion.nav>
  );
};

export default AppHeader;
