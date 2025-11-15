"use client";

import Link from "next/link";

import Layout from "components/Common/Layout";

import styles from "./page.module.scss";

export default function Page() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className="mb-4">
          <Link
            href="/xiaomi"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white
             font-bold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all"
          >
            View Xiaomi Store →
          </Link>
        </div>
        {/* <Applicantion /> */}
      </div>
    </Layout>
  );
}
