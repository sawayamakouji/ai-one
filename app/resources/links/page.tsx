// app/resources/links/page.tsx
"use client";

import SteinStore from "stein-js-client";
import { useState, useEffect } from "react";

type Link = {
  名前: string;
  内容: string;
  link: string;
  参考link?: string;
};

const STEIN_URL = process.env.NEXT_PUBLIC_STEIN_URL;
if (!STEIN_URL) {
  console.error("NEXT_PUBLIC_STEIN_URL is not defined. Please check your environment variables.");
}

const store: SteinStore | null = STEIN_URL ? new SteinStore(STEIN_URL) : null;

export default function LinksPage() {
  const [links, setLinks] = useState<Link[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchLinks() {
      try {
        setIsLoading(true);

        // Check for null store explicitly
        if (store === null) {
          throw new Error("SteinStore is not initialized due to missing NEXT_PUBLIC_STEIN_URL.");
        }

        const data = await store.read("Sheet2") as Link[];
        console.log("Fetched links data:", data); // デバッグ用
        setLinks(data);
      } catch (error) {
        console.error("Failed to fetch data from Stein API:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchLinks();
  }, []);

  return (
    <main className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">なんかいろいろ</h2>
      <p className="text-gray-700 mb-8">
        AI関連の便利なツールやニュースや情報を発信しているサイト、個人ブログ、コミュニティを載っけていきますよん
      </p>

      {isLoading ? (
        <p className="text-gray-700">読み込み中...</p>
      ) : links.length > 0 ? (
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                ■{link.名前}
              </a>
              <p className="text-sm text-gray-600">{link.内容}</p>
              {link.参考link && (
                <a
                  href={link.参考link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline text-xs block mt-1"
                >
                  参考
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700">データがありません</p>
      )}
    </main>
  );
}
