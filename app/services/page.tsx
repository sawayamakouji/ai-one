// app/services/page.tsx
"use client";

import SteinStore from "stein-js-client";
import { useState, useEffect } from "react";

type Service = {
  名前: string;
  詳細: string;
  タグ?: string;
  おすすめポイント?: string;
  URL?: string;
  ポイント?: string;
};

const STEIN_URL = process.env.NEXT_PUBLIC_STEIN_URL;
if (!STEIN_URL) {
  console.error("NEXT_PUBLIC_STEIN_URL is not defined. Please check your environment variables.");
}

const store: SteinStore | null = STEIN_URL ? new SteinStore(STEIN_URL) : null;

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [tagFilter, setTagFilter] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    async function fetchServices() {
      if (store === null) {
        console.error("SteinStore is not initialized due to missing NEXT_PUBLIC_STEIN_URL.");
        return;
      }

      try {
        setIsLoading(true);
        const data = await store.read("Sheet1") as Service[];
        setServices(data);
        setFilteredServices(data);
        const uniqueTags = Array.from(new Set(data.flatMap(service => service.タグ?.split(",") || [])));
        setTags(uniqueTags);
      } catch (error) {
        console.error("Failed to fetch data from Stein API:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchServices();
  }, []);

  useEffect(() => {
    let filtered = services;

    if (search) {
      filtered = filtered.filter(service =>
        (service.名前 && service.名前.includes(search)) ||
        (service.詳細 && service.詳細.includes(search)) ||
        (service.タグ && service.タグ.includes(search)) ||
        (service.おすすめポイント && service.おすすめポイント.includes(search))
      );
    }

    if (tagFilter) {
      filtered = filtered.filter(service => service.タグ?.includes(tagFilter));
    }

    setFilteredServices(filtered);
  }, [search, tagFilter, services]);

  return (
    <main className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">AIサービス紹介</h2>
      <p className="text-gray-700 mb-8">
        ここでは、様々な生成AIツールを紹介します。  
        画像生成、文章生成、音声編集、動画制作など幅広い分野をカバー予定です。
      </p>


      <div className="mb-6">
        <label htmlFor="tagFilter" className="block text-sm font-medium text-gray-700">タグで絞り込み:</label>
        <select
          id="tagFilter"
          value={tagFilter}
          onChange={(e) => setTagFilter(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="">すべてのタグ</option>
          {tags.map((tag, index) => (
            <option key={index} value={tag}>{tag}</option>
          ))}
        </select>
      </div>


      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700">検索:</label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="名前、詳細、タグ、おすすめポイントで検索"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      {isLoading ? (
        <p className="text-gray-700">読み込み中...</p>
      ) : filteredServices.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {service["タグ"] && (
              <p className="text-xs text-gray-500 mb-1">
                  <span className="font-semibold">タグ:</span> {service["タグ"]}
              </p>
              )}
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
              {service["名前"]}</h4>
              <p className="text-sm text-gray-600 mb-3">{service["詳細"]}</p>

              {service["おすすめポイント"] && (
                <p className="text-xs text-gray-500">
                  <span className="font-semibold">おすすめpoint:</span> {service["おすすめポイント"]}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700">該当するサービスが見つかりません。</p>
      )}

      {selectedService && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedService(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{selectedService["名前"]}</h3>
            <p className="text-gray-700 mb-4">{selectedService["ポイント"]}</p>
            {selectedService["URL"] && (
              <a
                href={selectedService["URL"]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                詳細を見る
              </a>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
